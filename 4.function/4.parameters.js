//매게변수의 기본값은 무조간 undefined
//매개변수의 정보는 함수 내부에서 접근이 가능한 arguments객체에 저장됨
//매개변수 기본값 Default Parameters a=1, b=1
function add(a=1,b=1){
    console.log(a);
    console.log(b);
    console.log(arguments[1]);
    console.log(arguments);
    
    return (a+b);
}

console.log("aa",add());
console.log("bb",add(1,2,3));


//Rest 매개변수 Rest Parameters
function sum(a,b,...numbers){
    console.log(a);
    console.log(b);
    console.log(numbers);
}

sum(1,2,3,4,5,6);