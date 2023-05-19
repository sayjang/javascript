//함수 선언문 function name() {}
//함수 표현식 const name = function () {}

//무명함수
let add = function (a,b){
    return a+b;
}

console.log(add(1,2));

//화살표 함수 const name = () => {}
add = (a,b) => {
    return a+b;
};

add = (a,b) => a+b;

//생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

//IIFE (Immediately-Invoked Fuction Expressions)
//즉각적으로 실행하고싶을때
(function run(){
    console.log('aa');
})(); 