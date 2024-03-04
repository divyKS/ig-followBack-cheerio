const fs = require('fs');

const followers = fs.readFileSync('followers_ID_Only.txt', 'utf8').split('\n').map(entry => entry.trim());

const following = fs.readFileSync('following_ID_Only.txt', 'utf8').split('\n').map(entry => entry.trim());

const dontFollowMeBack = following.filter(user => !followers.includes(user));

fs.writeFileSync('dontFollowMeBack.txt', dontFollowMeBack.join('\n'));

console.log('dontFollowMeBack.txt file written successfully.');