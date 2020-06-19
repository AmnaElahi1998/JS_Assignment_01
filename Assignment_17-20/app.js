// 1
var array = [
    [],
    [],
    [],
    [],
    []
];

//  2
var multidimensionalArray = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];

//  3
for(var i=1; i<=10; i++)
{
    document.write(i + "<br>");
}
document.write("<br>");

// 4
var num = +prompt("Enter a number to show its multiplication table ");
var len = +prompt("Enter length multiplication table ");
document.write("<h5>Multiplication table of </h5> " + " " + num );
document.write("<br>");
document.write("<h5>Length </h5>" + " " + len );

for(var i=num ; i< len.length; i++)
{
    document.write(num + " X " + "<br>");
}

// 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
    document.write("<br>");

}

for (var i = 0; i < fruits.length; i++) {
    console.log("Element at index " + i + " is " + fruits[i])
    document.write("<br>");

}

// 6
//a
document.write("<b>Counting</b>");
document.write("<br>")
for(var i = 1; i<= 15; i++)
{
    document.write(i, "<br>");
}


//b
document.write("<b>Reverse Counting</b>");
document.write("<br>")
for(var i = 10; i>= 10; i--)
{
    document.write(i, "<br>");
}

//c
document.write("<b>Even</b>");
document.write("<br>")
for(var i = 0; i<= 20; i+2)
{
    document.write(i, "<br>");
}


//d
document.write("<b>Odd</b>");
document.write("<br>")
for(var i = 1; i<= 19; i+2)
{
    document.write(i, "<br>");
}

//e
document.write("<b>Series</b>");
document.write("<br>")
for(var i = 0; i<= 20; i+2)
{
    document.write(i + "K" + "<br>");
}

// 7
alert("Welcome to ABC Bakery.")
var item = ["cake", "apple pie", "cookie", "chips", "patties"]
var inputCart = prompt("What do you want to order sir/ma'am?")
var isFound = false

for (i = 0; i < item.length; i++) {
    if (inputCart === item[i]) {
        alert(inputCart + " is available at index " + i + " in our bakery")
        isFound = true
        break
    }
}
if (isFound === false) {
    alert("We are sorry. " + inputCart + " is not availabale")
}

// 8
var arr = [24, 53, 78, 91, 12]

console.log("Array items: " + arr)
document.write("<br>")
arr = arr.sort()
console.log("The largest number is: " + arr[arr.length - 1])

// 9
var arr = [24, 53, 78, 91, 12]

console.log("Array items: " + arr)
document.write("<br>")
arr = arr.sort.reverse()
console.log("The largest number is: " +arr[arr.length - 1])


// 10
for(var i=5; i<=100; i+5)
{
    document.write(i + "<br>");
}