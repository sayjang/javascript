let num = 2;


if(num%2==0){
    console.log('짝수');
}else{
    console.log('홀수');
}

num%2==0?console.log('짝수'):console.log('홀수');

let temp = num%2==0?'짝수':'홀수';
console.log(temp);