/**
 * The `uniqWith` function takes an array as its first argument and a 'comparator' function as the second.
 *
 * It evaluates the elements of the array using the comparator function, and if true is returned, it considers those elements as duplicates and removes them.
 *
 * @param {T[]} arr - The array to process.
 * @param {(item1: T, item2: T) => boolean} areItemsEqual - The function used to compare the array elements.
 * @returns {T[]} A new array containing only the unique elements from the original array, based on the values returned by the comparator function.
 * 
 * @example
 * ```ts
 * uniqWith([1.2, 1.5, 2.1, 3.2, 5.7, 5.3, 7.19], (a, b) => Math.abs(a - b) < 1);
 * // [1, 2, 3, 5, 7]
 * ```
 */
export function uniqWith<T>(arr: T[], areItemsEqual: (item1: T, item2: T) => boolean): T[] {
  const result: T[] = [];

  for (const item of arr) {
    const isUniq = result.every(v => !areItemsEqual(v, item));

    if (isUniq) {
      result.push(item);
    }
  }

  return result;
}
