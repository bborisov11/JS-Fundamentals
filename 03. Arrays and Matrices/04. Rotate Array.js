function rotateArray(arr) {
    let amountOfRotations = arr.pop();
    for (let i = 0; i < amountOfRotations; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    console.log(arr.join(" "));
}
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
);