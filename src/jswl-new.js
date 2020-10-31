import { obj } from './obj';
import { array } from './array';
import { common } from './common';

console.log('jswl-new');

const jswl = {
    ...common,
    obj,
    array
}


window.jswl = jswl;
console.log('window.jswl', window.jswl);
export { jswl };