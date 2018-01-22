export default function(...fns) {
    return function(...args) {
        const [result] = fns.reduceRight(
            (agg, cur) => [cur.apply(this, agg)],
            args
        );
        return result;
    };
}
