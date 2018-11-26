function arenaTier(arr) {
    let map = new Map();
    for (let elements of arr) {
        if(elements === "Ave Cesar") {
            break;
        }
        if(elements.indexOf(" -> ") > -1) {
            let data = elements.split(" -> ");

            let gladiator = data[0];
            let technique = data[1];
            let skill = +data[2];

            if(!map.has(gladiator)) {
                map.set(gladiator, new Map());
                map.get(gladiator).set(technique, skill);
            } else if(!map.get(gladiator).has(technique)) {
                map.get(gladiator).set(technique, skill);
            } else if(map.get(gladiator).get(technique) < skill) {
                map.get(gladiator).set(technique, skill);
            }
        } else {
            let data = elements.split(" vs ");
            if(map.has(data[0]) && map.has(data[1])) {
                let firstGladiatorTechniques = Array.from(map.get(data[0]).keys());
                let secondGladiatorTechniques = Array.from(map.get(data[1]).keys());

                for (let technique of firstGladiatorTechniques) {
                    if(secondGladiatorTechniques.includes(technique)) {
                        let totalSumOfFirstGladiator = totalSum(data[0]);
                        let totalSumOfSecondGladiator = totalSum(data[1]);

                        if(totalSumOfFirstGladiator > totalSumOfSecondGladiator) {
                            map.delete(data[1]);
                        } else if(totalSumOfSecondGladiator > totalSumOfFirstGladiator) {
                            map.delete(data[0]);
                        }
                        break;
                    }
                }
            }
        }
    }

    let sortedKeys = Array.from(map.keys())
        .sort((a, b) => totalSum(b) - totalSum(a) || a.localeCompare(b));

    for (let gladiatorKey of sortedKeys) {
        console.log(`${gladiatorKey}: ${totalSum(gladiatorKey)} skill`);
       let sortedTechniqueKeys = Array.from(map.get(gladiatorKey).keys())
           .sort((a, b) => map.get(gladiatorKey).get(b) - map.get(gladiatorKey).get(a) ||
           a.localeCompare(b));
        for (let techniqueKey of sortedTechniqueKeys) {
            console.log(`- ${techniqueKey} <!> ${map.get(gladiatorKey).get(techniqueKey)}`);
        }
    }

    function totalSum(gladiator) {
        let totalSkill = 0;
        Array.from(map.get(gladiator).keys())
            .forEach(x => totalSkill += map.get(gladiator).get(x));
        return totalSkill;
    }
}
      //  arenaTier(['Pesho -> BattleCry -> 400',
      //      'Gosho -> PowerPunch -> 300',
      //      'Stamat -> Duck -> 200',
      //     'Stamat -> Tiger -> 250',
      //      'Ave Cesar']);
        arenaTier(['Pesho -> Duck -> 400',
            'Julius -> Shield -> 150',
            'Gladius -> Heal -> 200',
            'Gladius -> Support -> 250',
            'Gladius -> Shield -> 250',
            'Pesho vs Gladius',
            'Gladius vs Julius',
            'Gladius vs Gosho',
            'Ave Cesar'
        ]);