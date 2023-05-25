
function runInDelay(second){
    //promise( 뒤에 콜백함수 )
    return new Promise((resolve,reject)=>{
        if(!second||second<0){
            reject(new Error('초가 없음'))//실패
        }
        setTimeout(resolve,second*1000);//성공
    });
}


runInDelay(1)
.then(()=>console.log('타이머완료'))//성공, 필요한일을수행
.catch(console.error)//실패, 에러를 처리
.finally(()=>console.log('끝났다'))//무조건 호출, 최종적으로

// try{
//     runInDelay(()=>{console.log('호출')},2);
// }catch(error){
//     console.log(error);
// }finally{
//     console.log('종료');
// }

