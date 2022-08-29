function add(number){
    alert(number+3)
}
function multiply(number,number2){
    alert(number * number2)
}
function capital(string){
    firstLetter=string[0].toUpperCase()
    rest=string.slice(1).toLowerCase()
    alert(firstLetter+rest)
}
function lastLetter(string){
    lastLetter= string.slice(-1)
    alert(lastLetter)
}
number = +prompt("enter number: ")
number2 = +prompt("enter second number: ")
string = prompt("enter string ")
add(number)
multiply(number,number2)
capital(string)
lastLetter(string)
