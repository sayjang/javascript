let count = 0;
// export default function increase(){ //이것만 노출
//     count++;
//     console.log(count);
// }

export function increaseOnly(){ //여러개
    count++;
    console.log(count);
}

export function getCount(){
    return count;
}