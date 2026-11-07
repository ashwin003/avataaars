"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = lookup;
/**
 * Looks up `key` (or `fallback` when `key` is empty) in `map`, ignoring
 * inherited properties so values like "constructor" don't resolve to
 * Object.prototype members.
 */
function lookup(map, key, fallback) {
    const k = key || fallback;
    return Object.prototype.hasOwnProperty.call(map, k) ? map[k] : undefined;
}
