
document.write("Table of 4");
document.write("<br>")

var num = +prompt("Enter a number");
for(i=1; i<=10; i++)
{
    document.write(num + " " + "x" + " " + i + " " + "=" + " " + i*num);
    document.write("<br>");
}