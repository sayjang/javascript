//코드블럭 : {},if(){}, for() {}, function(){}
//블럭 외부에서는 블럭내부의 변수를 참조할수없음
{
    const a = 'a';
}
//console.log(a);

const b= 'b';

//함수외부에서는 함수 내부의 변수를 참조할수없음
function print(){
    const message = 'Hello';
    console.log(message);
}

//console.log(message);


//함수외부에서는 함수의 매개변수를 참소 할수 없음
function add(a,b){
    console.log(a,b);
    return a+b;
}

//console.log(a,b);