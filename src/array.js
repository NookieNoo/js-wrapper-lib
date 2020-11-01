import { isEmpty } from './common';

/**
 * Проверит содержится ли элемент в массиве
 * 
 * @param {mixed} value
 * @param {array} array
 * @returns {Boolean}
 */
const inArray = (value, array) => {
    return (!(array.indexOf(value) === -1));
}

/**
 * Проверит содержится ли хотя бы один элемент из первого массива 
 * во втором
 * 
 * @param {array} needles массив значений, которые ищем
 * @param {array} array   массив, в котором ищем
 * @returns {Boolean}
 */
const isAnyInArray = (needles, array) => {
    var result = false;
    for (var i = 0; i < needles.length; i++) {

        if (inArray(needles[i], array)) {
            result = true;
            break;
        }
    }
    return result;
}

/**
 * Удалит из массива все эелменты в строгом смысле совпадающие с 
 * value
 * 
 * @param {array} arr
 * @param {mixed} value элемент, равные которому надо удалить из массива
 * @return {Array|JSWrapperLib.removeAllElementsLike.newArr}
 */
const removeAllElementsLike = (arr, value) => {
    var newArr = [];
    arr.forEach((currentElement, index, array) => {
        if (currentElement !== value) {
            newArr.push(currentElement);
        }
    });

    return newArr;
}

/**
 * Вернет массив, оставив там только уникальные значения
 * ( JavaScript 1.6 / ECMAScript 5) 
 * @link https://stackoverflow.com/a/14438954
 * 
 * @param {array} arr исходный массив
 * @return {array}
 */
const uniqueArray = (arr) => {
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    var unique = arr.filter(onlyUnique);
    return unique;
}

/**
 * Проверит, что все элементы массива не пусты (в смысле вызова для каждого jswl.isEmpty())
 * 
 * @param {array} value
 * @returns {boolean}
 */
const allNotEmpty = (arr) => {
    var result = true;
    for (var i = 0; i < arr.length; i++) {
        if (isEmpty(arr[i])) {
            result = false;
            break;
        }
    }

    return result;
}



const array = {
    inArray,
    isAnyInArray,
    removeAllElementsLike,
    uniqueArray,
    allNotEmpty
};

export { array };