var x = +prompt("Enter Your English Marks:");
var y = +prompt("Enter Your Urdu Marks:");
var z = +prompt("Enter Your Maths Marks:");

var total = 300;
var obtained = x + y + z;
var percentage = (obtained/total)*100;

document.write("Total marks:"+ " " +total + "<br>");
document.write("Marks Obtained"+ " " +obtained + "<br>");
document.write("Percentage"+ " " +percentage+ "<br>");

if(percentage >= 80)
{
    document.write("Grade is A-one </br> Remarks: Excellent");
}
else if(percentage >= 70)
{
    document.write("Grade is A </br> Remarks: Good");
}
else if(percentage >= 60)
{
    document.write("Grade is B </br> Remarks: You Need To Improve");
}
else(percentage < 60)
{
    document.write("Grade is Fail </br> Remarks: Sorry");
}