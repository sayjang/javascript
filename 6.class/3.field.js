
//접근제어자 - 캡슐화 (수정할 수 없도록 꼭꼭 숨겨두게함)
//private(#), public(기본)- 접근가능, protected 
class Fruit{
    //필드
    name; //생략가능
    temp; //생략가능
    type = '과일';
    //필드 끝
    constructor(name, temp){
        this.name = name;
        this.temp = temp;
    }
    display = () => {
        console.log(`${this.name}은 ${this.temp}`);
    }
}

const apple = new Fruit('apple','aa');
//apple.#name = 'orange'; //
console.log(apple);


//private(#),
class Fruit1{
    //필드
    #name; //생략가능
    #temp; //생략가능
    #type = '과일';
    //필드 끝
    constructor(name, temp){
        this.#name = name;
        this.#temp = temp;
    }
    #display = () => {
        console.log(`${this.#name}은 ${this.#temp}`);
    }
}

const apple1 = new Fruit1('apple','aa');
//apple.#name = 'orange'; //#field는 외부에서 접근이 불가능함
console.log(apple1);
//apple1.display();