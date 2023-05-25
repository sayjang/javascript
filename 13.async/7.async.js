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


//바나나와 사과를 같이 가지고 오기
function fetchFruits(){
    return getBanana()
    .then((banana)=>
        getApple()
        .then((apple)=>[banana,apple]))
}

fetchFruits()
.then((fruit)=>console.log(fruit));



async function fetchFruits1(){ //비동기 - Promise
    const banana = await getBanana();//기다림 (resolve 되면 반환)
    const apple = await getApple();// (resolve 되면 반환)
    return [banana,apple]; //(resolve)
    
}



fetchFruits1()
    .then(console.log);