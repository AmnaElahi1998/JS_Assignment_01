

var num = +prompt("Enter a number");
if(num != 5)
{
    for(i=1; i<=10; i++)
    {
        document.write(num + " " + "x" + " " + i + " " + "=" + " " + i*num);
        document.write("<br>");
    }
    
}
else
{
    num=5;
    for(i=1; i<=10; i++)
    {
        document.write(num + " " + "x" + " " + i + " " + "=" + " " + i*num);
        document.write("<br>");
    }
    

}