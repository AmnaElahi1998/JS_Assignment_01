
  var celsiusTempreture = +prompt("Enter Celsius Temperature:");
  var celToFahr = celsiusTempreture * 9 / 5 + 32;
  var calculateTemp1 = celsiusTempreture+'\xB0C is ' + celToFahr+ ' \xB0F.';
  document.write(calculateTemp1);

  document.write("<br>");

  var fahrenheitTempreture = +prompt("Enter Fahrenheit Temperature:");
  var fahrToCel = (fahrenheitTempreture - 32) * 5 / 9;
  var calculateTemp2 = fahrenheitTempreture+ '\xB0F is ' + fahrToCel + '\xB0C.';
  document.write(calculateTemp2); 
 


