
/**
 * weightedSample
 * Returns a random element from an array, using the provided weights as the probabilities for each element.
 *
 */
export const weightedSample = (arr, weights) => {
  let roll = Math.random();
  return arr[
    weights
      .reduce((acc, w, i) => (i === 0 ? [w] : [...acc, acc[acc.length - 1] + w]), [])
      .findIndex((v, i, s) => roll >= (i === 0 ? 0 : s[i - 1]) && roll < v)
  ];
};
