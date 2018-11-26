function decode(arr) {
    let startPoint = +arr[0];
    let endPoint = +arr[1];
    let replaceStr = arr[2];
    let text = arr[3];

    let regex = /([A-Z][a-z]+[A-Z])/;
    let match = text.match(regex);
    let country = match[1].replace(match[1].substring(startPoint, endPoint+1), replaceStr);
        country = country.replace(country[country.length - 1], country[country.length - 1].toLowerCase());

    let numberRegex = /([0-9]{3}[.0-9]*)/g;
    let numMatch;

    let city = "";
    while(numMatch = numberRegex.exec(text)) {
        let currentNum = numMatch[1];
        if(currentNum.indexOf(".") < 0) {
            city += String.fromCharCode(+currentNum);
        } else {
           city += String.fromCharCode(Math.ceil(+currentNum));
        }
    }
    city = city.replace(city[0], city[0].toUpperCase());

    console.log(`${country} => ${city}`);

}
//decode(["3", "5", "gar", "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);

decode(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"])