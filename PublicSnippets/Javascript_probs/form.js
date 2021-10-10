function validate_form()
{
    var name=document.getElementById("a1");
    var roll=document.getElementById("a2");

    if(name.value=="")
    {
        alert("Please enter your name");
    }
    if((isNaN(name.value))){
        alert("Numeric entry not allowed for this field");
    }
   
}
document.getElementById("b2").addEventListener("click",clicked);
function clicked()
{
    window.open("https://mail.google.com/mail/u/1/#inbox");
}
document.getElementById("b3").addEventListener("click",validate_form);