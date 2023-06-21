//동결! Object.freeze,
//추가, 삭제, 쓰기, 속성 재정의 x
//(단, 얕은 꽁꽁얼림!)

const say = {name:'say'};
const dog = {name: '와우',etc:'1', owner: say};

Object.freeze(dog);

dog.name = 'ss';

console.log(dog);
delete dog.name;

console.log(dog);

say.name = 'sayyy'; // 참조하는 객체는 얼려지지않음


console.log(dog);

//밀봉! Object.seal
//수정가능, 나머지안됨
const cat = {};
Object.assign(cat, dog);

//const cat {...dog};
Object.seal(cat);
console.log(cat);

cat.name = '냐용';

delete cat.etc;
console.log(cat);


console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));


//확장금지
//추가만 안됨
const tiger = {name: '어흥'};
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흥!'

console.log(tiger);

delete tiger.name;

console.log(tiger);
tiger.age = 1;
console.log(tiger);