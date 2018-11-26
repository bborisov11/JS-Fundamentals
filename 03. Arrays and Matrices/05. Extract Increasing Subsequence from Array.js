function nonDeacreasingSubsequence(arr) {
    let index = 0;
    let sequenceArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
       if(sequenceArr[index] <= arr[i]) {
          sequenceArr.push(arr[i]);
          index++;
       }
    }
    console.log(sequenceArr.join("\n"));
}
nonDeacreasingSubsequence([20,
    3,
    2,
    15,
    6,
    1]
);