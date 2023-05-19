//증가&감소 (Increment & Decrement Operators)

let a = 0;
console.log(a);

a++;//a=a+1;
console.log(a);


a--;
console.log(a);

//주의!
//a++; 필요한 연산을 하고, 그뒤 값을 증가시킴
//++a; 값을 먼저 증가하고, 필요한 연산을 함

console.clear();
a= 0;
let b = a++;
console.log(b);//b=0, a=1
console.log(a);

b,a=0;
b = ++a;
console.log(b);
console.log(a);

a=0;
console.log(a++);
console.log(a);

a=0;
console.log(++a);
console.log(a);
