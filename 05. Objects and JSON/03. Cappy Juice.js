function cappyJuice(arr) {

    let data = [];
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i].split(" => ");
        let currentFruit = currentElement[0];
        let quantity = +currentElement[1];

        if(data.hasOwnProperty(currentFruit)) {
            data[currentFruit]+= quantity;
        } else {
            data[currentFruit] = quantity;
        }
        if(data[currentFruit] >= 1000) {
            result[currentFruit] = data[currentFruit];
        }
    }

    for (let element of Object.keys(result)) {
        console.log(element + " => " + (result[element] / 1000 - result[element] / 1000 % 1));
    }
}
cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);