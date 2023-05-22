// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function replaceSB(originArr){
    let array = new Array();
    //const array = Array.from(array);
    originArr.forEach(element => {
        if(element==='🍓') {element ='🥝'};
        array.push(element);
    });
    return array;
}

function replaceSB1(originArr,from, to){
    let array = new Array();
    //const array = Array.from(array);
    originArr.forEach(element => {
        if(element===from) element = to;
        array.push(element);
    });
    return array;
}

console.log(replaceSB(['🍌', '🍓', '🍇', '🍓']));
console.log(replaceSB1(['🍌', '🍓', '🍇', '🍓'],'🍓','🥝'));

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function getCountFruit(friutArr, findItem){
    return friutArr.indexOf(findItem);
}
console.log(getCountFruit([ '🍌', '🥝', '🍇', '🥝' ],'🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function getSameFruit(friutArr1, friutArr2){
    let array = new Array();
    friutArr1.forEach(element => {
        if(friutArr2.includes(element)){
            array.push (element);
        }
        // friutArr2.forEach(element2 => {
        //     if(element==element2) array.push (element2);
        // });
    });
    return array;
}

console.log(getSameFruit(['🍌', '🥝', '🍇'],['🍌', '🍓', '🍇', '🍓']));