export default function isNullOrUndefined(value) {
    return (typeof value === "undefined"
        || value === null);
}

export default function isDefined(value) {
    return (typeof value !== "undefined" && value !== null);
}

export default function isObject(value) {
    return isDefined(value) && (typeof value === 'object');
}