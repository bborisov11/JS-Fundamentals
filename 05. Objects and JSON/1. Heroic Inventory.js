function heroicInventory(arr) {
    let dataArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElements = arr[i].split(" / ");
        let items = [];
        if(currentElements.length > 2) {
             items = currentElements[2].split(", ");
        }
        let heroObj = {
            name : currentElements[0],
            level : +currentElements[1],
            items : items
        };
        dataArr.push(heroObj);
    }
    console.log(JSON.stringify(dataArr));
}
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']
);