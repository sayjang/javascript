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
        },1000)
    })
}

getBanana();
getApple();
