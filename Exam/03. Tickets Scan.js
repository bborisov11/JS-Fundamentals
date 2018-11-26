function ticketScan(str,print) {
    let passengerRegex = /[A-Z][a-zA-Z]*-([A-Z][a-zA-Z]*\.-[A-Z][A-Za-z]*|[A-Z][A-Za-z]*)/;
    let airPortRegex = /[A-Z]{3}\/[A-Z]{3}/;
    let flightNumberRegex = / [A-Z]{1,3}[0-9]{1,5} /;
    let companyRegex = /- [A-Z][a-zA-Z]*\*[A-Z][a-zA-Z]* /;

    let passengerMatch = passengerRegex.exec(str)[0];
    let airPortMatch = airPortRegex.exec(str);
    let flightNumberMatch = flightNumberRegex.exec(str)[0];
    let companyMatch = companyRegex.exec(str)[0];

    if(print === "name") {
        console.log(`Mr/Ms,${passengerMatch.replace("-", " ")}, have a nice flight!`);
    } else if(print === "flight") {
        console.log(`Your flight number ${flightNumberMatch.trim()} is from ${airPortMatch[0].split("/")[0]} to ${airPortMatch[0].split("/")[1]}.`);
    } else if(print === 'company') {
        console.log(`Have a nice flight with ${companyMatch.replace("*", " ").replace("-", "").trim()}.`);
    }else if(print === "all") {
        console.log(`Mr/Ms, ${passengerMatch.replace("-", " ")}, your flight number ${flightNumberMatch.trim()} is from ${airPortMatch[0].split("/")[0]} to ${airPortMatch[0].split("/")[1]}. Have a nice flight with ${companyMatch.replace("*", " ").replace("-", "").trim()}.`);
    }
}
ticketScan('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 'all');