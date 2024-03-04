const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('following.html', 'utf8');

const $ = cheerio.load(html);

const userID = [];
const userName = [];

$('a[role="link"] span[dir="auto"]').each((_, element) => {
    const id = $(element).text();
    userID.push(id);
});

$('span[dir="auto"]:not(a span[dir="auto"])').each((_, element)=>{
    const name = $(element).text();
    const parts = name.trim().split(/\s+/);
    // const formattedName = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join(' ');
    userName.push(formattedName);
})

const fileName = 'following_ID_Only.txt';
const stream = fs.createWriteStream(fileName);

for (let i = 0; i < userID.length; i++) {
    // stream.write(`${userID[i]} ${userName[i]}\n`);
    stream.write(`${userID[i]}\n`);
}

stream.end();

console.log('File written successfully:', fileName);