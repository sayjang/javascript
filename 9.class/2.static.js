//static 정적 프로퍼티, 메소드
class Fruit{
    static MAX_FRUITS = 4;
    //생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    
    //클래스 레벨의 메서드 
    static makeRandomFruit(){
        //클래스 레벨의 메서드에는 this를 참조할 수 없음
        return new Fruit('banana','yy');
    }

    //인스턴스 레벨의 메서드 
    display = () => {
        console.log(`${this.name}:${this.color}`)
    };

}

const banana = Fruit.makeRandomFruit();
console.log(banana); 
console.log(Fruit.MAX_FRUITS);
// console.log(Fruit.name);
// Fruit.display();
//apple 은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple','red');
//orange 은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange','yy');


//obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = {name:'aa'};

//console.log(apple);
// console.log(orange);


// console.log(apple.name);
// apple.display();


//빌트인 오브젝트
Math.pow();//클래스
console.log(Number.isFinite(1));