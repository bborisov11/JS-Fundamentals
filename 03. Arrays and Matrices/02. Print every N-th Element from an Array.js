function everyNthElement(arr) {
    let nthElement = +arr.pop();
    for (let i = 0; i < arr.length; i+=nthElement) {
            console.log(arr[i]);
    }
}
everyNthElement(['1',
    '2',
    '3',
    '4',
    '5',
    '6']
);