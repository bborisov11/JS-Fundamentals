function wordOccurrences(str, keyword) {
    let reg = "\\b" + keyword + "\\b";
 let regex = new RegExp(reg, "ig");

 let match;
 let counter = 0;

 while(match = regex.exec(str)) {
     counter++;
 }
console.log(counter);
}

wordOccurrences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.',
    'there'
);