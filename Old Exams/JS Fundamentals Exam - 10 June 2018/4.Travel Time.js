function travelTime(arr) {
    let map = new Map();
    for (let element of arr) {
       // let [country, town, travelCost] = element.split(" > ");
        let data = element.split(" > ");
        let country = data[0];
        let town = data[1];
        let travelCost = +data[2];
        if(town[0] === town[0].toLowerCase()) {
            town = town.replace(town[0], town[0].toUpperCase());
        }

        if(!map.has(country)) {
            map.set(country, new Map());
            map.get(country).set(town, travelCost);
        } else if(!map.get(country).has(town)) {
            map.get(country).set(town, travelCost);
        } else {
            if(map.get(country).get(town) > travelCost) {
                map.get(country).set(town, travelCost);
            }
        }

    }
   let sortedCountries = Array.from(map.keys()).sort((a, b) => a.localeCompare(b));
    let result = [];
    for (let country of sortedCountries) {
        let str = "";
        str += country + " ->";
        let sortedTowns = Array
            .from(map.get(country).keys())
            .sort((a, b) => map.get(country).get(a) -  map.get(country).get(b));
        for (let town of sortedTowns) {
            str +=" " + town + " -> " + map.get(country).get(town);
        }
        result.push(str);
    }
    console.log(result.join("\n"));
}
//travelTime(["Bulgaria > Sofia > 500",
//   // "Bulgaria > Sopot > 800",
//    "France > Paris > 2000",
//    "Albania > Tirana > 1000",
//    "Bulgaria > Sofia > 200" ]
//);
travelTime(['Bulgaria > Sofia > 25000',
'aaa > Sofia > 1',
'aa > Orgrimar > 0',
'Albania > Tirana > 25000',
'zz > Aarna > 25010',
'Bulgaria > Lukovit > 10']);