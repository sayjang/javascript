// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function replaceSB1(originArr,from, to){
    // return originArr.map((value)=>{
    //     if(value===from) return value = to;
    //     else return value;
    // });
    return originArr.map(value=>value===from?to:value);
}

console.log(replaceSB1(['🍌', '🍓', '🍇', '🍓'],'🍓','🥝'));


// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// function getCountFruit(friutArr, findItem){
//     return friutArr.indexOf(findItem);
// }
function getCountFruit(friutArr, findItem){

    // return friutArr.reduce((count,value)=>{
    //     if(value===findItem) count++;
    //     return count;
    // },0)

    return (friutArr.filter(value=>value===findItem)).length;

    // let nums = 0;
    // friutArr.forEach(value=>{
    //     if(value===findItem) nums++;} )
    // return nums;
}
console.log(getCountFruit([ '🍌', '🥝', '🍇', '🥝' ],'🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function getSameFruit(friutArr1, friutArr2){

    return friutArr1.filter(value=>friutArr2.includes(value));
    // let array = new Array();
    // friutArr1.forEach(element => {
    //     if(friutArr2.includes(element)){
    //         array.push (element);
    //     }
    // });
    // return array;
}

console.log(getSameFruit(['🍌', '🥝', '🍇'],['🍌', '🍓', '🍇', '🍓']));



// 퀴즈 4

// 5이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];

function avg(nums,stand){

    const result = nums
        .filter((value)=>value>stand) 
        .reduce((avg,value,_,array)=>avg+value/array.length,0);
    // let cal =nums.filter((value)=>value>stand);
    // console.log(cal);
    
    // let sum = sumAll(cal);
    // console.log(sum);
    // return sum/(cal.length);
    // return result;
}

function sumAll(sum){
    return sum.reduce((cnt,value)=>cnt+value,0);

}


console.log(avg(nums,5));