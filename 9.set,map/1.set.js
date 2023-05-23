//Set
const set = new Set([1,2,3]);
console.log(set);

//사이즈 확인
console.log(set.size);

//존재하는지 확인

console.log(set.has(1));
console.log(set.has(5));

//순회
set.forEach((item)=>console.log(item));

for(const value of set){
    console.log(value);
}

//추가
set.add(6);
console.log(set);

//중복추가 안됨
set.add(6);
console.log(set);



//삭제
set.delete(6);
console.log(set);

//초기화
set.clear();
console.log(set);

const obj1 = {name:'a'};
const obj2 = {name:'b'};
const obj = new Set([obj1,obj2]);
console.log(obj);

//퀴즈
obj1.name = 'aa';
obj.add(obj1);//shallow copy
console.log(obj);

//퀴즈
const obj3 = {name:'b'};
obj.add(obj3);
console.log(obj);

obj3.name ='bb';
console.log(obj);