//chapter 5 Q:1
var num = "sum of 2 and 2 is : "
var addition = 2 + 2
document.write(num + addition + "<br>")

//  Q:2
var num = "subtraction of 2 and 2 is:"
var subtraction = 2 - 2
document.write(num + subtraction + "<br>")

var num = "divison of 2 and 2 is:"
var divison = 2 / 2
document.write(num + divison + "<br>")

var num = "multiplication of 2 and 2 is:"
var multiplication = 2 * 2
document.write(num + multiplication + "<br>")


// Q:3
var num = "Variable after variable declaration is undefined"
document.write(num + "<br>")

var value = "initial value: "
var num = 5

document.write(value + 5 + "<br>")

var value = "value after increment is : "
var num = 5
number = num++

document.write(value + num + "<br>")

var value = "value after increment is : "
var num = 5 + 8
document.write(value + num + "<br>")


var value = "value after decrement is : "
var num = 13
number = num--

document.write(value + num + "<br>")

var value = "the remainder is : "
var num = 1
number = num--

document.write(value + num + "<br>")


//Q:4
var costOfTicket = 600
num = costOfTicket * 5
var dis = "Total Cost to buy 5 tickets to a movie is"

document.write(dis + " " + num + "<br>")

//Q;5
var table = "4x1="
var num = 4

document.write(table + num + "<br>")


var table = "4x2="
var num = 4
num = num * 2

document.write(table + num + "<br>")

var table = "4x3="
var num = 4
num = num * 3

document.write(table + num + "<br>")

var table = "4x4="
var num = 4
num = num * 4

document.write(table + num + "<br>")

var table = "4x5="
var num = 4
num = num * 5

document.write(table + num + "<br>")

var table = "4x6="
var num = 4
num = num * 6

document.write(table + num + "<br>")

var table = "4x7="
var num = 4
num = num * 7

document.write(table + num + "<br>")

var table = "4x8="
var num = 4
num = num * 8

document.write(table + num + "<br>")

var table = "4x9="
var num = 4
num = num * 9

document.write(table + num + "<br>")

var table = "4x10="
var num = 4
num = num * 10

document.write(table + num + "<br>")

//Q:6

var celsiusTemprature = " \n 25 `C is"

var celsius = (25 * 9 / 5) + 32

document.write(celsiusTemprature + celsius + "<br>")

var farenheitTemprature = "\n 70`F is"

var fahrenheit = (70 - 32) * 5 / 9

document.write(farenheitTemprature + fahrenheit + "<br>")


//Q:7

var item = "Price of item 1 is"
var num = 650
document.write(item + num + "<br>")

var item = "quantity of Item 1 is "
var num = 3
document.write(item + num + "<br>")

var item = "Price of item 2 is"
var num = 100
document.write(item + num + "<br>")

var item = "quantity of Item 2 is "
var num = 7
document.write(item + num + "<br>")

var item = "Shopping Charges  "
var num = 100
document.write(item + num + "<br>")

var total = "Total Cost of Your Product Is="
var num = (3 * 650 + 100 * 7 + 100)
document.write(total + num + "<br>")

//Q:8

var totalMarks = "Total Marks is:"
var toMark = 980
document.write(totalMarks + toMark + "<br>")


var obtainMarks = "Total Marks is:"
var obMark = 804
document.write(obtainMarks + obMark + "<br>")

var heading = "Percentage:"
var percentage = obMark / toMark * 100
document.write(heading + percentage + "<br>")

//Q:9

var riyal = 25 * 28
var usDollar = 104.80 * 10

var total = riyal + usDollar

var heading = "Total currency In PKR is:"
document.write(heading + total + "<br>")

//Q:10

var arithmetic = (5 * 10 / 25)
document.write(arithmetic + "<br>")

//Q:11

var currentYear = "Current Year is:"
var num = 2023

document.write(currentYear + num + "<br>")

var birthYear = "Birth Year is:"
var num1 = 2002

document.write(birthYear + num + "<br>")

var totalAge = "the age is:"
var age = num - num1
document.write(totalAge + age + "<br>")

//Q:13
var favoriteSnack = "Favorite Snack:"
var snack = "chocolate chip"

document.write(favoriteSnack + snack + "<br>")

var currentAge = "Current Age is:"
var current = 21
document.write(currentAge + current + "<br>")

