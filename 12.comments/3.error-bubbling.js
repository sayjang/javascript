//Bubbling up, Propagation
function a(){
    throw new Error('error!');
}

function b(){
    try{
        a();
    }catch(error){
        console.log('생각해보니까 이에러는 내가 핸들링할수없을것같군');
        throw error;
    }
}

function c(){
    b();
}

try{
    c();
}catch(error){
    console.log("Catched!");
}
console.log('done');