function systemComponents(arr) {
    let map = new Map();

    for (let elements of arr) {
        let data = elements.split(" | ");
        let systemName = data[0];
        let componentName = data[1];
        let subComponentName = data[2];

        if(!map.has(systemName)) {
            let secondMap = new Map();
            secondMap.set(componentName, []);
            secondMap.get(componentName).push(subComponentName);
            map.set(systemName, secondMap);
        }
        else if(!map.get(systemName).get(componentName)) {
            map.get(systemName).set(componentName, []);
            map.get(systemName).get(componentName).push(subComponentName);

        }
        else if(!map.get(systemName).get(componentName).includes(subComponentName)) {
            map.get(systemName).get(componentName).push(subComponentName);
        }
    }

      let orderedKeys =  Array.from(map.keys())
            .sort((a, b) =>
                map.get(b).size - map.get(a).size || a > b);

    for (let key of orderedKeys) {
        console.log(key);
       let orderedNestedKeys = Array.from(map.get(key)
           .keys())
           .sort((a, b) => map.get(key).get(b).length - map.get(key).get(a).length);

        for (let secKey of orderedNestedKeys) {
            console.log("|||" + secKey);
            for (let item of map.get(key).get(secKey)) {
                console.log("||||||" + item);
            }
        }
    }
}
systemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
);