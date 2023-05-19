function add(a,b){
    console.log(a);
    console.log(b);
    return a+b;
}

const sum=add;//함수를 가르키고있는 주소를 저장
console.log(sum());
console.log(sum(1,2));
console.log(add(1,2));