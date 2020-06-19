var num1 = +prompt("Enter first number: ");
var num2=+prompt("Enter second number: ");
var op = prompt("Enter operator: ");

if(op == "+")
{
    document.write("Sum:  ", + num1 + num2);
}

else if(op == "-")
{
    document.write("Difference:  ", + num1 - num2);
}

else if(op == "*")
{
    document.write("Product:  ", + num1 * num2);
}

else if(op == "/")
{
    document.write("Division:  ", + num1 / num);
}