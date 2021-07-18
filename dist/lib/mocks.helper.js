"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockRequest = exports.mockTransient = exports.mockSingleton = void 0;
var container_1 = require("./container");
function mockSingleton(id, to) {
    container_1.getContainer().unbind(id);
    container_1.getContainer().addSingleton(to, id);
}
exports.mockSingleton = mockSingleton;
function mockTransient(id, to) {
    container_1.getContainer().unbind(id);
    container_1.getContainer().addTransient(to, id);
}
exports.mockTransient = mockTransient;
function mockRequest(id, to) {
    container_1.getContainer().unbind(id);
    container_1.getContainer().addRequest(to, id);
}
exports.mockRequest = mockRequest;
//# sourceMappingURL=mocks.helper.js.map