var x = "English";
var y = "Urdu";
var z = "Maths";
var total = 100;
var totalMarks = total + total + total
var obtain1  = +prompt("write obtained marks of english");
var obtain2  = +prompt("write obtained marks of urdu");
var obtain3  = +prompt("write obtained marks of maths");
var totalObtain = obtain1 + obtain2 + obtain3
var percentage1 = (obtain1/total)*100;
var percentage2 = (obtain2/total)*100;
var percentage3 = (obtain3/total)*100;
var totalPercentage = (percentage1 + percentage2 + percentage3)/totalMarks *100

document.write("<table> <tr> <th>Subjects</th> <th>Total Marks</th> <th>Obtained marks</th> <th>Percentage</<th> </tr>  <tr><td>"+ a +"</td> <td>"+total+"</td> <td>"+obtain1+"</td> <td>"+percentage1+"%"+"</td></tr> <tr><td>"+ b +"</td> <td>"+total+"</td> <td>"+obtain2+"</td> <td>"+percentage2+"%"+"</td></tr> <tr><td>"+ c +"</td> <td>"+total+"</td> <td>"+obtain3+"</td> <td>"+percentage3+"%"+"</td></tr> <tr><td></td> <td>"+totalMarks+"</td> <td>"+totalObt+"</td> <td>"+totalPercentage+"%"+"</td></tr></table>")
