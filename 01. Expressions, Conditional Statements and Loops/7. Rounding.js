function solve(params) {
    let number = params[0];
    let precision = params[1];
        precision = Number(precision);
        if(precision > 15) {
            precision = 15;
        }

        number = Number(number).toFixed(precision);
        console.log(Number(number));

}
let x = [3.18, 3];
solve(x);