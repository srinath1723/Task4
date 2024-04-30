(function(arr1, arr2) {
    var totalLength = arr1.length + arr2.length;
    var medianIndex = Math.floor(totalLength / 2);
    var mergedArray = [];
    var i = 0, j = 0;

    for (var k = 0; k <= medianIndex; k++) {
        if (i < arr1.length && (j >= arr2.length || arr1[i] <= arr2[j])) {
            mergedArray.push(arr1[i]);
            i++;
        } else if (j < arr2.length) {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    var median;
    if (totalLength % 2 === 0) {
        median = (mergedArray[medianIndex - 1] + mergedArray[medianIndex]) / 2;
    } else {
        median = mergedArray[medianIndex];
    }

    console.log("Median:", median);
})([1, 3, 5,10], [2, 4, 6,20]); 
