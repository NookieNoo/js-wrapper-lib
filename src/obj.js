import isObject from './common';


export default function getPropIfObjectDefined(obj, propertyName, defaultValue = '') {
    if (isObject(obj)) {
        return obj[propertyName];
    } else {
        return defaultValue;
    }
}






import isDefined from './common';

const obj = {
    getPropByPath = function (obj, path) {
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
};

export default obj;