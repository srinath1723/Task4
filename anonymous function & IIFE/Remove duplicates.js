const RemoveDuplicates = (function(arr) {
    const Array = [];
    arr.forEach(item => {
        if (!Array.includes(item)) {
            Array.push(item);
        }
    });
    return Array;
})([1, 2, 3, 4, 2, 3,6]);

console.log( RemoveDuplicates);