/**
 * Returns an ID that is stable across renders and consistent between server
 * and client rendering. React's raw IDs contain characters (`:`, `«`, `»`)
 * that can break `url(#id)` references in some browsers, so they are stripped.
 */
export default function useUniqueId(prefix: string): string;
