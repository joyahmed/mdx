import { getPosts } from '@/lib/get-posts';
import Link from 'next/link';
import React from 'react';

const Home = async () => {
	const posts = await getPosts();
	return (
		<div className='flex flex-col items-center justify-center h-screen w-screen'>
			<h2 className='font-bold text-4xl'>Blog Posts</h2>
			<ul className='list-disc pl-5 font-semibold'>
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
	);
};

export default Home;
