function sortAnArrayByTwoCriteria(arr) {
    arr.sort(function (a, b) {
     if(a.length > b.length) {
         return 1;
     } else if(b.length > a.length) {
         return -1;
     }
     if(a > b) {
         return 1;
     }
     else if(b > a) {
         return -1;
     }
     return 0;
    });
    console.log(arr.join("\n"));
}
sortAnArrayByTwoCriteria(['test',
    'Deny',
    'omen',
    'Default']
);