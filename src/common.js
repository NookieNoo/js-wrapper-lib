const isNullOrUndefined = (value) => {
    return (typeof value === "undefined"
        || value === null);
}

const isDefined = (value) => {
    return (typeof value !== "undefined" && value !== null);
}

const isObject = (value) => {
    this.isDefined(value) && (typeof value === 'object');
}

const isObjectEmpty = (obj) => {

    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}


const getPropByPath = (obj, path) => {

    var result = {
        found: false,
        value: undefined,
    }

    var fragments = path.split('.');
    var value = obj;
    for (var i = 0; i < fragments.length; i++) {
        if (isDefined(value)) {
            result.found = value.hasOwnProperty(fragments[i]) ?
                true : false;
            value = value[fragments[i]];
        } else {
            result.found = false;
            break;
        }
    }

    if (result.found) {
        result.value = value;
    }

    return result;
}


const getArrElementAndIndexByObjectProp = (arr, propName, propValue) => {

    var result = {
        key: i,
        value: arr[i]
    };
    var foundValue = null;
    for (var i = 0; i < arr.length; i++) {
        foundValue = getPropByPath(arr[i], propName);
        if (foundValue.found &&
            (foundValue.value === propValue)) {
            result = {
                key: i,
                value: arr[i]
            };
            break;
        }
    }

    return result;
}

const getArrElementByObjectProp = (arr, propName, propValue) => {

    var result = getArrElementAndIndexByObjectProp(arr, propName, propValue);
    return result ? result.value : result;
}

const isEmpty = (value) => {
    return (
        typeof value === "undefined"
        || value === null
        || value === ""
        || value === 0
        || value === "0"
        || (isDefined(value.length)
            && value.length === 0) //  empty array
        || value === false
        || (isObject(value)
            && isObjectEmpty(value)) //  empty object
    );
}

const getPropIfObjectDefined = function (obj, propertyName, defaultValue = '') {
    if (isObject(obj)) {
        return obj[propertyName];
    } else {
        return defaultValue;
    }
}

const common = {
    isNullOrUndefined,
    isDefined,
    isObject,
    isObjectEmpty,
    getPropByPath,
    getArrElementAndIndexByObjectProp,
    getArrElementByObjectProp,
    isEmpty,
    getPropIfObjectDefined
};

export {
    isNullOrUndefined,
    isDefined,
    isObject,
    isObjectEmpty,
    getPropByPath,
    getArrElementAndIndexByObjectProp,
    getArrElementByObjectProp,
    isEmpty,
    getPropIfObjectDefined
};
export { common };