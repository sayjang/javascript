// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']
console.log([...new Set(fruits)]);

console.log(removeDuplication(fruits));
function removeDuplication(array){
    return [...new Set(array)];
}
function duplicateRemove(array){
    const result = new Set([]);

    array.forEach(item =>result.add(item));

    return result;
}

console.log(duplicateRemove(fruits));

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);


function sameSet(set1,set2){

    const result = new Set([]);
    //set1.forEach((item)=>{if(set2.has(item))result.add(item)});
    set1.forEach((item)=>{set2.has(item)?result.add(item):false});
    return result;
}

console.log(findIntersection(set1,set2));
function findIntersection(set1,set2) {
    const array = [...set1].filter((item)=>set2.has(item));
    return new Set(array);    
}

console.log(sameSet(set1,set2));