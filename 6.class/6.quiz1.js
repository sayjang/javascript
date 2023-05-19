//카운터 만들기
//0 이상의 값으로 초기화 한뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
//Counter 클래스 만들어보기

//유닛테스트

// class Counter{
//     constructor(count){
//         this.count = count
//     }
//     display=()=>{
//         for(let i=0;i<this.count;i++){
//             console.log(i);
//         }
//     }
// }

// const count = new Counter(10);
// count.display();

class Counter{
    #count;
    constructor(startvalue){
        this.#count = startvalue;
        if(isNaN(startvalue)||startvalue<0){
            this.#count = 0;
        }else{
            this.#count = startvalue;
        }
    }
    get count(){
        return this.#count;
    }
    increment=()=>{
        this.#count++;
    
    }
}

const counter = new Counter(0);
counter.increment();
console.log(counter.count);
counter.increment();
console.log(counter.count);
//console.log(count.count);
