function endsWith(str, keyword) {
    if(str.endsWith(keyword)) {
        console.log(true);
    } else {
        console.log(false);
    }
}
endsWith('This sentence ends with fun?', 'fun?');