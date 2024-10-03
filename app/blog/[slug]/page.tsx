// app/blog/[slug]/page.tsx
import Markdown from '@/components/Markdown';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

interface Params {
	slug: string;
}

export default async function Post({ params }: { params: Params }) {
	const { slug } = params;
	const filePath = path.join(
		process.cwd(),
		'components',
		'posts',
		`${slug}.mdx`
	);
	const fileContents = fs.readFileSync(filePath, 'utf8');
	const { data, content } = matter(fileContents);

	return (
		<article className='prose mx-auto p-4'>
			<h1 className='text-4xl font-bold mb-4'>{data.title}</h1>
			<Markdown content={content} />
		</article>
	);
}
