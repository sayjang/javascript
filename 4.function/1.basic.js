function add(num1,num2){
    //const result = num1+num2;
    //return result;
    console.log('aa');
    return num1+num2;
}

console.log(add(1,2));

const result = add(1,2);
console.log(result);


//사용예제2
let lastName = '김';
let firstName = '세희'
//let fullName = `${lastName} ${firstName}`;
//console.log(fullName);


function fullName (first,last){
    return `${first} ${last}`;
}

console.log(fullName('장','세희'));