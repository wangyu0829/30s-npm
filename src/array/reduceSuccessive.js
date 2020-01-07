
/**
 * reduceSuccessive
 * Applies a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values.
 *
 */
export const reduceSuccessive = (arr, fn, acc) =>
  arr.reduce((res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res), [acc]);
