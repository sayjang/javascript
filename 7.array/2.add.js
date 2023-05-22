const fruit = ['바나나','애플','사과','딸기','포도'];


//배열 아이템을 참조하는 방법
console.log(fruit[0]);

console.log(fruit[1]);

console.log(fruit.length);


for(let i=0;i<fruit.length;i++){
    console.log(fruit[i]);
}

//const fruit = ['바나나','애플','사과','딸기','포도'];
//추가,삭제 - 좋지않은 방식

fruit[4]='배'
console.log(fruit);

delete fruit[1];

console.log(fruit);