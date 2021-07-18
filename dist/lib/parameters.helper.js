"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanParameter = exports.convertStringParametersToList = exports.getParametersAsStringFromConstructor = exports.getParametersFromConstructor = void 0;
var id_helper_1 = require("./id.helper");
function getParametersFromConstructor(constructor) {
    var stringParameters = getParametersAsStringFromConstructor(constructor);
    return convertStringParametersToList(stringParameters);
}
exports.getParametersFromConstructor = getParametersFromConstructor;
function getParametersAsStringFromConstructor(constructor) {
    var parameters = constructor.toString().match(/(constructor|function) ?(.*) ?\((.*)\)/);
    if (!parameters) {
        throw new Error("Cannot find constructor in this class " + constructor.name);
    }
    return parameters[3];
}
exports.getParametersAsStringFromConstructor = getParametersAsStringFromConstructor;
function convertStringParametersToList(stringParameters) {
    return stringParameters
        .split(',')
        .map(function (arg) { return arg.replace(/\/\*.*\*\//, '').trim(); })
        .filter(function (x) { return x; });
}
exports.convertStringParametersToList = convertStringParametersToList;
function cleanParameter(parameter) {
    return id_helper_1.generateIdName(parameter).replace(/_/g, '');
}
exports.cleanParameter = cleanParameter;
//# sourceMappingURL=parameters.helper.js.map