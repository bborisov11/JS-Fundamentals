function captureTheNumbers(arr) {
    let regex = /([0-9]+)/g;
    let result = [];
    for (let str of arr) {
        let match = str.match(regex);
        if(match) {
            for (let i = 0; i < match.length; i++) {
                result.push(match[i]);
            }
        }
    }
    console.log(result.join(" "));
}
captureTheNumbers(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']
);