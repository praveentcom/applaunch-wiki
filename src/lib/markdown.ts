import fs from 'fs';
import path from 'path';

export function getMarkdownContent(filename: string): string {
  const filePath = path.join(process.cwd(), 'src', 'content', filename);
  return fs.readFileSync(filePath, 'utf8');
}
