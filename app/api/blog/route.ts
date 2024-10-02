import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
	const blogDir = path.join(process.cwd(), 'app', 'components', 'blog');

	try {
		const files = await fs.promises.readdir(blogDir);
		return NextResponse.json(files);
	} catch (err) {
		console.error('Error reading directory:', err);
		return NextResponse.json(
			{ error: 'Error reading blog directory' },
			{ status: 500 }
		);
	}
}
