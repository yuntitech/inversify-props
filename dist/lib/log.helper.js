"use strict";
/**
 * Log a message if debug mode is enabled
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
function log(debug) {
    if (debug === void 0) { debug = false; }
    var messages = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        messages[_i - 1] = arguments[_i];
    }
    if (!debug) {
        return;
    }
    console.log.apply(console, messages);
}
exports.log = log;
//# sourceMappingURL=log.helper.js.map