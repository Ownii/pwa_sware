export default function(fn, ...curriedArgs) {
    return function(...args) {
        fn.apply(this, curriedArgs.concat(args));
    };
}
