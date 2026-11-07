/**
 * Looks up `key` (or `fallback` when `key` is empty) in `map`, ignoring
 * inherited properties so values like "constructor" don't resolve to
 * Object.prototype members.
 */
export default function lookup<T>(map: Readonly<Record<string, T>>, key: string | undefined, fallback: string): T | undefined;
