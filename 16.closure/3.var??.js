function loop(){
    const array=[];
    //var 과 let 차이점!
    //var i;
    //for(i=0; i<5; i++){
    for(let i=0; i<5; i++){
        console.log(i);
        array.push(function (){
            console.log(i);
        });
    }
    return array;
}

const array = loop();
array.forEach((fun)=>fun());

