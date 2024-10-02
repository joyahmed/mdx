import { getPosts } from '@/lib/get-posts';
import Link from 'next/link';
import React from 'react';

const Home = async () => {
	const posts = await getPosts();
	return (
		<div>
			<div className='flex flex-col gap-4'>
				<h2 className='text-lg font-semibold'>Blog Posts</h2>
				<ul className='list-disc pl-5'>
					{posts.map((post, index) => (
						<li key={index}>
							<Link
								href={`/blog/${post.title
									.toLowerCase()
									.replace(/\s+/g, '-')}`}
							>
								{post.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Home;
