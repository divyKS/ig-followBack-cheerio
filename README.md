# IG - Who doesn't follow me back? 👀
- I created this tiny project/script to find out which accounts do not follow me back on IG.
- I `manually copied` the HTML containing info about the followers and following on my account.
  - I later found out that this task can be tried to be done by `web scraping` using something like `puppeteer`. I will try doing that for some other project.

## In this project I learnt about - 
- Synchronous and Asynchronous file I/O operations in Node.js
  - In using `readFileSync` and `writeFileSync` the control waits until the entire file is read/written to before proceeding to the next line of code. This can be used if we are working with some small script and we do not care much about the code being performant and non-blocking.
  - In using `readFile` and `writeFile` callbacks/promises are used to handle the result of operations. These are needed if we want to handle multiple concurrent requests.
- Cheerio
  - It is implementation of jQuery for server side `HTML parsing` with Node.js.
  - HTML parsing means traversing the DOM tree, manipulating the HTML elements, and extracting specific information from web pages. Doing this with regex can be extremely difficult and complex because of the complex nested nature of HTML and because regex does not understand the context of HTML semantics hence we use HTML parsers like Cheerio.
-  Read and Write `Streams` in Node.js
   - If we use `createWriteStream` and `createReadStream` we can read/write the contents of a file in chunks. We do not need to read/write all data at once.
   - We then do not have to load all data into memory at once.
