const https = require('https');
const fs = require('fs');
require('dotenv').config()


if (process.argv.length < 3) {
    console.log("Missing day argument");
    process.exit(1);
}

const day = process.argv[2];
const daystr = day.toString().padStart(2, '0');
const year = process.argv[3] || 2020;
const targetDir = year+'/day'+daystr

if (fs.existsSync(targetDir)) {
    console.log("Already exists");
    process.exit(1);
}

const options = {
    hostname: 'adventofcode.com',
    path: '/'+year+'/day/'+day+'/input',
    headers: {
        Cookie: 'session=' + process.env.COOKIE,
    }
}

fs.mkdirSync(targetDir, { recursive: true });
fs.createReadStream('setup/template.js').pipe(fs.createWriteStream(targetDir + '/main.js'));
const file = fs.createWriteStream(targetDir + '/input.txt');
https.get(options, function(response) {
  response.pipe(file);
});