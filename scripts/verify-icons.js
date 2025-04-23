import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all icon references in the codebase
const iconReferences = (await glob('src/**/*.{ts,tsx,js,jsx}', { ignore: ['**/node_modules/**'] }))
  .reduce((refs, file) => {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(/\/lovable-uploads\/[^"'\s)]+/g) || [];
    
    matches.forEach(match => {
      if (!refs[match]) {
        refs[match] = [];
      }
      refs[match].push(file);
    });
    
    return refs;
  }, {});

// Check if each referenced icon exists in the public directory
const missingIcons = [];
const publicDir = path.resolve(__dirname, '../public');

Object.keys(iconReferences).forEach(iconPath => {
  const fullPath = path.join(publicDir, iconPath);
  
  if (!fs.existsSync(fullPath)) {
    missingIcons.push({
      path: iconPath,
      referencedIn: iconReferences[iconPath]
    });
  }
});

// Report results
if (missingIcons.length > 0) {
  console.error('❌ Missing icons found:');
  missingIcons.forEach(icon => {
    console.error(`  - ${icon.path}`);
    console.error(`    Referenced in: ${icon.referencedIn.join(', ')}`);
  });
  process.exit(1);
} else {
  console.log('✅ All icon references are valid!');
} 