function treasureLocator(coordinates) {
    let inside = false;

    for (let i = 0; i < coordinates.length; i+=2) {
        let x = coordinates[i];
        let y = coordinates[i+1];

        tuvalu(x, y);
        tonga(x, y);
        samoa(x, y);
        cook(x, y);
        tokelau(x, y);

        if(!inside) {
            console.log("On the bottom of the ocean");
        }
        inside = false;
    }
    function tuvalu(x, y) {
        if(x >= 1 && x <= 3 && y >= 1 && y <= 3) {
            console.log("Tuvalu");
            inside = true;
        }
    }

    function tonga(x, y) {
        if(x >= 0 && x <= 2 && y >= 6 && y <= 8) {
            console.log("Tonga");
            inside = true;
        }
    }

    function samoa(x, y) {
        if(x >= 5 && x <= 7 && y >= 3 && y <= 6) {
            console.log("Samoa");
            inside = true;
        }
    }

    function cook(x, y) {
        if(x >= 4 && x <= 9 && y >= 7 && y <= 8) {
            console.log("Cook");
            inside = true;
        }
    }

    function tokelau(x, y) {
        if(x >= 8 && x <= 9 && y >= 0 && y <= 1) {
            console.log("Tokelau");
            inside = true;
        }
    }
}
treasureLocator([0, 0]);