//프로토타입을 베이스로 한 객체지향 프로그래밍
function Animal(name, etc){
    this.name = name;
    this.etc = etc;
}


Animal.prototype.printName = function () {
    console.log(`${this.name} : ${this.etc}`);
}

function Dog(name, etc, owner){
    //super(name, etc)
    Animal.call(this, name, etc);
    this.owner = owner;
}

//Dog.prototype = Object.create(Object.prototype);
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () =>{
    console.log('같이 놀자!');
}

const dog1 = new Dog('멍멍','1','say');
console.log(dog1);

dog1.play();
dog1.printName();



function Tiger(name, etc){
    Animal.call(this,name,etc);
}

Tiger.prototype = Object.create(Animal.prototype);

Tiger.prototype.hunt = () =>{
    console.log('사냥하자');
}

const tiger1 = new Tiger('호랑이','1');
tiger1.printName();
tiger1.hunt();


console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);



console.log(tiger1 instanceof Dog);
console.log(tiger1 instanceof Animal);
console.log(tiger1 instanceof Tiger);
