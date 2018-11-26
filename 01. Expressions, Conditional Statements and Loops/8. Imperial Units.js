function resolve(inches) {
    let feet = 0;

    while(inches >= 12) {
        feet++;
        inches-=12;
    }
    console.log(feet + "'-" + inches +"\"");
}
resolve(11);