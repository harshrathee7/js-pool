function sayHi(){
    alert("Hello");
}
setTimeout(sayHi,1000);
//repeat after interval of 2 sec
let timerId=setInterval(()=> alert('tick'),2000);
//after 5 sec stop
setTimeout(() => { clearInterval(timerId); alert('stop');},5000);