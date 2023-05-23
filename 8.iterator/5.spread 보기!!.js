//Spread 연산자, 전개구문
//모든 Interable 은 Spread 될수있다.
//순회가 가능한 모든 것들은 촤르륵 펼쳐질수있다.
//func(...iterable)
//[...iterable]
//{...obj}
//EcmaScrip 2018
function add(a,b,c){
    return a+b+c;
}

const nums = [1,2,3];

console.log(add(nums[0],nums[1],nums[2]));

console.log(add(...nums));

//Rest parameters

function sum(frist,seconde, ... nums){
    console.log(nums);
}

sum(1,2,3,0,1,2);

//Array Concat

const f1=['a','b'];
const f2=['c','d'];

let arr = [...f1,'q',...f2];
console.log(arr);

//Object
const say = {name:'say',age:20, home : {address:'home'}};
const update={
    ...say,
    job : 's/w enfineer',
}

console.log(say);
console.log(update);

