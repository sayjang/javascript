//var 특징
//->일반코딩방식과 어긋나서 개발하면서도 멘붕이 옴
//->코드의 가독성과 유지보수성에 좋지않음


//1. 변수 선언하는 키워드 없이 선언 & 할당이 가능함
//선언읹, 재할당인니 구분하기 어려움
something = 'qq';
console.log(something);

//2. 중복선언이 가능함
var poo ='11';
var poo ='11';
console.log(poo);


//3. 블록레벨 스코프 안됨
var apple = '사과'
{
 var apple = 'aa';
 {
    var apple='apple';
 }
}
console.log(apple);

//4. 함수레벨 스코프만 지원됨
function example(){
    var dog = '개';
}

//console.log(dog);