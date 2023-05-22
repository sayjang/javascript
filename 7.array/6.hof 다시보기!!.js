const fruits = ['🍌', '🍓', '🍇','🍓'];

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//배열을 빙글돌면서 원하는 것(콜백함수)을 할때   
fruits.forEach(function(value, index, array){
    console.log('------');
    console.log(value);
    console.log(index);
    console.log(array);
});


fruits.forEach(function(value){
    console.log('------');
    console.log(value);

});


fruits.forEach((value)=>console.log(value));

function iterate(array,action){
    for(let i=0;i<array.length;i++){
        action(array[i]);
    }
}

//조건에 맞는 (콜백함수) 아이템을 찾을때
//find: 제일 먼저 조건에 맞는 아이템으 ㄹ반환
const pizza ={name:'피자',price:2,owner:{name:'Say'}};
const ramen ={name:'라면',price:1};
const sushi ={name:'스시',price:3};

const menu = [pizza,ramen,sushi,pizza];
let result =menu.find((value)=>value.name=== '피자');

console.log(result);

//findIndex : 제일먼저 조건에 맞는 아이템의 인덱스를 반환
result =menu.findIndex((value)=>value.name=== '피자');
console.log(result);

//some:배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result =menu.some((value)=>value.name=== '피자');
console.log(result);


//every:배열의 아이템들이 모든 조건(콜백함수)에 맞는지 확인
result =menu.every((value)=>value.name=== '피자');
console.log(result);

//filter : 조건에 맞는 모든 아이템들을 새로운 배열로
result =menu.filter((value)=>value.name=== '피자');
console.log(result);


console.clear();

//Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는ㅡ 변환해서 새로운 배열 생성!
const nums = [1,2,3,4,5];
result = nums.map((item)=>item*2);
console.log(result);

result = nums.map((item)=>{
    if(item%2===0){
        return item*2
    }else{
        return item
    }
});
console.log(result);


//FlatMap : 중첩된 배열을 쫘악 펴줌
result = nums.map(item=>[1,2]);
console.log(result);

result = nums.flatMap(item=>[1,2]);
console.log(result);


result = ['dream','coding'].map(text=>text.split(''));
console.log(result);


result = ['dream','coding'].flatMap(text=>text.split(''));
console.log(result);


//sort 배열의 아이템들을 정렬
//문자혈 형태의 오름차순으로 요소를 정렬하고 기존의 배열을 변경
const texts = ['hi','abc'];
texts.sort();
console.log(texts);

const numbers = [0,5,4,2,1,10];
numbers.sort();
console.log(numbers);
//<0 a가 앞으로 정렬, 오름차순
//>0 b가 앞으로 정렬, 내림차순
numbers.sort((a,b)=>a-b);
console.log(numbers);

numbers.sort((a,b)=>b-a);
console.log(numbers);


//reduce 배열의 요소들을 접어서 값을 하나로
result = [1,2,3,4,5].reduce((sum,value)=>{
    sum+=value;
    return sum;
},0);//0은 이니셜숫자
result = [1,2,3,4,5].reduce((sum,value)=>(sum+=value),0);
console.log(result);