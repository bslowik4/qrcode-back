const fs = require('fs');
const path = require('path');
const directoryPath = path.join(__dirname, 'uploads');

function getFilesStartingWithPrefix(prefix) {
    try {
        if (!fs.existsSync(directoryPath)) {
            throw new Error(`Directory does not exist.`);
        }
        return fs.readdirSync(directoryPath)
            .filter(file => file.startsWith(prefix));
    } catch (err) {
        console.error('Error reading directory:', err.message);
        return [];
    }
}

module.exports = getFilesStartingWithPrefix