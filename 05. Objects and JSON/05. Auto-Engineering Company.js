function autoEngCompany(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let data = arr[i].split(" | ");

        let carBrand = data[0];
        let carModel = data[1];
        let producedCars = +data[2];

        if(!map.has(carBrand)) {//
            let secondMap = new Map();
            secondMap.set(carModel, producedCars);
            map.set(carBrand, secondMap);
        } else if(!map.get(carBrand).has(carModel)) {
            map.get(carBrand).set(carModel, producedCars);
        } else {
            map.get(carBrand).set(carModel, map.get(carBrand).get(carModel) + producedCars);
        }
    }
    for (let [key,values] of map) {
        console.log(key);
        for (let [model, totalSold] of values) {console.log(`###${model} -> ${totalSold}`);
        }
    }
}
//function autoEngCompany(arr) {
//    let map = new Map();
//
//    for (let i = 0; i < arr.length; i++) {
//        let data = arr[i].split(" | ");
//
//        let carBrand = data[0];
//        let carModel = data[1];
//        let producedCars = +data[2];
//
//        if(!map.has(carBrand)) {
//            map[carBrand] = new Map();
//            map.set(carBrand, new Map());
//            map[carBrand][carModel] = producedCars;
//        } else if(!map[carBrand].hasOwnProperty(carModel)) {
//            map[carBrand][carModel] = producedCars;
//        } else {
//            map[carBrand][carModel] += producedCars;
//        }
//    }
//    for (let key of Object.keys(map)) {
//        console.log(key);
//        for (let item of Object.keys(map[key])) {
//            console.log(`###${item} -> ${map[key][item]}`);
//        }
//    }
//}
autoEngCompany(['Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200']
);