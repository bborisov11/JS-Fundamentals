function resolve(a) {
    let param = 360 / 400;

    let answer = 0;
    if(a === 400) {
        answer = 0;
    }
    else if(a > 360) {
        answer = (a * param % 360);
    }
    else if(a < 0) {
        answer = 360 + a * param;
    } else {
        answer = a * param;
    }
    console.log(answer);
}
resolve(-50);