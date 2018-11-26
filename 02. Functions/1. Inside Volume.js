function insideVolume(volume) {
    let x1 = 10, x2 = 50;
    let y1 = 20, y2 = 80;
    let z1 = 15, z2 = 50;

    for (let i = 0; i < volume.length; i += 3) {
        if(isInside(volume[i],volume[i+1],volume[i+2])) {
            console.log("inside");
        } else {
            console.log("outside");
        }
        function isInside(x,y,z) {
            if(x >= x1 && x <= x2) {
                if(y >= y1 && y <= y2) {
                    if(z >= z1 && z <= z2) {
                       return true;
                    }
                }
            }
            return false;
        }
    }
}
insideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
);