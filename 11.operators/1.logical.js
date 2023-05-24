//논리연산자 Logial Operator
//&& 그리고
//|| 또는
//단축평가 : short-circuit evaluation
const obj1= {name:'1'};
const obj2= {name:'2',owner:'111'};

if(obj1&&obj2){
    console.log('true');
}

if(obj1||obj2){
    console.log('true');
}

let result = obj1 && obj2; //두번째 인자 할당
console.log(result);

if(result){
    console.log('1111');
}


result = obj1 || obj2; //첫번째 인자 할당
console.log(result);


result = false || obj2; //두번째 인자 할당
console.log(result);

if(result){
    console.log('1111');
}


//활용예
//조건이 truthy일때 && 무언가를 해야할 경우
//조건이 falshy일때 || 무언가를 해야할 경우

function changeOwner(animal){
    if(!animal.owner){
        throw new Error('주인이 없음')
    }
    animal.owner = '바뀐주인';
}

function makeNewOwner(animal){
    if(animal.owner){
        throw new Error('주인이 있어')
    }
    animal.owner = '새로운주인';
}

// if(obj1.owner){
//     changeOwner(obj1);
// }
obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);

console.log(obj1);
console.log(obj2);



obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);

console.log(obj1);
console.log(obj2);


//null 또는 undefinde 인 경우를 확인할때
//let item;// = {price : 1};
//const price = item.price;
let item = {price : 1};
const price = item && item.price;
console.log(item);

//기본값을 설정
//default pararmater  전달하지 않거나 , undefined 설정
function print(message = 'Hi'){ //undefied 일경우 hi
    console.log(message);
}

print();
print(undefined);
print(null); //null
print(0) //0


//||값이 falshy한 경우 설정(할당) (0,-0,null,undefied,'')
function print2(message){
    const text = message || 'Hi';
    console.log(text);
}

print2();
print2(undefined);
print2(null);
print2(0);