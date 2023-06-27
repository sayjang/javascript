//자바스크립트의 함수는 만능 슈퍼맨!
//함수처럼 사용, 생성자 함수로 사용(클래스)
//하지만, 이걸 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고있는 객체) 생성됨

const dog = {
    name: 'Dog',
    //play :function(){
    play : ()=> {
        console.log('논다멍');
    },
}

dog.play();
// const obj = new dog.play();
// console.log(obj);

//ES6
const cat = {
    name: 'cat',
    play() { //객체의 매서드 (오브젝트에 속한 함수)
        console.log('냐옹');
    }
}

cat.play();
//const obj1 = new cat.paly(); //생성자 함수로 사용X

/**
 * 화살표 함수의 특징
 * 1 문법이 깔끔함
 * 2. 생성자 함수로 사용지 불가능 (무거운 프로톹입을 만들지 X)
 * 3. 함수자제 arguments
 * 4. this 에 대한 바인딩이 정적으로 결정됨
 *  - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨
 */


function sum(a,b){
    console.log(arguments);
}
sum(1,2);
const add = (a,b) =>{
    console.log(arguments); // arrow함수 외부의 arguments 참조만 함
}
add(1,2);

const printArrow = () =>{
    console.log(this);
}
printArrow();


cat.printArrow = printArrow;
cat.printArrow();
