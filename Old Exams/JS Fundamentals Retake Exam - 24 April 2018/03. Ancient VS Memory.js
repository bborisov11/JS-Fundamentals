function ancientVsMemory(arr) {
    let data = arr.join(" ").split("32656 19759 32763 0 ").filter(x => x !== "");
    let stringArr =[];
    for (let i = 0; i < data.length; i++) {
        let currentStr = data[i].split(" ");
        let strLength = +currentStr[0];
        let str = currentStr.splice(2, strLength);
        let currentWord = "";
        str.forEach(x => currentWord += String.fromCharCode(x));
        stringArr.push(currentWord)
    }
    console.log(stringArr.join("\n"));
}
ancientVsMemory(['32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0'
]);
//ancientVsMemory(['0']);