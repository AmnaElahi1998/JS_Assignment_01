 
 var x = +prompt("Enter first integer:");
 var y = +prompt("Enter second integer:");

if (x > 0 && y > 0 && x > y) 
{
    document.write("The larger number is " + x );
}
else if (x > 0 && y > 0 && x < y) {
    document.write("The larger number is " + y);
}
else if (x === y && x > 0 && y > 0) {
    document.write("Both numbers are equal!");   
} 
else 
{
    document.write("Please try again!");
  
}
