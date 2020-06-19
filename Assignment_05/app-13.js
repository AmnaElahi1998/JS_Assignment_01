document.write("<h1> The Lifetime Supply Calculator</h1>")

var favSnack = prompt("What is your favorite Snack:")
var currentAge = +prompt("What is your current age:")
var maxAge = +prompt("Enter the maximum age:")
var amount = +prompt("How many snacks you take per day")

var total = (maxAge - currentAge) * 365 * amount

document.write("Favorite Snack: " + favSnack + "<br>")
document.write("Current Age: " + currentAge + "<br>")
document.write("Estimated Maximum Age: " + maxAge + "<br>")
document.write("Amount of snack per day: " + amount + "<br>")
document.write("" + "<br>")
document.write("You will need " + total +  " " + favSnack + " to last you until the ripe old age of " + maxAge + "<br>")