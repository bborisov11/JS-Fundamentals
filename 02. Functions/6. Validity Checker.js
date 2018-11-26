function validityChecker(coordinates) {
    let x1 = coordinates[0];
    let y1 = coordinates[1];
    let x2 = coordinates[2];
    let y2 = coordinates[3];

    console.log(checkCoordinates(x1,y1,0,0));
    console.log(checkCoordinates(x2,y2,0,0));
    console.log(checkCoordinates(x1,y1,x2,y2));

    function checkCoordinates(x1,y1,x2,y2) {
        let distanceX = Math.abs(x1 - x2);
        let distanceY = Math.abs(y1 - y2);

        if(Math.sqrt(distanceX * distanceX + distanceY * distanceY)%1 === 0) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        }
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }
}
validityChecker([2, 1, 1, 1]);