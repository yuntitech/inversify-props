"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log_helper_1 = require("../lib/log.helper");
describe('Log Helper', function () {
    describe('When log is NOT in debug mode', function () {
        test('should not log anything', function () {
            var spy = jest.spyOn(console, 'log');
            log_helper_1.log(false, 'test log');
            expect(console.log).not.toBeCalled();
            spy.mockRestore();
        });
    });
    describe('When log is debug mode', function () {
        test('should log the message', function () {
            var spy = jest.spyOn(console, 'log');
            log_helper_1.log(true, 'test log');
            expect(console.log).toBeCalledWith('test log');
            spy.mockRestore();
        });
        test('if has more than one message should log the messages', function () {
            var spy = jest.spyOn(console, 'log');
            log_helper_1.log(true, 'test log', 'test log 2');
            expect(console.log).toBeCalledWith('test log', 'test log 2');
            spy.mockRestore();
        });
    });
});
//# sourceMappingURL=log.test.js.map