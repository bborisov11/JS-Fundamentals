function wareHouseMachine(arr) {
    let map = new Map();
    for (let element of arr) {
        let data = element.split(", ");
        let command = data[0];
        let nameOfBrand = data[1];
        let coffeeName = data[2];
        let expireDate = data[3];
        let quantity = +data[4];
        let expireDateAndQuantity = expireDate + "," + quantity;
        switch (command) {
            case "IN":
                if (!map.has(nameOfBrand)) {
                    map.set(nameOfBrand, new Map());
                    map.get(nameOfBrand).set(coffeeName, expireDateAndQuantity);
                } else if (!map.get(nameOfBrand).has(coffeeName)) {
                    map.get(nameOfBrand).set(coffeeName, expireDateAndQuantity);
                } else if (map.get(nameOfBrand).get(coffeeName).split(",")[0] < expireDate) {
                    map.get(nameOfBrand).set(coffeeName, expireDateAndQuantity);
                } else if (map.get(nameOfBrand).get(coffeeName).split(",")[0] === expireDate) {
                    map.get(nameOfBrand).set(coffeeName, expireDate + "," + quantity);
                }
                break;
            case "REPORT":
                console.log(">>>>> REPORT! <<<<<");
                let keys = map.keys();
                for (let firstKey of keys) {
                    console.log(`Brand: ${firstKey}:`);
                    let secondKeys = map.get(firstKey).keys();
                    for (let secondKey of secondKeys) {
                        console.log(`-> ${secondKey} -> ${map.get(firstKey).get(secondKey).split(",")[0]} -> ${map.get(firstKey).get(secondKey).split(",")[1]}.`);
                    }
                }
                break;
            case "INSPECTION":
                console.log(">>>>> INSPECTION! <<<<<");
                let sortedKeys = Array.from(map.keys()).sort((a, b) => a.localeCompare(b));

                for (let firstKey of sortedKeys) {
                    let sortedKeys = Array.from(map.get(firstKey).keys())
                        .sort((a, b) =>
                            map.get(firstKey).get(b).split(",")[1] - map.get(firstKey).get(a).split(",")[1]);
                    console.log(`Brand: ${firstKey}:`);
                    for (let secondKey of sortedKeys) {
                        console.log(`-> ${secondKey} -> ${map.get(firstKey).get(secondKey).split(",")[0]} -> ${map.get(firstKey).get(secondKey).split(",")[1]}.`);
                    }

                }
                break;
            case "OUT":
                if (map.has(nameOfBrand) && map.get(nameOfBrand).has(coffeeName)) {
                        if(map.get(nameOfBrand).get(coffeeName).split(",")[0] > expireDate) {
                            if (map.get(nameOfBrand).get(coffeeName).split(",")[1] >= quantity) {
                                let newQuantity = +map.get(nameOfBrand).get(coffeeName).split(",")[1] - quantity;
                                map.get(nameOfBrand)
                                    .set(coffeeName, map.get(nameOfBrand).get(coffeeName).split(",")[0] + "," + newQuantity);
                            }
                        }
                }
        }
    }
}
wareHouseMachine([
        "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
        "IN, Folgers, Black Silk, 2023-03-01, 14",
        "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
        "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
        "IN, Folgers, Black Silk, 2022-01-01, 10",
        "IN, Lavazza, Intenso, 2022-07-19, 20",
        "OUT, Dallmayr, Espresso, 2022-07-19, 5",
        "OUT, Dallmayr, Crema, 2022-07-19, 5",
        "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
        "REPORT",
        "INSPECTION",
    ]
);