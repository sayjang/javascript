//[Symbol.iterator](): Iterator{ next(): {value,done}};
//0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
//0,1,2,3,..,9
//0,2,4,6,..,18


const multiple = {
    // [Symbol.iterator](){
    //     let num = 0;
    //     return {
    //         next(){
    //             if(num>10) return {value:undefined,done:true};
    //             return {value:(num++)*2,done:false};
                
    //         }
    //     }
        
    // }

    [Symbol.iterator](){
        const max = 10;
        let num = 0;
        return {
            next(){
                return {value:(num++)*2,done:num>max};
            }
        }
        
    }
}
console.log(multiple);
for(const num of multiple){
    console.log(num);
}

function makeIterable(initialValue, maxValue, callback){
    return{
        [Symbol.iterator](){
            const max = maxValue;
            let num = initialValue;
            return {
                next(){
                    return {value:callback(num++),done:num>maxValue};
                }
            }
            
        }
    }
}
const multiple2 = makeIterable(0,20, (n)=>n*2);

for(const num of multiple2){
    console.log(num);
}

const single = makeIterable(0,20, (n)=>n);

for(const num of single){
    console.log(num);
}