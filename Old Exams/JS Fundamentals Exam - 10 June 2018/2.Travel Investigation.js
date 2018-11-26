function travelInvestigation(arr) {
    let companies = arr[0].split(arr[1]);

    for (let i = 0; i < companies.length; i++) {
        let currentCompany = companies[i];
        companies[i] = ".*" + currentCompany + ".*";
    }
    let sentences = arr.splice(2, arr.length);
    let validSentences = [];
    let invalidSentences = [];

    for (let sentence of sentences) {
        let contains = true;
        for (let regex of companies) {
            let reg = new RegExp(regex,"gi");
            if(!reg.test(sentence)) {
               contains = false;
               break;
            }
        }
        if(contains) {
            validSentences.push(sentence.toLowerCase());
        }else {
            invalidSentences.push(sentence.toLowerCase());
        }
    }

    let counter = 1;
    if(validSentences.length > 0) {
        console.log("ValidSentences");
    }
    for (let sentence of validSentences) {
        console.log(`${counter++}. ${sentence}`)
    }
    if(invalidSentences.length > 0) {
        counter = 1;
        if(validSentences.length > 0) {
            console.log("==============================");
        }
        console.log("InvalidSentences")
    }
    for (let sentence of invalidSentences) {
        console.log(`${counter++}. ${sentence}`)
    }
}
//travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
//    "@,",
//    "Mincho  e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
//    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
//    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
//);
travelInvestigation(["bulgariatour=>, minkatrans=>, koftipochivkaltd=>, parinavqturaood",
    "=>,",
    "parinavqturaood e KoftiPochivkaLTD det tui  ve onui minkatrans bulgariatour",
    "dqdo bulgariatour KoftiPochivkaLTD regexsux but is parinavqturaood MinkaTrans",
    "bulgariatour KOFTIPOCHIVKAlTD as parinavqturaood and MinkATRANs"]);