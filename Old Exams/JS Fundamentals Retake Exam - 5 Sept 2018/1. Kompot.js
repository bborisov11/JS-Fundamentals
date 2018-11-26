function kompot(fruits) {

    let countOfCherries = 0;
    let countOfCherryKompots = 0;
    let leftWeightCherries = 0;

    let countOfPeachKompots = 0;
    let countOfPeaches = 0;
    let leftWeightPeach = 0;

    let countOfPlumKompots = 0;
    let countOfPlums = 0;
    let leftWeightPlums = 0;

    let gramsFruitsLeftForRakiya = 0;

    for (let i = 0; i < fruits.length; i++) {
        let currentFruit = fruits[i].split(/\s+/)[0];
        let currentWeightInGrams = fruits[i].split(/\s+/)[1] * 1000;

        switch (currentFruit) {
            case "cherry":
                leftWeightCherries += currentWeightInGrams;
                while(leftWeightCherries >= 9) {
                    leftWeightCherries -= 9;
                    countOfCherries++;
                }
                while(countOfCherries >= 25) {
                    countOfCherries -= 25;
                    countOfCherryKompots++;
                }
                break;
            case "peach":
                leftWeightPeach += currentWeightInGrams;
                while(leftWeightPeach >= 140) {
                    leftWeightPeach -= 140;
                    countOfPeaches++;
                }
                while(countOfPeaches >= 2.5) {
                    countOfPeaches -= 2.5;
                    countOfPeachKompots++;
                }
                break;
            case "plum":
                leftWeightPlums += currentWeightInGrams;
                while(leftWeightPlums >= 20) {
                    leftWeightPlums -= 20;
                    countOfPlums++;
                }
                while(countOfPlums >= 10) {
                    countOfPlums -= 10;
                    countOfPlumKompots++;
                }
                break;
            default:
                gramsFruitsLeftForRakiya += currentWeightInGrams;
                    break;
        }
    }
    gramsFruitsLeftForRakiya = (gramsFruitsLeftForRakiya  / 5) / 1000;

    console.log("Cherry kompots: " + Math.floor(countOfCherryKompots));
    console.log("Peach kompots: " + Math.floor(countOfPeachKompots));
    console.log("Plum kompots: " + Math.floor(countOfPlumKompots));
    console.log("Rakiya liters: " + gramsFruitsLeftForRakiya.toFixed(2));
}

        kompot([ 'cherry 1.2',
            'peach 2.2',
            'plum 5.2',
            'peach 0.1',
            'cherry 0.2',
            'cherry 5.0',
            'plum 10',
            'cherry 20.0',
            'papaya 20' ]
        );


//   kompot([   'apple 6',
//          'peach 25.158',
//          'strawberry 0.200',
//          'peach 0.1',
//          'banana 1.55',
//          'cherry 20.5',
//          'banana 16.8',
//          'grapes 205.65'
//          ,'watermelon 20.54'
//      ]);