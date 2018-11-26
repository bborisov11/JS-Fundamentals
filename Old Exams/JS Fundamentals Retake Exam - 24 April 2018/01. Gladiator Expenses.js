function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let totalExpenses = 0;
    let brokenHelmet = false;
    let brokenSword = false;
    let countOfBrokenShields = 0;

    for (let i = 1; i <= lostFightsCount; i++) {

            if(i % 2 === 0) {
                totalExpenses += helmetPrice;
                brokenHelmet = true;
            }
            if(i % 3 === 0) {
                totalExpenses += swordPrice;
                if(brokenHelmet) {
                    brokenSword = true;
                }
            }
            if(brokenHelmet && brokenSword) {
                totalExpenses += shieldPrice;
                countOfBrokenShields++;
            }
            if(countOfBrokenShields === 2) {
                totalExpenses += armorPrice;
                countOfBrokenShields = 0;
            }
            brokenHelmet = false;
            brokenSword = false;
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
//gladiatorExpenses([7, 2, 3, 4, 5]);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);