import { isDefined } from './common';

const obj = {
    getPropByPath: function (obj, path) {
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
    },
    getObjectPropBySubprop: (obj, subpropName, subpropValue) => {

        var result = undefined;
        var foundValue = null;

        for (var prop in obj) {
            foundValue = this.getPropByPath(obj[prop], subpropName);
            if (foundValue.found &&
                (foundValue.value === subpropValue)) {
                result = obj[prop];
                break;
            }
        }

        return result;
    }
};

export { obj };