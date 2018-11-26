function spiralMatrix(rows,cols) {

    let matrix = [rows][cols];
    let num = 0;
    for (let row = 0; row < rows; row++) {
        num++;
        for (let col = 0; col < cols; col++) {
            if(row === 0 && col <= cols - 1) {
                matrix[row][col] = num;
            }
            matrix[row][cols-1] = num;

        }
    }

}
spiralMatrix(5,5);