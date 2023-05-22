//Iterable 하다는건! 순회가 가능하다는 것
//[Symbol.iterator](): Iterator;
//심볼정의를 가진 객체나, 특정한 함수가 Iterator 를 리턴한다는ㄷ것은
//순회 가능한 객체이다라는 걸 알수있음
//순회가 가능하면 무엇을  있나? for...of, spread
const array =[1,3,4,5];

for(const item of array.entries()){//keys, values
   console.log(item);
}


console.log(array.values());
const obj = {0:1,1:2};

// //TypeError: obj is not iterable
// for(const item of obj){
//     console.log(item);
//  }

for(const item in obj){
    console.log(item);
 }