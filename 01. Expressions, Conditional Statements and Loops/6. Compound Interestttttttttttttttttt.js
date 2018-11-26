function solve(params) {
    let principalSum = params[0];
    let normalRate = params[1];
    let frequency = params[2];
    let overallTimeLength = params[3];

    let answer = principalSum *
        Math.pow(1 + normalRate / 100 / frequency, frequency * overallTimeLength);
    console.log(answer);
}
let x = [100000, 5, 12, 25];
solve(x);