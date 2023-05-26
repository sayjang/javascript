{
    const x=1;
    {
        const y =2;
        console.log(x);  //1
    }
    console.log(x); //1
    //console.log(y); //error
}



const text = 'global';//전역 변수, 전역 스코프(글로벌 변스 글로벌 스코프)
{
    //const text = 'inside block1';//지역변수(로컬변수), 지역스코프(로컬스코프)
    {
        const text = 'inside block2';
        console.log(text);
    }
}