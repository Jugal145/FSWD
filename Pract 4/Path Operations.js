const fs = require('fs');
const path = require('path');
function areSameFiles(filePath1, filePath2) {
    const absolutePath1 = resolve(filePath1);
    const absolutePath2 = resolve(filePath2);
    return absolutePath1 === absolutePath2;
}


const file1 = '../backup.txt';
const file2 = '../backup.txt';


if (areSameFiles(file1, file2)) {
    console.log(`${file1} and ${file2} refer to the same file.`);
} else {
    console.log(`${file1} and ${file2} do not refer to the same file.`);
}
