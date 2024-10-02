import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'components', 'posts'); // Adjust if
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents); // Get front matter data
    return {
      title: data.title,
      slug: filename.replace(/\.md$/, ''), // Remove file extension for slug
    };
  });

  return posts;
}