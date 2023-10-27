export const calculateAverage = (arr) => {
    let sum = 0;
    for (let number of arr) {
        sum += number;
    }
    return sum / arr.length;
}

//Затестим
console.log(calculateAverage([1052, 1031]));  // = 1041.5
console.log(calculateAverage([1552, 35315])); // = 18433.5