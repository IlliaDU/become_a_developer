let fs = require('fs');
let array = fs.readFileSync('10m.txt').toString().split('\n').map(Number);

arrayMin = (array) => {
    let len = array.length, min = Infinity;
    while (len--) {
        if (array[len] < min) {
            min = array[len];
        }
    }
    return min;
};

arrayMax = (array) => {
    let len = array.length, max = -Infinity;
    while (len--) {
        if (array[len] > max) {
            max = array[len];
        }
    }
    return max;
}

arrayMedian = (array) => {
    let len = array.length, median;
    if (len % 2 === 0) {
        median = (array[len / 2] + array[len / 2 - 1]) / 2;
    } else {
        median = array[Math.floor(len / 2)];
    }
    return median;
}

arrayAverage = (array) => {
    let len = array.length, sum = 0;
    while (len--) {
        sum += array[len];
    }
    return sum / array.length;
}


console.log(arrayMin(array));
console.log(arrayMax(array));
console.log(arrayMedian(array));
console.log(arrayAverage(array));

