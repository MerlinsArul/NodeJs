const url = require('url');
  
const newUrl = new URL(
   'https://www.google.com/search?q=nodejs&oq=nodejs&aqs=chrome.0.69i59l3j69i57j69i59j69i60l3.1179j0j7&sourceid=chrome&ie=UTF-8');
  
// url array in JSON Format
console.log(newUrl);
  
const myUR = url.parse(
    'https://www.google.com/search?q=nodejs&oq=nodejs&aqs=chrome.0.69i59l3j69i57j69i59j69i60l3.1179j0j7&sourceid=chrome&ie=UTF-8');
console.log(myUR);
console.log(URL === require('url').URL);
  
const myURL1 = new URL(
    { toString: () => 'https://nodejs.org/en/' });
  
console.log(myURL1.href)