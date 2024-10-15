const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function rowSum(arr: number[][], rowIndex: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (arr.length > rowIndex ) {
            let sum = 0;
            for(let i = 0; i < arr[rowIndex].length; i++) {
                sum += arr[rowIndex][i];
            }
            resolve(sum);  
        }
        else {
            reject(`Row index ${rowIndex} is not within 0 and ${arr.length}`);
        }
    });
}

let sumPromises: Promise<number>[] = [];
for(let x = 0; x < array2D_1.length; x++) {
    sumPromises.push(rowSum(array2D_1, x));
}

Promise.all(sumPromises)
    .then((rowSums) => {
        let sum = 0;
        rowSums.forEach(rowSum => {
            sum += rowSum;
        });
        console.log(`Full array sum: ${sum}`);
    })
    .catch((error) => {
        console.log(`Unable to sum 2D array: ${error}`)
    });