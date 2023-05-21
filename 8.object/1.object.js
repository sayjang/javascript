//Object literal {key:value}
//new Object()
//Object.create();
//key-문자,숫자,문자열,심볼
//value-원시값,객체(함수)

let apple={
    name:'apple',
    helloBye:'a',
    'hello-ss':'',
    0:1,
    ['hello-ss1']:''
}

console.log(apple);

//소ㄱ성, 데이터에 접근하기 위해서는 .
console.log(apple.name);//마침표표기법 dot notation
console.log(apple['hello-ss1']); //대괄호 bracket notation

console.log(apple['name']);

//속성추가
apple.temp = 'aa';

console.log(apple['temp']);
console.log(apple.temp);

console.log(apple);
//속성삭제
delete apple.temp

console.log(apple);

