function template(xmlData) {
    let xmlText = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
        "<quiz>\n";
   let text = function() {
        let questsAnswers = "";
        for (let i = 0; i < xmlData.length; i += 2) {
            questsAnswers += "  <question> \n";
            questsAnswers += "    " + xmlData[i] + "\n";
            questsAnswers += "  </question> \n";

            questsAnswers += "  <answer> \n";
            questsAnswers += "    " + xmlData[i+1] + "\n";
            questsAnswers += "  </answer> \n";
        }
        return questsAnswers;
    };
   xmlText += text();
    xmlText += "</quiz>";
    console.log(xmlText);

}
template(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);