//조건문 coditional statement
//switch
//if else if else
//정해진 범위안의 값에 대해 특정한 일을 해야하는 경우
let day=0;
let dayName;
if(day===0){
    dayName='월요일';
}else if(day===1){
    dayName='화요일';
}


switch(day){
    case 0:
        dayName='월요일';
        break;
    case 1:
        dayName='화요일';
        break;
    default:
        console.log('해당하는 요일이 없음');    
    break;
}

console.log(dayName);

let condition='okay'; // okay,good

let text;
switch(condition){
    case 'okay':
    case 'good':
        text = '좋음';
        break;
    case 'bad':
        text = '나쁨';
        break;
}

console.log(text);