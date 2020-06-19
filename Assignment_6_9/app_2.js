var a = 2, b = 1;
var result;


document.write("a is " + a);
document.write("<br>");
document.write("b is " + b);

document.write("<br>");


result = --a;
document.write("--a;  " +result);
document.write("<br>");

result = result - --b;
document.write("--a   -   --b;  " +result);
document.write("<br>");

result = result + ++a;
document.write("--a   -   --b   +   ++b;  " +result);
document.write("<br>");

result = result + b--;
document.write("--a  -  --b   +   ++b   +   b--;  " +result);
document.write("<br>");
document.write("<br>");


document.write("Result is ");
