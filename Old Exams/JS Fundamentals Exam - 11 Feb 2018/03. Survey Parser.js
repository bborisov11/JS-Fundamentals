function surveyParser(str) {
    let labelRegex = /<svg><cat><text>.*\[(.*)\]<\/text><\/cat>/;
    let label = labelRegex.exec(str)[1];
    //let secondPart = str.split(labelRegex)[1];

    let sumOfRatings = 0;
    let voteCount = 0;

    let ratingRegex = /<cat><g><val>([0-9]+)<\/val>([0-9]+)<\/g>/;
    let match = str.match(ratingRegex);
        if(match) {

        }
     //   while(match = ratingRegex.exec(str)) {
     //       voteCount += +match[2];
     //       sumOfRatings += +match[1] * +match[2];
     //   }
    console.log(label + ": " + (sumOfRatings/voteCount).toFixed(2));
}
surveyParser("<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>");