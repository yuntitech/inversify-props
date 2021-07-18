"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cid = exports.container = void 0;
var container_1 = require("./lib/container");
var id_helper_1 = require("./lib/id.helper");
exports.container = container_1.setContainer({ skipBaseClassChecks: true });
exports.cid = id_helper_1.idsCache;
__exportStar(require("./lib/container"), exports);
__exportStar(require("./lib/id.helper"), exports);
__exportStar(require("./lib/inject.helper"), exports);
__exportStar(require("./lib/mocks.helper"), exports);
__exportStar(require("./lib/parameters.helper"), exports);
//# sourceMappingURL=index.js.map