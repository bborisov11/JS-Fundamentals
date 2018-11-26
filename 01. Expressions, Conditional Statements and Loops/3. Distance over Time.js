function solve(params) {
let dist1 = +params[0] * 1000 * +params[2] / 3600;
let dist2 = +params[1] * 1000 * +params[2] / 3600;

console.log(Math.abs(dist1 - dist2));
}
let array = [11, 10, 120];
solve(array);