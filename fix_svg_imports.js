const fs = require('fs');
const path = require('path');

const publicAssetsDir = path.join(__dirname, 'public', 'assets');
const problematicFiles = fs.readdirSync(publicAssetsDir).filter(f => f.endsWith('.svg'));

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (dirPath.includes('node_modules') || dirPath.includes('.git')) return;
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const srcDir = path.join(__dirname, 'src');

walkDir(srcDir, (filePath) => {
    if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let lines = content.split('\n');
        let newLines = [];
        let replacements = [];
        let changed = false;

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            let lineHandled = false;

            // Check if it's one of my previous replacements: const varName = '/assets/file.svg'
            const assetRegex = /const\s+(\w+)\s+=\s+'\/assets\/([^']+)'/;
            const match = line.match(assetRegex);
            if (match) {
                replacements.push(line.trim());
                changed = true;
                lineHandled = true;
            } else {
                // Also check if there are any remaining imports to convert
                problematicFiles.forEach(file => {
                    const escapedFile = file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    const importRegex = new RegExp(`import\\s+(\\w+)\\s+from\\s+['"][^'"]*${escapedFile}['"]`);
                    if (importRegex.test(line)) {
                        line.replace(importRegex, (m, varName) => {
                            replacements.push(`const ${varName} = '/assets/${file}';`);
                            changed = true;
                            lineHandled = true;
                        });
                    }
                });
            }

            if (!lineHandled) {
                newLines.push(line);
            }
        }

        if (changed) {
            // Find the last import
            let lastImportIndex = -1;
            for (let i = 0; i < newLines.length; i++) {
                if (newLines[i].trim().startsWith('import ')) {
                    lastImportIndex = i;
                }
            }

            // Insert unique replacements after the last import
            const uniqueReplacements = [...new Set(replacements)];
            newLines.splice(lastImportIndex + 1, 0, ...uniqueReplacements);
            
            fs.writeFileSync(filePath, newLines.join('\n'));
            console.log(`Re-ordered: ${filePath}`);
        }
    }
});
