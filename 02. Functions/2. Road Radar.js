function roadRadar([km,area]) {

    switch (area) {
        case "city":
            if(km > 50 && km <= 70) {
                console.log("speeding");
            } else if(km >= 70 && km <= 90) {
                console.log("excessive speeding");
            } else if(km > 90) {
                console.log("reckless driving");
            }
            break;
        case "motorway":
            if(km > 130 && km <= 150) {
                console.log("speeding");
            } else if(km >= 150 && km <= 170) {
                console.log("excessive speeding");
            } else if(km > 170) {
                console.log("reckless driving");
            }
            break;
        case "interstate":
            if(km > 90 && km <= 110) {
                console.log("speeding");
            } else if(km >= 110 && km <= 130) {
                console.log("excessive speeding");
            } else if(km > 130) {
                console.log("reckless driving");
            }
            break;
        case "residential":
            if(km > 20 && km <= 40) {
                console.log("speeding");
            } else if(km >= 40 && km <= 60) {
                console.log("excessive speeding");
            } else if(km > 60) {
                console.log("reckless driving");
            }
            break;
    }
}
roadRadar([50, "motorway"]);