var maximiumAge = " Estimated Maximum Age: "
var max = 65
document.write(maximiumAge + max + "<br>")

var amount = "Amount Of Snack Per Day:"
var snacks = 3
document.write(amount + snacks + "<br>")

var heading = "you will need \n "
var num = 132
var heading1 = "\n chocloate chip to last you until the ripe old age of 65"

document.write(heading + num + heading1 + "<br>")



// Chapter 6-9 Q:1
let a = +prompt("enter value of a")

document.write("result: <br>")
document.write("the value of a is:" + a + "<br>")

++a;

document.write("the value of ++a is:" + a + "<br>")
document.write("now the value of ++a is:" + a + "<br>")

a++;

document.write("the value of a++ is:" + a + "<br>")
document.write("now the value of a++ is:" + a + "<br>")

//Q:3

var userName = prompt("Enter a name of user")
var str = "Salam";

document.write(str + " " + userName + "<br>")

//Q:5

var num1 = +prompt("enter a number ", 5)
var table = "5x1=5"
var table1 = "5x2=10"

document.write(table + "<br>" + table1 + " " + "<br>")

//Q:6

var subject = "Subject"
var subject1 = "Maths"
var subject2 = "physics"
var subject3 = "chemistry"

var totalMarks = 100

var main = +prompt("enter a value")

document.write(subject1 + " " + totalMarks + " " + main)
document.write(" " + main / totalMarks * 100 + "<br>")

var value = +prompt("enter a value")

document.write(subject2 + " " + totalMarks + " " + value)
document.write(" " + value / totalMarks * 100 + "<br>")

var hole = +prompt("enter a value")

document.write(subject3 + " " + totalMarks + " " + hole)
document.write(" " + hole / totalMarks * 100 + "<br>")

document.write(" " + totalMarks * 3 + "<br>")

var city = prompt("Enter the city")

if (city == "karachi") {
    document.write("welcome to the city of lights" + "<br>")

}

//Q:2

var gender = prompt("Enter A Gender")
if (gender == "male") {
    document.write("Good Morning Sir"+"<br>")
}
else if (gender == "female") {
    document.write("Good Morning Ma'am"+"<br>")
}
else {
    document.write("beech ka"+"<br>")
}

//Q:3

var lights = prompt("Enter Color Of Light")

if (lights == "red") {
    document.write("Must Stop"+"<br>")
}
else if (lights == "yellow") {
    document.write("ready to move"+"<br>")
}
else if (lights == "green") {
    document.write("Move Now"+"<br>")
}
else {
    document.write("Ghanta farq nahi parta ham to karachi walay hain "+"<br>")
}

//Q:4

var liter = +prompt("Enter the Remaining Value of Fuel")

if (liter < 0.25){
    document.write("please refill The Fuel"+"<br>")
}
else{
    document.write("The Fuel Is In moderate state"+"<br>")
}

//Q:7

var num= +prompt("Enter a Number ")

if (num <= 10){
    document.write("Bingo"+"<br>")
}
else{
    document.write("Close enough the Correct Number"+"<br>")
}

//Q:8

var num = +prompt("Enter a number Which Is Divisble By 3")

if (num/3 == 0 ){
    document.write("the number is divisble by 3"+"<br>")
}
else{
    document.write("The Number Is not Divisble by 3"+"<br>")
}

//Q:9

var evenOdd= +prompt("Enter a Number in Even and Odd ")

if(evenOdd%2 == 0 ){
    document.write(evenOdd," number is even"+"<br>")
}
else{
    document.write(evenOdd,"number is odd"+"<br>")
}

//Q:10

var celsiusTemprature= +prompt("Enter the temprature")

if( celsiusTemprature > 40){
    document.write("It is to hot Oustside")
}
else if(celsiusTemprature > 30 ){
    document.write("The Weather today is Normal.")
}

else if(celsiusTemprature >= 20 ){
    document.write("Today’s Weather is cool.")
}
else if(celsiusTemprature > 10 ){
    document.write("OMG! 'today weather is so cool'")
}
else{
    document.write("no temprature is given")
}

//Q:11

var num1 = +prompt("enter the first number")
var operator = +prompt("enter the operator ")
var num2 = +prompt("enter the second number")

if("num1"+"opeartor"+"num2"){
    document.write(num1+operator+num2)
}

