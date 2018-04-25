export function memoize(f) {
    if (typeof f !== 'function') {
        return null;
    }
    const cache = new Map();
    return function mem(...line) {
        const find = ((line.length !== 0) ? JSON.stringify(line) : 0);
        if (cache.has(find)) {
            return cache.get(find);
        }
        cache.set(find, f.apply(this, line));
        return cache.get(find);
    };
}
