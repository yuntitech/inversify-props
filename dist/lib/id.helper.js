"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrSetIdFromCache = exports.generateIdAndAddToCache = exports.addIdToCache = exports.generateIdNameOfDependency = exports.generateIdName = exports.generateIdOfDependency = exports.generateIdFromName = exports.resetIdsCache = exports.idsCache = void 0;
exports.idsCache = {};
function resetIdsCache() {
    exports.idsCache = {};
}
exports.resetIdsCache = resetIdsCache;
function generateIdFromName(name, id) {
    return id || Symbol(name);
}
exports.generateIdFromName = generateIdFromName;
function generateIdOfDependency(constructor, id) {
    return generateIdFromName(constructor.name, id);
}
exports.generateIdOfDependency = generateIdOfDependency;
function generateIdName(constructorName) {
    var name = constructorName;
    return name.charAt(0).toUpperCase() + name.slice(1);
}
exports.generateIdName = generateIdName;
function generateIdNameOfDependency(constructor, id) {
    return id ? id.toString() : generateIdName(constructor.name);
}
exports.generateIdNameOfDependency = generateIdNameOfDependency;
function addIdToCache(id, name) {
    var existingId = exports.idsCache[name];
    if (existingId) {
        return existingId;
    }
    // Adds also 'I' for compatibility with interfaces
    exports.idsCache["I" + name] = id;
    return (exports.idsCache[name] = id);
}
exports.addIdToCache = addIdToCache;
function generateIdAndAddToCache(constructor, id) {
    var dependencyId = generateIdOfDependency(constructor, id);
    var dependencyIdName = generateIdNameOfDependency(constructor, id);
    var cachedId = addIdToCache(dependencyId, dependencyIdName);
    return cachedId;
}
exports.generateIdAndAddToCache = generateIdAndAddToCache;
function getOrSetIdFromCache(dependencyIdName, id) {
    var cachedId = exports.idsCache[dependencyIdName];
    if (cachedId) {
        return cachedId;
    }
    var dependencyId = generateIdFromName(dependencyIdName, id);
    var newCachedId = addIdToCache(dependencyId, dependencyIdName);
    return newCachedId;
}
exports.getOrSetIdFromCache = getOrSetIdFromCache;
//# sourceMappingURL=id.helper.js.map