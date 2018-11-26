function addAndRemoveElement(arr) {
    let initialNumber = 0;
    let numArr = [];
    for (let command of arr) {
        initialNumber++;
        if(command === "add") {
            numArr.push(initialNumber);
        }
        else if(command === "remove") {
            numArr.pop();
        }
    }
    if(numArr.length === 0) {
        console.log("Empty");
    } else {
        console.log(numArr.join('\n'));
    }
}
addAndRemoveElement(['remove',
    'remove',
    'remove']
);