const fs = require('fs');

fs.copyFile('src.json', 'dest.json', fs.constants.COPYFILE_EXCL, (err) => {
    if (err) throw err;
    console.log('src.json was copied to dest.json');
});

fs.copyFileSync('src.json', 'dest.json', fs.constants.COPYFILE_EXCL);