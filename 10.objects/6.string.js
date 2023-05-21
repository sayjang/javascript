const textObj = new String('Hello world!');
const text = 'Hello world!';
console.log(textObj);
console.log(text);
console.log(text.length);


console.log(text[0]);
console.log(text[1]);
console.log(text.charAt(0));
console.log(text.charAt(1));

console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l'));

console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

console.log(text.startsWith('He'));
console.log(text.endsWith('!!'));

console.log(text.toUpperCase());
console.log(text.toLocaleLowerCase());

console.log(text.substring(0,2));
console.log(text.slice(2));
console.log(text.slice(-2));

const space = '                     space       ';
console.log(space.trim());


const logText = 'Get to the, point';
console.log(logText.split(' '));
console.log(logText.split(','));

console.log(logText.split(' ',2));