function storeCatalogue(arr) {
  let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let firstLetter = arr[i][0].toUpperCase();
        if(!map.has(firstLetter)) {
            map[firstLetter] = [];
            map.set(firstLetter, map[firstLetter].push(arr[i]));
        } else {
            map[firstLetter].push(arr[i]);
        }
    }

    Object.keys(map).map(key => {
        map[key].sort(function (a, b) {
           return a > b;
       });
        return key;
    }).sort((a, b) => a > b)
        .forEach(a =>  {
            let arr = [];
            for (let i = 0; i < map[a].length; i++) {
                let currentStr = map[a][i].split(" : ");
                arr.push("  " + currentStr[0] + ": " + currentStr[1]);
            }
            console.log(a +"\n" + arr.join("  \n"));
        });
}
storeCatalogue(['Banana : 2',
    'Rubics Cube : 5',
'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']

);