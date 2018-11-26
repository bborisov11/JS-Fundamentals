function coffeeMachine(arr) {
    let resultDrinks = [];
    let successfulOrderSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let data = arr[i].split(", ");
        let coinsInserted = +data[0];
        let startPrice = coinsInserted;
        let typeOfDrink = data[1];
        let currentStrMessage = "";

        if (typeOfDrink === "coffee") {
            let typeOfCoffee = data[2];
            if (typeOfCoffee === "caffeine") {
                if (coinsInserted >= 0.80) {
                    if (data.includes("milk")) {
                        coinsInserted -= 0.80 + +(0.80 * 0.10).toFixed(1);

                    } else {
                        coinsInserted -= 0.80;
                    }
                    if (data[data.length - 1] > 0) {
                        coinsInserted -= 0.10;
                    }
                    successfulOrderSum += 0.80;
                    currentStrMessage = `You ordered coffee. Price: ${startPrice.toFixed(2)}$ Change: ${coinsInserted.toFixed(2)}$`;
                } else {
                    let notEnoughCoins = 0;
                    if (data.includes("milk")) {
                        notEnoughCoins += (0.80 * 0.90).toFixed(1);
                    } else {
                        notEnoughCoins += 0.80;
                    }
                    if (data[data.length - 1] > 0) {
                        notEnoughCoins -= 0.10;
                    }
                    currentStrMessage = `Not enough money for coffee. Need ${(notEnoughCoins - coinsInserted).toFixed(2)}$ more`;
                }

            } else if (typeOfCoffee === "decaf") {
                if (coinsInserted >= 0.90) {
                    if (data.includes("milk")) {
                        coinsInserted -= (0.90 * 0.90).toFixed(1);
                    } else {
                        coinsInserted -= 0.90;
                    }
                    if (data[data.length - 1] > 0) {
                        coinsInserted -= 0.10;
                    }
                    successfulOrderSum += 0.80;
                    currentStrMessage = `You ordered coffee. Price: ${startPrice.toFixed(2)}$ Change: ${coinsInserted.toFixed(2)}$`;
                } else {
                    let notEnoughCoins = 0;
                    if (data.includes("milk")) {
                        notEnoughCoins += (0.90 * 0.90).toFixed(1);
                    } else {
                        notEnoughCoins += 0.90;
                    }
                    if (data[data.length - 1] > 0) {
                        notEnoughCoins -= 0.10;
                    }
                    currentStrMessage = `Not enough money for coffee. Need ${(notEnoughCoins - coinsInserted).toFixed(2)}$ more`;
                }
            }
        } else if (typeOfDrink === "tea") {
                if (coinsInserted >= 0.80) {
                    if (data.includes("milk")) {
                        coinsInserted -= (0.80 * 0.90).toFixed(1);
                    } else {
                        coinsInserted -= 0.80;
                    }
                    if (data[data.length - 1] > 0) {
                        coinsInserted -= 0.10;
                    }
                    successfulOrderSum += 0.80;
                    currentStrMessage = `You ordered tea. Price: ${startPrice.toFixed(2)}$ Change: ${coinsInserted.toFixed(2)}$`;
                } else {
                    let notEnoughCoins = 0;
                    if (data.includes("milk")) {
                        notEnoughCoins += +(0.80 * 0.90).toFixed(1);
                    } else {
                        notEnoughCoins += 0.80;
                    }
                    if (data[data.length - 1] > 0) {
                        notEnoughCoins += 0.10;
                    }
                    currentStrMessage = `Not enough money for tea. Need ${(notEnoughCoins - coinsInserted).toFixed(2)}$ more`;
                }

            }
            resultDrinks.push(currentStrMessage);
        }
        console.log(resultDrinks.join("\n"));
        console.log(`Income Report: ${successfulOrderSum.toFixed(2)}$`)

}
coffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']);