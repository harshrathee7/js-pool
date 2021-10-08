console.log(document.getElementsByTagName("input"));
document.getElementById("abc").setAttribute("style","color:green");
document.getElementById("abc").addEventListener("click",clicked);
function clicked()
{
    document.getElementById("abc").setAttribute("style","color:cyan");
}
document.getElementById("b1").addEventListener("click",but_clicked);
function but_clicked()
{
    window.open("http://www.google.com");
}
 