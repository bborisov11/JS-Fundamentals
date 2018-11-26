function coffeeMachine(arr) {
    let totalSumEarned = 0;
    for (let i = 0; i < arr.length; i++) {
        let data = arr[i].split(", ");
        let coinsInserted = +data[0];
        let typeOfDrink = data[1];

        switch (typeOfDrink) {
            case "coffee":
                let typeOfCoffee = data[2];
                let priceForCoffee = 0;
                let currentCoffeeSum = 0;
                switch (typeOfCoffee) {
                    case "caffeine":
                        priceForCoffee = 0.8;
                        break;
                    case "decaf":
                        priceForCoffee = 0.9;
                        break;
                }
                if(data.includes("milk")) {
                    currentCoffeeSum += priceForCoffee + +(priceForCoffee * 0.1).toFixed(1);
                } else {
                    currentCoffeeSum += priceForCoffee;
                }
                if(data[data.length - 1] > 0) {
                    currentCoffeeSum += 0.10;
                }
                if(coinsInserted >= currentCoffeeSum) {
                    totalSumEarned += currentCoffeeSum;
                    console.log(`You ordered coffee. Price: ${currentCoffeeSum.toFixed(2)}$ Change: ${(coinsInserted - currentCoffeeSum).toFixed(2)}$`);
                } else {
                    console.log(`Not enough money for coffee. Need ${(currentCoffeeSum - coinsInserted).toFixed(2)}$ more.`);
                }
                break;
            case "tea":
                let milkSum = 0;
                if(data.includes("milk")) {
                    milkSum += 0.8 + +(0.8 * 0.1).toFixed(1);
                } else {
                    milkSum += 0.8;
                }
                if(data[data.length - 1] > 0) {
                    milkSum += 0.10;
                }
                if(coinsInserted >= milkSum) {
                    totalSumEarned += milkSum;
                    console.log(`You ordered tea. Price: ${milkSum.toFixed(2)}$ Change: ${(coinsInserted - milkSum).toFixed(2)}$`);
                } else {
                    console.log(`Not enough money for tea. Need ${(milkSum - coinsInserted).toFixed(2)}$ more`);
                }
                break;
        }

    }
    console.log(`Income Report: ${totalSumEarned.toFixed(2)}$`);
}
//coffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
//    '1.00, coffee, decaf, 0']
//);
coffeeMachine(['8.00, coffee, decaf, 4', '1.00, tea, 2']);