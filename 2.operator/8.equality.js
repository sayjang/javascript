//동등 비교 관계 연산자 (Equality operator)
//==값이 같음
//!=값이 다름
//===값과 타입이 둘다 같음
//!==값과 타입이 다름
console.log(2==2);
console.log(2!=2);
console.log(2!=3);
console.log(2==3);
console.log(2=='2');
console.log(2==='2');//타입비교쓰는게 좋음

console.log(true==1);
console.log(true===1);
console.log(false==0);
console.log(false===0);
console.clear();


const obj1={
    name :'js',
}

const obj2={
    name :'js',
}

console.log(obj1==obj2);//서로다른 메모리 주소를 가지고 있음

console.log(obj1===obj2);

console.log(obj1.name==obj2.name);
console.log(obj1.name===obj2.name);


let obj3 = obj2; //동일한 메모리주소를 갖고있음
console.log(obj3==obj2);
console.log(obj3===obj2);