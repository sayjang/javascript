//import increase1 from './counter.js';//이름변경가능
//console.log(count);
// increase1();
// increase1();
// increase1();
// console.log(count);

// count=-10;
// console.log(count);


//import {increaseOnly as only, getCount} from './counter.js';

import * as counter from './counter.js';

//increaseOnly();
counter.increaseOnly();
const count = counter.getCount();
console.log(count);