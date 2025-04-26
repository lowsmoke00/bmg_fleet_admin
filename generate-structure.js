const fs = require('fs');
const path = require('path');

const targetFolders = ['app', 'components', 'hooks', 'lib'];
const basePath = __dirname; // or replace with absolute path if needed

function getTree(dirPath, prefix = '') {
  let output = `${prefix}${path.basename(dirPath)}\n`;
  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const itemPrefix = prefix + (isLast ? '└── ' : '├── ');
    const newPath = path.join(dirPath, item.name);

    output += `${itemPrefix}${item.name}\n`;

    if (item.isDirectory()) {
      const nestedPrefix = prefix + (isLast ? '    ' : '│   ');
      output += getTree(newPath, nestedPrefix);
    }
  });

  return output;
}

let finalOutput = '';

targetFolders.forEach(folder => {
  const fullPath = path.join(basePath, folder);
  if (fs.existsSync(fullPath)) {
    finalOutput += getTree(fullPath) + '\n';
  } else {
    finalOutput += `${folder} (Not found)\n`;
  }
});

// Print to console
console.log(finalOutput);

// Or write to a file
fs.writeFileSync('folder-structure.txt', finalOutput);
console.log('\n✔ Folder structure saved to folder-structure.txt');
