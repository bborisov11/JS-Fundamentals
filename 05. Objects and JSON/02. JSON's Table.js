function jsonTable(arr) {
//String.prototype.htmlEscape = function () {
//  return this.replace(/&/g, '&amp;')
//      .replace(/</g, '&lt;')
//      .replace(/>/g, '&gt;')
//      .replace(/"/g, '&quot;')
//      .replace(/'/g, '&#39;');
//};

    arr = arr.map(x => JSON.parse(x));

    console.log("<table>");

    for (let i = 0; i < arr.length; i++) {
        console.log("    <tr>");
        console.log("       <td>" + arr[i].name + "</td>");
        console.log("       <td>" + arr[i].position + "</td>");
        console.log("       <td>" + arr[i].salary + "</td>");
        console.log("   <tr>");
    }
    console.log("</table>");
}
jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);