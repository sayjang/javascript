//정직원과 파트타임직원을 나타낼수있는 클래수를 ㅏㄴ들어보자
//직원들의 정보; 이름, 부서이름, 한달 근무 시간
//매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
//정직원은 시간당 10000원
//파트타임은 시간당 8000원

class Employee{
    constructor(name,group,monthHour){
        this.name = name;
        this.group = group;
        this.monthHour = monthHour;
    }
    get employee(){
        return `이름 : ${this.name} 부서 : ${this.group} 근무시간 : ${this.monthHour}`;
    }
    // get monthHour(){
    //     return this.monthHour;
    // }
    getMonthHour(){
        return this.monthHour;
    }
}

class FullTime extends Employee{
    static PER_PAY = 100000;
    constructor(name,group, monthHour){
        super(name,group,monthHour);
    }

    getMoney=()=>{
        return FullTime.PER_PAY*super.getMonthHour();
    }
}

class PartTime extends Employee{
    static PER_PAY = 8000;
    constructor(name,group, monthHour){
        super(name,group,monthHour);
    }

    getMoney=()=>{
        return PartTime.PER_PAY*super.getMonthHour();
    }
}

const say = new FullTime('say','web',100);
console.log(say.employee);
console.log(say.getMoney());

const lay = new PartTime('lay','web',100);
console.log(lay.employee);
console.log(lay.getMoney());



class Employee1{
    constructor(name,group,monthHour,rate){
        this.name = name;
        this.group = group;
        this.monthHour = monthHour;
        this.rate = rate;
    }
    get employee(){
        return `이름 : ${this.name} 부서 : ${this.group} 근무시간 : ${this.monthHour}`;
    }
    // get monthHour(){
    //     return this.monthHour;
    // }
    calculatePay(){
        return this.monthHour*this.rate;
    }
}
class PartTime1 extends Employee1{
    static PER_PAY = 8000;
    constructor(name,group,monthHour){
        super(name,group,monthHour,PartTime1.PER_PAY);
    }
}

const lay1 = new PartTime1('lay','web',100);
console.log(lay1.calculatePay());