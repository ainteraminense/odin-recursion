import {mergeSort} from "./app2.0.js"

test('Empty array is emtpy array', () => {
    expect(mergeSort([])).toEqual([]);
});

test('73 is  73', () => {
    expect(mergeSort([73])).toEqual([73]);
});

test('[1, 2, 3, 4, 5] is [1, 2, 3, 4, 5]', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
})