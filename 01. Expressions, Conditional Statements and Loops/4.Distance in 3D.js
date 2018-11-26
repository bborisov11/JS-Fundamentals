function solve(params) {
    let firstX = params[0];
    let firstY = params[1];
    let firstZ = params[2];

    let secondX = params[3];
    let secondY = params[4];
    let secondZ = params[5];

    let answer = Math.sqrt(
        Math.abs(firstX - secondX) * Math.abs(firstX - secondX) +
        Math.abs(firstZ - secondZ) * Math.abs(firstZ - secondZ) +
        Math.abs(firstY - secondY) * Math.abs(firstY - secondY));
    console.log(answer);
}
let x = [1, 1, 0, 5, 4, 0];
solve(x);