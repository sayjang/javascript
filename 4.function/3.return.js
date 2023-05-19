//return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨!
function add(a,b){
 //   return a+b;
 return undefined;
}

const result = add(1,2);
console.log(result);

function print_(text){
    console.log(text);
}

const outcome = print_('aa');
console.log(outcome);


//return 을 함수 중간에 하게 되면 함수가 종료됨
//조건이 맞지않는 경우 함수 도입부분에서 함수를 일찍이 종료함!

function printn(num){
    if(num<0){
        return;//return undefined;
    }
    console.log(num);
}

printn(12);
printn(-12);