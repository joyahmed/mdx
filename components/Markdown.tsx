// components/Markdown.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
	content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
	return (
		<ReactMarkdown
			components={{
				h1: ({ ...props }) => (
					<h1 className='text-3xl font-bold my-4' {...props} />
				),
				h2: ({ ...props }) => (
					<h2 className='text-2xl font-semibold my-3' {...props} />
				),
				h3: ({ ...props }) => (
					<h3 className='text-xl font-medium my-2' {...props} />
				),
				p: ({ ...props }) => (
					<p className='my-2 text-lg' {...props} />
				),
				li: ({ ...props }) => (
					<li className='my-1 list-disc list-inside' {...props} />
				),
				code: ({ ...props }) => (
					<code className='bg-gray-800 p-1 rounded' {...props} />
				),
				pre: ({ ...props }) => (
					<pre className='bg-gray-800 p-4 rounded' {...props} />
				)
			}}
		>
			{content}
		</ReactMarkdown>
	);
};

export default Markdown;
