//배열의 함수들
//배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruit = ['바나나','애플','사과','딸기','포도'];

//특정 오브젝트가 배열인지 아닌지
console.log(Array.isArray(fruit));//static 함수
console.log(Array.isArray({}));//static 함수

//특정한 아이템의 위치를 찾을때
console.log(fruit.indexOf('바나나'));

//배열안에 특정한 아이템이 있는지 체크
console.log(fruit.includes('바나나'));

//추가- 제일뒤
let length = fruit.push('복숭아'); //배열 자체를 수정 (업데이트)
console.log(fruit);
console.log(length);

//추가- 제일앞
let length2 = fruit.unshift('망고');//배열 자체를 수정 (업데이트)
console.log(fruit);
console.log(length);

//제거- 제일뒤
let lastItem = fruit.pop();//배열 자체를 수정 (업데이트)
console.log(fruit);
console.log(lastItem);

//제거 - 제일앞
lastItem = fruit.shift();//배열 자체를 수정 (업데이트)
console.log(fruit);
console.log(lastItem);

//중간에 추가 또는 삭제
const deleted = fruit.splice(1,1);//배열 자체를 수정 (업데이트)
console.log(deleted);
console.log(fruit);

fruit.splice(1,1,'샤인머스켓','수박');//배열 자체를 수정 (업데이트)
console.log(fruit);


//잘라진 새로운 배열을 만듬
let newArr = fruit.slice(0,2);
console.log(newArr);
console.log(fruit);

newArr = fruit.slice(0);
newArr = fruit.slice(-1);
console.log(newArr);
console.log(fruit);

//여러개의 배열을 붙여줌
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

//순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

//중첩 배열을 하나의 배열로 쫙펴기
let arr = [
    [1,2,3],
    [4,[5,6,[3,5]]]
];
console.log(arr);
console.log(arr.flat());//1단계
console.log(arr.flat(2));
console.log(arr.flat(3));
arr = arr.flat(3);

//특정한 값으로 배열을 채우기  //배열 자체를 수정 (업데이트)

arr.fill(0);
console.log(arr);

arr.fill('s',1,3);
console.log(arr);

arr.fill('s',1);
console.log(arr);


//배열을 문자열로 합하기
let text = arr.join();
console.log(text);

text = arr.join(' | ');
console.log(text);