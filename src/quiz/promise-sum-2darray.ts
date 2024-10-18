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

async function sumArray(arr: number[][]): Promise<number> {
    if (arr.length === 0) {
        throw new Error('no sum for empty array');
    }

    const sumPromises = arr.map((_, index) => rowSum(arr, index));
    const rowSums = await Promise.all(sumPromises);

    return rowSums.reduce((acc, curr) => acc + curr);
}

async function sumArrayHandler(arr: number[][]): Promise<string> {
    try {
        const sum = await sumArray(arr);
        console.log(`Full array sum: ${sum}`);
        return "resolved";
    } catch (err) {
        console.log(`Unable to sum 2D array: ${err}`);
        return "rejected";
    }
}

// resolved, 45
sumArrayHandler(array2D_1)
    .then(status => console.log(status));

// rejected
sumArrayHandler([])
    .then(status => console.log(status));