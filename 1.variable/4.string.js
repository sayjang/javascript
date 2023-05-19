//문자열타입
let string = "asd";
string = `안녕!`;
console.log(string);

string = '"안녕"';

console.log(string);

string = "'안녕'";

console.log(string);

///특수문자 출력하는 법
string = '안녕! \n say \t\t난\\\u09AC!'
console.log(string);

//템플릿 리터럴 (Template Literal)
let id= 'say';
let greetings = "'안녕!,'"+ id +"\n 하이";
console.log(greetings);

greetings = `안녕, ${id}
즐거운 하루 보내`;
console.log(greetings);
