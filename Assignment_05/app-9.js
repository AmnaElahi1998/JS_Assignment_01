var Dollar = 104.80;
var Riyal = 28;

var amount1 = +prompt("Enter Dollar:");
var amount2 = +prompt("Enter Riyal:");

var pkr1 = amount1 * Dollar;
var pkr2 = amount2 * Riyal;

var total = pkr1 + pkr2;
document.write("<br>")
document.write("Total Currency in PKR: " + total)