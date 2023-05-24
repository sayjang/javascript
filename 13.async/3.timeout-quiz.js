//주어진 seconds(초)가 지나면 callback 함수를 호출함
//단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(callback,second){
    if(!callback){    
        throw new Error('callback 함수 전달 필요');
    }
    console.log(second);
    //if(second<0){
    if(!second || second < 0){
        throw new Error('0 보다 작아!');
    }
    setTimeout(callback,second*1000);
    //callback(()=>{console.log('호출');},second*1000);
}


//setTimeout(runInDelay(),1);
try{
    runInDelay(()=>{console.log('호출')},2);
}catch(error){
    console.log(error);
}finally{
    console.log('종료');
}

