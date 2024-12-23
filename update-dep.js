import fs from 'fs';
import path from 'path';

// Path to components
const componentsPath = './packages/@fds-design';

// Get all components
const components = fs.readdirSync(componentsPath);

components.forEach((component) => {
  const componentPath = path.join(componentsPath, component);
  const packageJsonPath = path.join(componentPath, 'package.json');
  const srcPath = path.join(componentPath, 'src');

  // Update package.json dependencies
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    // Replace @react-spectrum dependencies with local paths
    for (const depType of ['dependencies', 'devDependencies', 'peerDependencies']) {
      if (packageJson[depType]) {
        Object.keys(packageJson[depType]).forEach((dep) => {
          if (dep.startsWith('@react-spectrum')) {
            // Replace dependency with relative local file reference
            const localPath = `file:../../${dep.replace('@react-spectrum/', '')}`;
            packageJson[depType][dep] = localPath;
          }
        });
      }
    }

    // Save changes to package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(`Updated package.json: ${packageJsonPath}`);
  }

  // Update imports in .tsx files
  if (fs.existsSync(srcPath)) {
    const files = fs.readdirSync(srcPath);

    files.forEach((file) => {
      const filePath = path.join(srcPath, file);

      if (file.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Replace @react-spectrum imports with relative imports
        content = content.replace(/@react-spectrum\/([\w-]+)/g, '../../$1');

        // Save changes to the .tsx file
        fs.writeFileSync(filePath, content);
        console.log(`Updated imports in: ${filePath}`);
      }
    });
  }
});
