"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var container_1 = require("../lib/container");
var inject_helper_1 = require("../lib/inject.helper");
describe('Inject Helper', function () {
    describe('When index parameter is defined', function () {
        test('should be detected as parameter decorator if index is a number', function () {
            expect(inject_helper_1.isParameterDecorator(0)).toBe(true);
            expect(inject_helper_1.isParameterDecorator(1)).toBe(true);
            expect(inject_helper_1.isParameterDecorator(undefined)).toBe(false);
        });
    });
    describe('When is a parameter decorator', function () {
        test('should be able to register a dependency as parameter with the same name', function () {
            var Dummy = /** @class */ (function () {
                function Dummy() {
                }
                Dummy.prototype.example = function () {
                    return 'example';
                };
                return Dummy;
            }());
            __1.container.addSingleton(Dummy);
            var OtherDummy = /** @class */ (function () {
                function OtherDummy(Dummy) {
                    this.Dummy = Dummy;
                }
                OtherDummy.prototype.test = function () {
                    return this.Dummy.example();
                };
                OtherDummy = __decorate([
                    __param(0, inject_helper_1.inject()),
                    __metadata("design:paramtypes", [Object])
                ], OtherDummy);
                return OtherDummy;
            }());
            __1.container.addSingleton(OtherDummy);
            var dependency = __1.container.get(__1.cid.OtherDummy);
            expect(dependency.test()).toBe('example');
            container_1.resetContainer();
        });
        test('should be able to register a dependency as parameter with the same name if first char is lowercase', function () {
            var Dummy = /** @class */ (function () {
                function Dummy() {
                }
                Dummy.prototype.example = function () {
                    return 'example';
                };
                return Dummy;
            }());
            __1.container.addSingleton(Dummy);
            var OtherDummy = /** @class */ (function () {
                function OtherDummy(dummy) {
                    this.dummy = dummy;
                }
                OtherDummy.prototype.test = function () {
                    return this.dummy.example();
                };
                OtherDummy = __decorate([
                    __param(0, inject_helper_1.inject()),
                    __metadata("design:paramtypes", [Object])
                ], OtherDummy);
                return OtherDummy;
            }());
            __1.container.addSingleton(OtherDummy);
            var dependency = __1.container.get(__1.cid.OtherDummy);
            expect(dependency.test()).toBe('example');
            container_1.resetContainer();
        });
        test('should be able to register a dependency as parameter with the same name if first char is lowercase and the prefix is an underscore', function () {
            var Dummy = /** @class */ (function () {
                function Dummy() {
                }
                Dummy.prototype.example = function () {
                    return 'example';
                };
                return Dummy;
            }());
            __1.container.addSingleton(Dummy);
            var OtherDummy = /** @class */ (function () {
                function OtherDummy(_dummy) {
                    this._dummy = _dummy;
                }
                OtherDummy.prototype.test = function () {
                    return this._dummy.example();
                };
                OtherDummy = __decorate([
                    __param(0, inject_helper_1.inject()),
                    __metadata("design:paramtypes", [Object])
                ], OtherDummy);
                return OtherDummy;
            }());
            __1.container.addSingleton(OtherDummy);
            var dependency = __1.container.get(__1.cid.OtherDummy);
            expect(dependency.test()).toBe('example');
            container_1.resetContainer();
        });
    });
    describe('When is a property/method decorator', function () {
        test('should be able to register a dependency as parameter with the same name', function () {
            var Dummy = /** @class */ (function () {
                function Dummy() {
                }
                Dummy.prototype.example = function () {
                    return 'example';
                };
                return Dummy;
            }());
            __1.container.addSingleton(Dummy);
            var OtherDummy = /** @class */ (function () {
                function OtherDummy() {
                }
                OtherDummy.prototype.test = function () {
                    return this.Dummy.example();
                };
                __decorate([
                    inject_helper_1.inject(),
                    __metadata("design:type", Object)
                ], OtherDummy.prototype, "Dummy", void 0);
                return OtherDummy;
            }());
            __1.container.addSingleton(OtherDummy);
            var dependency = __1.container.get(__1.cid.OtherDummy);
            expect(dependency.test()).toBe('example');
            container_1.resetContainer();
        });
        test('should be able to register a dependency as parameter with the same name if first char is lowercase', function () {
            var Dummy = /** @class */ (function () {
                function Dummy() {
                }
                Dummy.prototype.example = function () {
                    return 'example';
                };
                return Dummy;
            }());
            __1.container.addSingleton(Dummy);
            var OtherDummy = /** @class */ (function () {
                function OtherDummy() {
                }
                OtherDummy.prototype.test = function () {
                    return this.dummy.example();
                };
                __decorate([
                    inject_helper_1.inject(),
                    __metadata("design:type", Object)
                ], OtherDummy.prototype, "dummy", void 0);
                return OtherDummy;
            }());
            __1.container.addSingleton(OtherDummy);
            var dependency = __1.container.get(__1.cid.OtherDummy);
            expect(dependency.test()).toBe('example');
            container_1.resetContainer();
        });
        test('should be able to register a dependency as parameter with the same name if first char is lowercase and the prefix is an underscore', function () {
            var Dummy = /** @class */ (function () {
                function Dummy() {
                }
                Dummy.prototype.example = function () {
                    return 'example';
                };
                return Dummy;
            }());
            __1.container.addSingleton(Dummy);
            var OtherDummy = /** @class */ (function () {
                function OtherDummy() {
                }
                OtherDummy.prototype.test = function () {
                    return this._dummy.example();
                };
                __decorate([
                    inject_helper_1.inject(),
                    __metadata("design:type", Object)
                ], OtherDummy.prototype, "_dummy", void 0);
                return OtherDummy;
            }());
            __1.container.addSingleton(OtherDummy);
            var dependency = __1.container.get(__1.cid.OtherDummy);
            expect(dependency.test()).toBe('example');
            container_1.resetContainer();
        });
    });
    describe('When using classes in more than one test', function () {
        var Dummy = /** @class */ (function () {
            function Dummy() {
            }
            Dummy.prototype.example = function () {
                return 'example';
            };
            return Dummy;
        }());
        test('should dont have @injectable errors', function () {
            __1.container.addSingleton(Dummy);
            var dependency = __1.container.get(__1.cid.Dummy);
            expect(dependency.example()).toBe('example');
            container_1.resetContainer();
            __1.container.addSingleton(Dummy);
            var dependency2 = __1.container.get(__1.cid.Dummy);
            expect(dependency2.example()).toBe('example');
            container_1.resetContainer();
        });
    });
});
//# sourceMappingURL=inject.test.js.map