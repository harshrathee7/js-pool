//Arrow function
hello = () => {
    document.getElementById("demo").innerHTML="I am here";
}
window.addEventListener("load",hello);
//button object calls the function
document.getElementById("b1").addEventListener("click",hello);