import { isEmpty } from './common';

function inArray(value, array) {
    return (!(array.indexOf(value) === -1));
}

function isAnyInArray(needles, array) {
    var result = false;
    for (var i = 0; i < needles.length; i++) {

        if (inArray(needles[i], array)) {
            result = true;
            break;
        }
    }
    return result;
}

function removeAllElementsLike(arr, value) {
    var newArr = [];
    arr.forEach((currentElement, index, array) => {
        if (currentElement !== value) {
            newArr.push(currentElement);
        }
    });

    return newArr;
}

function uniqueArray(arr) {
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    var unique = arr.filter(onlyUnique);
    return unique;
}

function allNotEmpty(arr) {
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
    uniqueArray
};

export { array };