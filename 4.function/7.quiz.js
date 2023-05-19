//주어진 숫자만큼 0부터 순회하는 함수
//순회하면서 주어진 특정한 일을 수행해야함
//5, 순회하는 숫자를 다 출력하고 싶음
//5, 순회하는 숫자의 두배값을 다 출력하고 싶음

//function iterate(max,action)


let print = (a) => console.log(a);

let multiply = (a) => console.log(a*2)

function iterate(max,action){
    for(let i=0;i<max;i++){
        action(i);
    }
}

//iterate(5,print);
iterate(5,multiply);

//setTimeout(callback, 10000);

setTimeout(()=>{
console.log('3초뒤 실행');
}, 3000);