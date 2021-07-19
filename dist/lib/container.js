"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetContainer = exports.setContainer = exports.getContainer = exports.Container = void 0;
var inversify_1 = require("inversify");
var rn_api_1 = require("@yunti-private/rn-api");
var rn_visual_event_tracking_1 = require("@yunti-private/rn-visual-event-tracking");
var id_helper_1 = require("./id.helper");
var inject_helper_1 = require("./inject.helper");
function decorateCatchable(decorator, constructor, parameterIndex) {
    try {
        inversify_1.decorate(decorator, constructor);
    }
    catch (e) {
        if (e.message !== 'Cannot apply @injectable decorator multiple times.') {
            throw e;
        }
    }
}
/**
 * This class is the wrapper of inversify Container to add more functionalities.
 * The library exports an instance of the class but you can create your own instance
 */
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getApi = function () {
            return container.get(rn_api_1.apiSid);
        };
        _this.getHostUtil = function () {
            return container.get(rn_api_1.hostUtilSid);
        };
        _this.getVisualEventTracking = function () {
            return container.get(rn_visual_event_tracking_1.visualTrackSid);
        };
        return _this;
    }
    Container.prototype.bindTo = function (constructor, customId) {
        var id = id_helper_1.generateIdAndAddToCache(constructor, customId);
        decorateCatchable(inject_helper_1.injectable(), constructor);
        return _super.prototype.bind.call(this, id).to(constructor);
    };
    Container.prototype.addTransient = function (constructor, customId) {
        var id = id_helper_1.generateIdAndAddToCache(constructor, customId);
        decorateCatchable(inject_helper_1.injectable(), constructor);
        return _super.prototype.bind.call(this, id)
            .to(constructor)
            .inTransientScope();
    };
    Container.prototype.addSingleton = function (constructor, customId) {
        var id = id_helper_1.generateIdAndAddToCache(constructor, customId);
        decorateCatchable(inject_helper_1.injectable(), constructor);
        return _super.prototype.bind.call(this, id)
            .to(constructor)
            .inSingletonScope();
    };
    Container.prototype.addRequest = function (constructor, customId) {
        var id = id_helper_1.generateIdAndAddToCache(constructor, customId);
        decorateCatchable(inject_helper_1.injectable(), constructor);
        return _super.prototype.bind.call(this, id)
            .to(constructor)
            .inRequestScope();
    };
    Container.prototype.get = function (serviceIdentifier) {
        return _super.prototype.get.call(this, serviceIdentifier);
    };
    return Container;
}(inversify_1.Container));
exports.Container = Container;
var container;
function getContainer() {
    return container;
}
exports.getContainer = getContainer;
function setContainer(options) {
    return (container = new Container(options));
}
exports.setContainer = setContainer;
function resetContainer() {
    getContainer().unbindAll();
}
exports.resetContainer = resetContainer;
//# sourceMappingURL=container.js.map