//while(조건){}
//조건이 false가 될때까지 {} 코드를 반복

let num=5;
while(num>=0){
    console.log(num);
    num--;
}

let isActive = false;
let i=0;
while(isActive){
    console.log(i);
    if(i===100){
        break;
        
    }
    i++;
}

do{
    console.log('do-while 살아있이ㅡㅁ');
}while(isActive);