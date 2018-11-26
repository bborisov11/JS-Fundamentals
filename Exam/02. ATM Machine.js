function atmMachine(arr) {
    let matrix = [];

    for (let i = 0; i < arr.length; i++) {
         matrix[i] = [];
        for (let j = 0; j < arr[i].length; j++) {
            matrix[i][j] = arr[i][j];
        }
    }
    let totalCash = 0;
    let banknotesFromATM = [];
    for (let i = 0; i < matrix.length; i++) {
        if(matrix[i].length > 2) {
            let sum = 0;
            for (let j = 0; j < matrix[i].length; j++) {
                sum += +matrix[i][j];
                banknotesFromATM.push(+matrix[i][j]);
            }
            totalCash += sum;
            console.log(`Service Report: ${sum}$ inserted. Current balance: ${totalCash}$.`);
        } else if(matrix[i].length === 2) {
            let balance = matrix[i][0];
            let moneyToWithdraw = matrix[i][1];
            if(balance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${balance}$.`);
            } else if(totalCash < moneyToWithdraw) {
                console.log(`ATM machine is out of order!`);
            } else  {
                banknotesFromATM.sort((a, b) => a - b);
                let currentMoneyToWithdraw = moneyToWithdraw;
                for (let j = banknotesFromATM.length - 1; j >= 0; j--) {
                    if(banknotesFromATM[j] <= currentMoneyToWithdraw && currentMoneyToWithdraw > 0) {
                        currentMoneyToWithdraw -= banknotesFromATM[j];
                        let index = banknotesFromATM.indexOf(banknotesFromATM[j]);
                        if (index > -1) {
                            banknotesFromATM.splice(index, 1);
                        }
                    }
                }
                totalCash -= moneyToWithdraw;
                balance -= moneyToWithdraw;
                console.log(`You get ${moneyToWithdraw}$. Account balance: ${balance}$. Thank you!`);
            }
        } else if(matrix[i].length === 1) {
            console.log(`Service Report: Banknotes from ${matrix[i][0]}$: ${banknotesFromATM.filter(x => x === matrix[i][0]).length}.`)
        }
    }

}
atmMachine([[20, 5, 100, 20, 1],
        [457, 25],
        [1],
        [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
        [20, 85],
        [5000, 4500],
    ]
);