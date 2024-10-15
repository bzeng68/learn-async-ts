const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function checkRowNegative(arr: number[][], rowIndex: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (arr.length > rowIndex) {
            const negElems = arr[rowIndex].filter((e) => e < 0)
            if (negElems.length > 0) {
                resolve(`Found negative number in this row: ${arr[rowIndex]}`);
            } else { 
                reject('Negative number not found');
            }
        }
        else {
            reject(`Row Index ${rowIndex} must be within 0 and ${arr.length}`);
        }
    });
}

const checkRowNegativePromises: Promise<string>[] = [];

for(let i = 0; i < array2D_3.length; i++) {
    checkRowNegativePromises.push(checkRowNegative(array2D_3, i));
}

Promise.any(checkRowNegativePromises)
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(`Unable to find negative rows: ${error}`)
    });