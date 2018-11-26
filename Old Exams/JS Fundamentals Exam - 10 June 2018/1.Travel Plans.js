function travelPlans(arr) {

    let specializedProfessions = ['Programming', 'Hardware maintenance',
                                  'Cooking', 'Translating', 'Designing'];
    let averageProfessions = ['Driving', 'Managing', 'Fishing', 'Gardening'];
    let clumsyProfessions = ['Singing', 'Accounting', 'Teaching',
                            'Exam-Making', 'Acting', 'Writing',
                            'Lecturing', 'Modeling', 'Nursing'];

    let amountOfMoney = 0;
    let counterOfClumsyProfession = 0;
    let counterOfSpecializedProfession = 0;
    for (let item of arr) {
        let data = item.split(" : ");
        let profession = data[0];
        let goldOffered = +data[1];

        if(specializedProfessions.includes(profession)) {
            if(goldOffered >= 200) {
                counterOfSpecializedProfession++;
                amountOfMoney += goldOffered * 0.8;
                if(counterOfSpecializedProfession % 2 === 0) {
                    amountOfMoney += 200;
                }
            }
        } else if(averageProfessions.includes(profession)) {
            amountOfMoney += goldOffered;
        } else if(clumsyProfessions.includes(profession)) {
            counterOfClumsyProfession++;
            if(counterOfClumsyProfession % 2 === 0) {
                amountOfMoney += goldOffered * 0.95;
            } else if(counterOfClumsyProfession % 3 === 0) {
                amountOfMoney += goldOffered * 0.90;
            } else {
                amountOfMoney += goldOffered;
            }
        }
    }
    console.log("Final sum: " + amountOfMoney.toFixed(2));
    if(amountOfMoney >= 1000) {
        console.log(`Mariyka earned ${(amountOfMoney - 1000).toFixed(2)} gold more.`)
    } else {
        console.log(`Mariyka need to earn ${(1000-amountOfMoney).toFixed(2)} gold more to continue in the next task.`)
    }
}
//travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
travelPlans(["Programming : 500", "Driving : 243.55",
    "Acting : 200", "Singing : 100", "Cooking : 199",
    "Hardware maintenance : 800", "Gardening : 700",
    "Programming : 500"]);