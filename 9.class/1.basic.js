//개ㄱ체를 손쉽게 만들수있는 템플릿
//1. 생성자 함수(오래된 고전적인 방법)
//2. 클래스


//클래스
class Fruit{
    //생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    display = () => {
        console.log(`${this.name}:${this.color}`)
    };

}

//apple 은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple','red');
//orange 은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange','yy');


//obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = {name:'aa'};

console.log(apple);
console.log(orange);


console.log(apple.name);
apple.display();