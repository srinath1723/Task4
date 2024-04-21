const rotatedArray = (function(arr, k) {
    const n = arr.length;
    k %= n;         // Ensure k is within the range of array length
                                                      
    return [...arr.slice(n - k), ...arr.slice(0, n - k)];  // Rotate the array
})([1, 2, 3, 4, 5], 4);

console.log( rotatedArray);