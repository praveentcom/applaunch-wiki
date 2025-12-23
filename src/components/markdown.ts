import path from 'path';
import fs from 'fs';
import { policyConfig } from '@/data/config/policy';

/**
 * Formats a config value for markdown substitution.
 * Arrays are joined with ", " for inline usage or as bullet points for list usage.
 * 
 * @param value - The config value (string or array)
 * @param format - Optional format: 'inline' (default) or 'list'
 * @returns Formatted string
 */
function formatValue(value: string | readonly string[], format: 'inline' | 'list' = 'inline'): string {
  if (typeof value === 'string') {
    return value;
  }
  
  if (format === 'list') {
    return value.map(item => `- ${item}`).join('\n');
  }
  
  return value.join(', ');
}
/**
 * Reads markdown content from the content directory and substitutes placeholders
 * with values from the policy configuration.
 * 
 * Supports two placeholder formats:
 * - {{PLACEHOLDER}} or {{PLACEHOLDER:inline}} - Inline format (arrays joined with ", ")
 * - {{PLACEHOLDER:list}} - List format (arrays as bullet points)
 * - __PLACEHOLDER__ (double underscores) - Always inline format
 * 
 * @param filename - Name of the markdown file (e.g., 'privacy.md')
 * @returns Markdown content with placeholders replaced
 */
export function getMarkdownContent(filename: string): string {
  const filePath = path.join(process.cwd(), 'src', 'content', filename);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace all placeholders with actual values from policyConfig
  Object.entries(policyConfig).forEach(([key, value]) => {
    // Replace {{PLACEHOLDER:list}} format (bullet list)
    content = content.replaceAll(`{{${key}:list}}`, formatValue(value, 'list'));
    
    // Replace {{PLACEHOLDER:inline}} or {{PLACEHOLDER}} format (comma-separated)
    content = content.replaceAll(`{{${key}:inline}}`, formatValue(value, 'inline'));
    content = content.replaceAll(`{{${key}}}`, formatValue(value, 'inline'));
    
    // Replace __PLACEHOLDER__ format (always inline)
    content = content.replaceAll(`__${key}__`, formatValue(value, 'inline'));
  });
  
  return content;
}
