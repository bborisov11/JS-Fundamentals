function magicMatrix(matrix) {
    let currentRowSum = 0;
    let currentColSum = 0;
    let magical = true;

    for (let i = 0; i < matrix.length; i++) {

        let rowSum = 0;
        let colSum = 0;

        for (let j = 0; j < matrix[i].length; j++) {
           rowSum += matrix[j][i];
           colSum += matrix[i][j];

           if(i === 0) {
               currentRowSum += matrix[j][i];
               currentColSum += matrix[i][j];
           }
        }
        if(rowSum !== colSum || currentRowSum !== rowSum || currentColSum !== colSum) {
            magical = false;
            console.log(magical);
            return;
        }
    }
    console.log(magical);
}
magicMatrix([ [0, 0, 0],
              [0, 2, 0],
              [0, 0, 0]]
);