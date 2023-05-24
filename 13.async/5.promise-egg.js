function fetchEgg(chicken){
    return Promise.resolve(`${chicken}=> egg`);
}

fetchEgg('닭')//
    .then(egg=>console.log(egg));

function fryEgg(egg){
    return Promise.resolve(`${egg}=> 프라이`);
    // return Promise.t
}

function getChicken(){
    //return Promise.resolve(`치킨`);
    return Promise.reject(new Error('치킨을 가져올수없음'));
}

//체이닝 가능
getChicken()
.catch(error=>{
    console.log(error.name)
    return '닭이다'
})
.then(chicken=>{return fetchEgg(chicken)})
.then(egg=>fryEgg(egg))
.then(friedEgg=>console.log(friedEgg))
.catch(error=>console.log(error.name))


//축약버전
getChicken()
.catch(()=>'닭이다')
.then(fetchEgg)
.then(fryEgg)
.then(console.log);