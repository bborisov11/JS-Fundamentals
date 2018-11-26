function f1Championship(arr) {
 let f1Info = {};

    for (let item of arr) {
        let teamInfo = item.split(" -> ");
        let teamName = teamInfo[0];
        let pilot = teamInfo[1];
        let pilotPoints = +teamInfo[2];

        if(!f1Info.hasOwnProperty(teamName)) {
            f1Info[teamName] = {};
            f1Info[teamName][pilot] = +pilotPoints;
        } else {
            if(f1Info[teamName].hasOwnProperty(pilot)) {
                f1Info[teamName][pilot] += pilotPoints;
            } else {
                f1Info[teamName][pilot] = pilotPoints;
            }
        }
    }
    let keys = Object.keys(f1Info);
    keys.sort(function (a, b) {
        return getSum(f1Info[b]) - getSum(f1Info[a]);
    });
    let count = 0;
    for (let items of keys) {
        count++;
        if(count > 3) {
            break;
        }
        let sum = getSum(f1Info[items]);
        console.log(items + ": " + sum);
        for (let item of Object.keys(f1Info[items]).sort(function (a,b) {
            return f1Info[items][b] - f1Info[items][a];
        })) {
            console.log("-- " + item + " -> " + f1Info[items][item])
        }
    }

    function getSum(map) {
        let sum = 0;
        for (let item of Object.keys(map)) {
            sum += +map[item];
        }
        return sum;
    }
}
f1Championship(["Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4"]
);