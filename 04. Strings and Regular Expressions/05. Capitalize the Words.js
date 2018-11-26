function capitalizeWords(str) {
    let arr = str.split(/\s+/);

    for (let i = 0; i < arr.length; i++) {

        let currentWord = arr[i].substr(1, arr[i].length - 1);
        arr[i] = arr[i][0].toUpperCase()
            + currentWord.toLowerCase();
    }
    console.log(arr.join(" "));
}
capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');