//논리연산자 Logical operator
//&&
//||
//! 부정(ㄷㄴ항연산자에서 온것)
//!! 불리언값으로 변환

let num=21;
//num=8;
if(num>=0||num<9){
    console.log(num);
}

if(num!=9){
    console.log('aa');   
}

console.log(true&&true); //t
console.log(true&&false);//f
console.log(false&&true);//f
console.log(false&&false);//f


console.log(true||true);//t
console.log(true||false);//t
console.log(false||true);//t
console.log(false||false);//f

console.log(!'text');
console.log(!!'text');