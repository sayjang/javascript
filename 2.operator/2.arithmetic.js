//산술 연산자 (Arithmetic operators)

//+ 
//- 
//* 
/// 
//% 
//** (지수- 거듭제곱)

console.log(5+2);
console.log(5-2);
console.log(5*2);
console.log(5/2);
console.log(5%2);
console.log(5**2); //es7
console.log(Math.pow(5,2));

// +연산자 주의점!
let text = '두개의'+'문자를';
console.log(text);

text = '1'+1; //숫자열+문자열 = 문자열 반환
console.log(text); // 문자열