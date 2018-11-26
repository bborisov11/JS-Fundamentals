function performOperations(numAndOperations) {
    let number = +numAndOperations[0];
    let chop =   function () {return number = number / 2};
    let dice =   function () {return number = Math.sqrt(number)};
    let spice =  function () {return number = number + 1};
    let bake =   function () {return number = number * 3};
    let fillet = function () {return number = number - number * 0.2};

    operation();

    function operation() {
        for (let i = 1; i < numAndOperations.length; i++) {
            switch (numAndOperations[i]) {
                case "chop":  console.log(chop()); break;
                case "dice":  console.log(dice()); break;
                case "spice": console.log(spice()); break;
                case "bake":  console.log(bake()); break;
                case "fillet":console.log(fillet()); break;
            }
        }
    }
}
performOperations([9, "dice", "spice", "chop", "bake", "fillet"]);