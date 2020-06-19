document.write("<h1>Shopping Cart</h1>")

//a. Price of item 1
var price1= +prompt("Price of item 1:");
document.write("Price of item 1 is" +" "+ price1);
document.write("<br>");


//b. Price of item 2
var price2=prompt("Price of item 2:");
document.write("Price of item 2 is" +" "+ price2);
document.write("<br>");


//c. Ordered Quantity of item 1
var q1= +prompt("Quantity of item 1:");
document.write("Quantity of item 1 is" +" "+ q1);
document.write("<br>");


//d. Ordered Quantity of item 2
var q2=prompt("Quantity of item 2:");
 document.write("Quantity of item 2 is" +" "+ q2);
 document.write("<br>");


//e. Shipping charges
document.write("Shipping charges are 100");
document.write("<br>");
document.write("<br>");


document.write("Total cost of your order is", + "  "+ (price1*q1)+(price2*q2)+100);