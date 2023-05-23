//Map
const map = new Map([
    ['key1','사과'],
    ['key2','바나나']
]);
console.log(map);

//사이즈
console.log(map.size);
//존재하는지확인
console.log(map.has('key1'));
console.log(map.has('key3'));
//순회
map.forEach((value,key)=>console.log(key,value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
//찾기
console.log(map.get('key1'));
console.log(map.get('key5'));
//추가
console.log(map.set('key3','키위'));
console.log(map);
//삭제
console.log(map.delete('key3'));
//전부삭제
map.clear();
console.log(map);


console.clear();
//오브젝트와의 큰 차이점?
const key={name :'milk',price:10};
const milk={name :'milk',price:10,description:'우유'};
const obj ={
    [key] : milk,
};
console.log(obj);

const map2 = new Map([[key,milk]]);
console.log(map2);

console.log(obj[key]);

console.log(map2.get(key));