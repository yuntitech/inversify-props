"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var id_helper_1 = require("../lib/id.helper");
describe('Id Helper', function () {
    describe('When generate Ids receives a Class with an Interface and an Id', function () {
        test('if the Id is an string should return the same Id', function () {
            var Dummy = /** @class */ (function () {
                function Dummy() {
                }
                return Dummy;
            }());
            var id = 'testId';
            var generatedId = id_helper_1.generateIdOfDependency(Dummy, id);
            expect(generatedId).toBe(id);
            expect(typeof generatedId).toBe('string');
        });
        test('if the Id is a symbol should return the same Id', function () {
            var Dummy = /** @class */ (function () {
                function Dummy() {
                }
                return Dummy;
            }());
            var id = Symbol('testid');
            var generatedId = id_helper_1.generateIdOfDependency(Dummy, id);
            expect(generatedId).toBe(id);
            expect(typeof generatedId).toBe('symbol');
        });
    });
    describe('When generate Ids receives a Class with an Interface and NOT an Id', function () {
        test('should return a Symbol id', function () {
            var Dummy = /** @class */ (function () {
                function Dummy() {
                }
                return Dummy;
            }());
            var id = null;
            var generatedId = id_helper_1.generateIdOfDependency(Dummy, id);
            expect(generatedId.toString()).toBe('Symbol(Dummy)');
            expect(typeof generatedId).toBe('symbol');
        });
    });
    describe('When adds new id to the cache', function () {
        test('should cache it and return the same value', function () {
            var id = 'test id';
            var name = 'test';
            var cachedId = id_helper_1.addIdToCache(id, name);
            expect(id_helper_1.getOrSetIdFromCache(name)).toBe(id);
            expect(cachedId).toBe(id);
            id_helper_1.resetIdsCache();
        });
        test('should not cache it id exist', function () {
            var id = 'test id';
            var name = 'test';
            var fakevalue = 'fake';
            id_helper_1.addIdToCache(id, name);
            id_helper_1.idsCache[name] = fakevalue;
            var cachedAgainId = id_helper_1.addIdToCache(id, name);
            expect(cachedAgainId).not.toBe(id);
            expect(cachedAgainId).toBe(fakevalue);
            id_helper_1.resetIdsCache();
        });
    });
    describe('When generate name is called', function () {
        test('should return the constructor name', function () {
            var Dummy = /** @class */ (function () {
                function Dummy() {
                }
                return Dummy;
            }());
            expect(id_helper_1.generateIdName(Dummy.name)).toBe('Dummy');
        });
        test('should return the constructor name in the same form if first char is lowercase', function () {
            var dummy = /** @class */ (function () {
                function dummy() {
                }
                return dummy;
            }());
            expect(id_helper_1.generateIdName(dummy.name)).toBe('Dummy');
        });
    });
});
//# sourceMappingURL=id.test.js.map