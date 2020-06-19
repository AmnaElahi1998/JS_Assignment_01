var x = 5;
var y = +prompt("Guess the secret number:");
if(y == x)
{
    alert("Bingo!!! Correct answer...");
}
else if(y == ++x)
{
    alert("Close enough to the correct answer");
}
else
{
    alert("Oopss!!! Sorry try Again.....")
}