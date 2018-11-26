function airPollution(matrixArr, commands) {
    let matrix = [];

    for (let i = 0; i < matrixArr.length; i++) {
        let currentArr = matrixArr[i].split(" ");
        matrix[i] = [];
        for (let j = 0; j < currentArr.length; j++) {
            matrix[i][j] = +currentArr[j];
        }
    }
    for (let command of commands) {
        let currentCommand = command.split(" ")[0];
        let value = +command.split(" ")[1];

        switch (currentCommand) {
            case "breeze":
                for (let j = 0; j < matrix[value].length; j++) {
                    if(matrix[value][j] - 15 >= 0) {
                        matrix[value][j] -= 15;
                    }
                }
                break;
            case "gale":
                for (let i = 0; i < matrix.length; i++) {
                    if(matrix[i][value] - 20 >= 0) {
                        matrix[i][value] -= 20;
                    }
                }
                break;
            case "smog":
                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        matrix[i][j] += value;
                    }
                }
                break;
        }
    }
    let pollutedBlocks = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] >= 50) {
                pollutedBlocks.push(`[${i}-${j}]`);
            }
        }
    }
    console.log(pollutedBlocks.length > 0 ? "Polluted areas: " + pollutedBlocks.join(", ") :
        "No polluted areas");
}
airPollution([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]
);