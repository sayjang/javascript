function a(){
    for(let i=0; i<1000;i++);
    return 1
}

function b(){
    return a()+1; //1+1
}

function c(){
    return b()+1; //2+1
}

console.log('시작했다');
const result = c();
console.log(result);

//a
//b
//c