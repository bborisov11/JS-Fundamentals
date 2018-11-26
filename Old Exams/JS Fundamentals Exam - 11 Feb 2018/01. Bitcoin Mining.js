function bitCoinMining(arr) {
    let amountOfMoney = 0;
    let bitCoinCount = 0;
    let dayCounter = 0;
    let firstDayOfPurchase = 0;
    let notFoundFirstDay = true;
    for (let gold of arr) {
        let currentGold = +gold;
        dayCounter++;
        if(dayCounter % 3 === 0) {
            currentGold *= 0.70;
        }
        amountOfMoney += currentGold * 67.51;
        if(amountOfMoney >= 11949.16) {
            let amountOfBitCoins = parseInt(amountOfMoney / 11949.16);
             bitCoinCount += amountOfBitCoins;
             amountOfMoney -= 11949.16 * amountOfBitCoins;
             if(notFoundFirstDay) {
                 firstDayOfPurchase = dayCounter;
                 notFoundFirstDay = false;
             }
        }
    }
    console.log("Bought bitcoins: " + bitCoinCount);
    if(!notFoundFirstDay) {
        console.log("Day of the first purchased bitcoin: " + firstDayOfPurchase);
    }
    console.log(`Left money: ${amountOfMoney.toFixed(2)} lv.`)
}
//bitCoinMining(['100', '200', '300']);
//bitCoinMining(['50', '100']);
bitCoinMining(['3124.15', '504.212', '2511.124']);