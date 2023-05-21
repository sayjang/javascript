// const apple = {
//     name : 'apple',
//     display: function(){
//         console.log(`${this.name}!!`);
//     }
// }

// const orange = {
//     name : 'orange',
//     display: function(){
//         console.log(`${this.name}!!`);
//     }
// }

//생성자 함수
//대문자
function Fruit(name, color){
    this.name = name;
    this.color = color;
    this.display= ()=>{
        console.log(`${this.name}:${this.color}`)
    };
    //return this; //생략가능
}

const apple = new Fruit('apple','red');
const orange = new Fruit('orange','yy');


console.log(apple);
console.log(orange);


console.log(apple.name);
apple.display();