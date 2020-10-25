export default function inArray(value, array) {
    return (!(array.indexOf(value) === -1));
}




export default function isAnyInArray(needles, array) {
    var result = false;
    for (var i = 0; i < needles.length; i++) {

        if (self.inArray(needles[i], array)) {
            result = true;
            break;
        }
    }
    return result;
}

