
import jswl from '../../src/jswl.js';


const originalArray = [1, 2, 3, 4, 5, [1, 2, 3]];
let testValue = 1;

test('1 in array', () => {
    expect(jswl.array.inArray(testValue, originalArray)).toBe(true);
});

testValue = '1';
test('1 in array', () => {
    expect(jswl.array.inArray(testValue, originalArray)).toBe(true);
});