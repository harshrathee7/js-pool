//Functions
//Named Function
function addNum(a,b)
{
    console.log("The function is called");
    return a+b;
}
document.write("Sum of 2 and 3 is "+addNum(2,3));
//Anonymous Function
var f=function (a,b)
{
    console.log("Anonymous function is called");
    return a+b;
}
f(5,6);
document.write("\nSum of 5 and 6 using anonymous function : " +f(5,6));
//Anonymous by a method
setTimeout(function(){console.log("Anonymous function called in timeout")},5000);//Paused for 5000 ms
//Constructors
var cons=new Function("a","b","console.log('In construction function');return a+b;");
console.log(cons(3,4));
//Self-invoking function
(function(a,b){
    console.log("Self invoking function");
    return a+b;
})(2,3);