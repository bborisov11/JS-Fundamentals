function allVariablesInSentence(str) {
    let regex = /\b_([0-9A-Za-z]+\b)/g;
    let match;
    let result = [];

    while(match = regex.exec(str)) {
        result.push(match[1]);
        //console.log(match);
    }
    console.log(result.join(","))
}
allVariablesInSentence('The _id_asd and _age variables are both integers.');