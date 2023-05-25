function getBanana(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('바나나');
        },1000)
    })
}

function getApple(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('사과');
        },3000)
    })
}

function getOrange(){
    return Promise.reject(new Error('no orange'));
}
getBanana();
getApple();


//바나나와 사과를 같이 가져와기
let fruit = new Array();
getBanana()
.then((banana)=>fruit.push(banana))
.then(getApple)
.then((apple)=>fruit.push(apple))
.finally(()=>console.log(fruit));


getBanana()
.then((banana)=>
    getApple()
     .then((apple)=>{
        return [banana,apple];
     }
    )
).then(console.log);




getBanana()
.then((banana)=>
    getApple()
     .then((apple)=>[banana,apple])
).then(console.log);


//Promise.all 병렬적으로 한번에 모든 Promise들을 실행
//3초안에 다 해결
Promise.all([getBanana(),getApple()])
    .then((fruits)=>console.log('all',fruits));


//Promise.rece 주어진 Promise 중에서 제일 빨리 수행된것이 이김!
Promise.race([getBanana(),getApple()])
    .then((fruits)=>console.log('race',fruits));




Promise.all([getBanana(),getApple(),getOrange()])
.then((fruits)=>console.log('all-error',fruits))
.catch(console.log)




Promise.allSettled([getBanana(),getApple(),getOrange()])
.then((fruits)=>console.log('all-settle',fruits))
.catch(console.log)