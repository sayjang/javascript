
//함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 XXX
//상태변경이 필요한 경우에는, 새로운 상태를(오브젝트,값)을 만들어서 변환해야함
//원시값 - 값에 의한 복사
//객체값 - 참조에 의한 복사(메모리주소)


function display(num){
    num = 5; //하지마셈!!
    console.log(num);

}

const value = 4;

display(value)

console.log(value);

function changeName(obj){//이름부터 변경한다는 느낌을 주도록
    return {...obj, name:'aa'}; // 반환할때 새로운 오브젝트를 준다는 느낌
}
function displayObj(obj){
    //obj.name = 'ss'; // XXXXXX 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 X
    changeName(obj)
    console.log(obj);
}

const say = {name : "say"};
displayObj(say);