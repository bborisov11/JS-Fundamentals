function modifyAverage(num) {
    while(avg() <= 5) {
        num += "9";
    }
    console.log(num);

    function avg() {
        let sum = 0;
        let length = num.toString().length;
        for (let i = 0; i < length; i++) {
            sum += +num.toString()[i];
        }
        return sum/length;
    }
}
modifyAverage(5835);