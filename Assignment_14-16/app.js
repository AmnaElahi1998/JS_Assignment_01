// 1,2
var studentName = [];

// 3
var strings = ["Amna","Rumaisa"];

// 4
var numbers = ["1","2"];

// 5
var boolean = [true , false];

// 6
var mixArray = ["xyz","987", true];

// 7
var Qualifications = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil."," PhD."];
document.write ("<h1>Qualifications</h1>");
document.write ("<h2> 1)"+ Qualifications[0] +"</h2>");
document.write ("<h2> 2)"+ Qualifications[1] +"</h2>");
document.write ("<h2> 3)"+ Qualifications[2] +"</h2>");
document.write ("<h2> 4)"+ Qualifications[3] +"</h2>");
document.write ("<h2> 5)"+ Qualifications[4] +"</h2>");
document.write ("<h2> 6)"+ Qualifications[5] +"</h2>");
document.write ("<h2> 7)"+ Qualifications[6] +"</h2>");
document.write ("<h2> 8)"+ Qualifications[7] +"</h2>");

// 8
var student = ["Micheal", "John", "Tony"]

for (var i = 0; i < student.length; i++) {
    var studentMarks = [320, 230, 480]
    for (var j = 0; j < studentMarks.length; j++) {
        var percentage = studentMarks[i] * 100 / 500
    }
    document.write("Score of " + student[i] + " is " + studentMarks[i] + ". Percentage Is " + percentage + "% <br>")
}

document.write("<br>");
document.write("<br>");
document.write("<br>");


//  9
var colors = ["Red", "White", "blue", "grey"];
console.log(colors);

// 9(a)
var add_Color_start = prompt("what color he/she wants to add to the beginning");
colors.unshift(add_Color_start);

// 9(b)
var add_Color_End = prompt("what color he/she wants to add to the End");
colors.push(add_Color_End);

// 9(c)
colors.push("Pink", "Black");
console.log(colors);

// 9(d)
colors.shift();

// 9(e)
colors.pop();

// 9(f)
var del_Color_start = prompt("what color he/she wants to delete to the beginning");
colors.shift(del_Color_start);

// 9(g)
var del_Color_End = prompt("what color he/she wants to delete to the End");
colors.pop(del_Color_End);
document.write("<br>");
document.write("<br>");


// 10
document.write("<br>");
document.write("<br>");

var score = [320, 230, 420, 180]
document.write("Score of Students: " + score)
document.write("<br>");
var ascending = score.sort()
document.write("Ordered Score of students: " + ascending)


//  11
var cities = ["Karachi" , "Lahore", "Islamabad", "Quetta","Peshawar"];
document.write("<h2>Cities List: </h2>"+cities + "<br/>");
var list = cities.slice(3);
document.write("<br>");
document.write("<h2>Selected cities list: </h2>"+list);

// 12
var arr = ["This","is","my","cat"]
var st= arr.join(" ")
document.write("<h2>Array</h2>"+ arr + "<br/>")

document.write("<h2>String</h2>"+st)

// 13
var fifo = []
fifo.unshift("Keyboard")
fifo.unshift("Mouse")
fifo.unshift("printer")
fifo.unshift("monitor")
document.write("<h2>Devices</h2>"+ fifo+"</br>")
      
fifo.shift()
document.write("<h2>Method of FIFO</h2> <br/>")
document.write(fifo+ "<br/>")
fifo.shift()
document.write(fifo+ "<br/>")
fifo.shift()
document.write(fifo+ "<br/>")

// 14
var order = []
order.push("Keyboard")
order.push("Mouse")
order.push("printer")
order.push("monitor")
document.write("<h2>Devices</h2>"+ order+"</br>")
      
order.pop()
document.write("<h2>Method of order</h2> <br/>")
document.write(order+ "<br/>")
order.pop()
document.write(order+ "<br/>")
order.pop()
document.write(order+ "<br/>")


//  15
var array = ["Apple","Samsung", "Motorola","Nokia","Sony","Haier"];
document.write("<select><option>"+array[0]+"</option><option>"+array[1]+"</option><option>"+array[2]+"</option><option>"+array[3]+"</option><option>"+array[4]+"</option><option>"+array[5]+"</option></select>");

