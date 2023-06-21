//const dog1 = {name: 'say1', etc: 1};
//const dog2 = {name: 'say2', etc: 2};

function Dog(name, etc){
    this.name = name;
    this.etc = etc;
    //인스턴스 레벨의 함수
    // this.printName = () =>{
    //     console.log(`${this.name} : ${this.etc}`);
    // }
}

const dog1 = new Dog('say1',1);
const dog2 = new Dog('say2',2);

console.log(dog1);
console.log(dog2);


//프로토타입 레벨의 함수
//메모리 절약 가능
Dog.prototype.printName = function(){
    console.log(`${this.name} : ${this.etc}`);
}

dog1.printName();
dog2.printName();

//오버라이딩
//인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의하면 (오버라이딩하면)
//프로토타입 레벨의(부모) 함수의 프로처티는 가려진다 (셰도잉 됨)
dog1.printName = function(){
    console.log('11');
}

dog1.printName();

//정적레벨
Dog.hello = () =>{
    console.log('Hello');
}

Dog.hello();
Dog.MAX_AGE = 20;


console.log(dog1);