//구조분해할당 Destructuring Assignment
//데이터뭉치(그룹화) 를 쉽게 만들 수 있다.

const test = [1,2,3,4,5];

const [frist,second,...others] = test;
console.log(test[0]);
console.log(frist);
console.log(second);
console.log(others);


const point = [1,2,8];
const [x,y,z =0] = point;
console.log(x);
console.log(y);
console.log(z);


function createText(){
    return ['apple','시과'];
}

const [title,ko] = createText();
console.log(title);
console.log(ko);


const say = {name:'say',age:20,job:"지코바"};
function display({name,age,job}){
    //console.log('이름',persion.name);
    console.log('이름',name);
    console.log('나이',age);
}

display(say);


const {name,age1,job:occupation, pet = 0} = say;
console.log(name);
console.log(age1);
console.log(occupation);
console.log(pet);