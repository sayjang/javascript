//옵셔널 체이닝 Optional Chaining Operator
//ES11 (ECMA script 2020)
//?.
//null 또는 nudefined을 확인할때
let item = {price:1};
const price = item?.price;
console.log(price);


//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

let obj = {name:1, owner :{name:'say'}};
function printName(obj){
    //const ownerName = obj && obj.owner && obj.owner.name;
    const ownerName = obj?.owner?.name;
    //const ownerName = obj.owner.name;
    console.log(ownerName);
}
printName();
printName(obj);