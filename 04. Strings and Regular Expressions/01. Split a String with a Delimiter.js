function splitWithDelimiter(str, delimiter) {
    let arr = str.split(delimiter);

    for (let element of arr) {
        console.log(element);
    }
}
splitWithDelimiter('One-Two-Three-Four-Five', '-');