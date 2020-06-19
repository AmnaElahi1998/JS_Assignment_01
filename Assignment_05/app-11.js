document.write("<h1>Age Calculator</h1>")

var CurrentYear = +prompt("Enter Current year: ");
document.write("Current Year: " + CurrentYear);
document.write("<br>");

var BirthYear = +prompt("Enter Birth year: ");
document.write("Birth Year: " + BirthYear);
document.write("<br>");

var Age;
Age = CurrentYear - BirthYear
document.write("Your Age is: " + Age);