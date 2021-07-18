"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isParameterDecorator = exports.Inject = exports.inject = exports.injectable = void 0;
var inversify_1 = require("inversify");
var container_1 = require("./container");
var id_helper_1 = require("./id.helper");
var log_helper_1 = require("./log.helper");
var parameters_helper_1 = require("./parameters.helper");
function injectable() {
    return function (constructor) {
        return inversify_1.injectable()(constructor);
    };
}
exports.injectable = injectable;
function inject(customId, debug) {
    if (debug === void 0) { debug = false; }
    return function (target, methodName, indexOrDescriptor) {
        log_helper_1.log(debug, 'DI: Registering', target, indexOrDescriptor, customId);
        log_helper_1.log(debug, 'DI: idsCache', id_helper_1.idsCache);
        if (typeof indexOrDescriptor === 'number' && isParameterDecorator(indexOrDescriptor)) {
            return injectParameterDecorator(target, methodName, indexOrDescriptor, customId, debug);
        }
        return injectPropertyDecorator(target, methodName, indexOrDescriptor, customId, debug);
    };
}
exports.inject = inject;
exports.Inject = inject;
function isParameterDecorator(index) {
    return index !== undefined ? typeof index === 'number' : false;
}
exports.isParameterDecorator = isParameterDecorator;
function injectParameterDecorator(target, methodName, index, customId, debug) {
    if (debug === void 0) { debug = false; }
    log_helper_1.log(debug, 'DI: is parameter decorator', target, index, customId);
    var id = customId;
    if (!id) {
        var parameters = parameters_helper_1.getParametersFromConstructor(target);
        log_helper_1.log(debug, parameters);
        var currentParameter = parameters[index];
        log_helper_1.log(debug, currentParameter);
        var cacheIdNameFromParameter = parameters_helper_1.cleanParameter(currentParameter);
        log_helper_1.log(debug, cacheIdNameFromParameter);
        id = id_helper_1.getOrSetIdFromCache(id_helper_1.generateIdName(cacheIdNameFromParameter));
        log_helper_1.log(debug, id);
    }
    return inversify_1.inject(id)(target, methodName, index);
}
function injectPropertyDecorator(target, methodName, descriptor, customId, debug) {
    if (debug === void 0) { debug = false; }
    log_helper_1.log(debug, 'DI: is method/property decorator', methodName, target, customId);
    var id = customId;
    if (!id) {
        var cacheIdNameFromParameter = parameters_helper_1.cleanParameter(methodName);
        id = id_helper_1.getOrSetIdFromCache(id_helper_1.generateIdName(cacheIdNameFromParameter));
    }
    if (descriptor) {
        log_helper_1.log(debug, 'has descriptor', descriptor);
        descriptor.get = function () { return container_1.getContainer().get(id); };
    }
    else {
        log_helper_1.log(debug, 'Using Reflect defineProperty will be deprecated soon, use ES6');
        Reflect.deleteProperty(target, methodName);
        Reflect.defineProperty(target, methodName, {
            get: function () {
                return container_1.getContainer().get(id);
            },
            set: function (value) {
                return value;
            }
        });
    }
    return inversify_1.inject(id)(target, methodName);
}
//# sourceMappingURL=inject.helper.js.map