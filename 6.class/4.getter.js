//접근자 프로퍼티 (Accessor Property)
class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        //this.fullName = `${this.lastName} ${this.firstName}`
    }
    get fullName(){
        return `${this.lastName} ${this.firstName}`
    }
    set fullName(value){
        console.log('set',value);
    }
    // fullName(){
    //     return `${this.lastName} ${this.firstName}`
    // }
}

const student = new Student('say','jang');
console.log(student);
console.log(student.lastName);
console.log(student.fullName);
student.lastName='lee';
console.log(student.lastName);
console.log(student.fullName);
//console.log(student.fullName());

console.log(student.fullName); // get
student.fullName = '김 세희'; // set

console.log(student.fullName);
