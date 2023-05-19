// class Tiger{
//     constructor(color){
//         this.color = color;
//     }
//     eat() {
//         console.log('먹는다');
//     }
//     sleep(){
//         console.log('잔다');
//     }
// }


// class Dog{
//     constructor(color){
//         this.color = color;
//     }
//     eat() {
//         console.log('먹는다');
//     }
//     sleep(){
//         console.log('잔다');
//     }
//     play(){
//         console.log('논다');
//     }
// }

class Animal {
    constructor (color){
        this.color = color;
    }
    eat(){
        console.log('먹기');
    }
    sleep(){
        console.log('자기');
    }
}

class Tiger extends Animal{};

const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal{
    constructor(color, ownerName){
        super(color);//부모클래스
        this.ownerName = ownerName;
    }
    play(){
        console.log('놀기');
    }
    //오버라이딩 overriding
    eat(){
        super.eat();//부모 호출하고 내꺼 추가
        console.log('강아지가 먹는당');
    }
};
const dog = new Dog('흰색','say');
console.log(dog);
dog.eat();
dog.play();