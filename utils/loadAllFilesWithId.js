const fs = require('fs');
const path = require('path');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

function getFilesStartingWithPrefix(prefix) {
    const directoryPath = path.join(__dirname, '..', prefix, 'uploads');
    try {
        console.log('Directory path:', directoryPath);
        if (!fs.existsSync(directoryPath)) {
            throw new Error(`Directory does not exist at path: ${directoryPath}`);
        }
        const files = fs.readdirSync(directoryPath);
        console.log('Files in directory:', files);

        return files
            .filter(file => file.startsWith(prefix) && imageExtensions.includes(path.extname(file).toLowerCase()))
            .map(file => path.join(directoryPath, file));
    } catch (err) {
        console.error('Error reading directory:', err.message);
        return [];
    }
}

module.exports = getFilesStartingWithPrefix;

