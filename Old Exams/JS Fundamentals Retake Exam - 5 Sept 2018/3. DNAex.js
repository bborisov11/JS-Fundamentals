function dNAex(arr) {
    let regex = /^([!@#$?a-z]+)=([0-9]+)--([0-9]+)<<([a-z]+)$/;
    let output = {};
    for (let str of arr) {
        let match = regex.exec(str);
        if(match) {
            let nameOfGene = match[1]
                .split("")
                .filter(x => x >= "a" && x <= "z");
           if(nameOfGene.length === +match[2]) {
               if(!output.hasOwnProperty(match[4])) {
                   output[match[4]] = +match[3];
               } else {
                   output[match[4]]+= +match[3];
               }
           }
        }
    }

    let keys = Object.keys(output);

    keys.sort(function (a, b) {
        return output[b] - output[a];
    });

    for (let item of keys) {
        console.log(`${item} has genome size of ${output[item]}`);
    }
}
dNAex(["!@ab?si?di!a@=7--152<<human",
"b!etu?la@=6--321<<dog",
"!curtob@acter##ium$=14--230<<dog",
"!some@thin@g##=9<<human",
"Stop!"]);