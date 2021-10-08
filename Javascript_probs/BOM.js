//Window object
function window_op(){
var new_window =window.open("https://www.google.com/","New WIndow","height=100,width=200");
new_window.moveTo(600,700);
new_window.close();
}
//screen object
console.log("Screen Height: "+screen.height);
console.log("Available screen height: "+screen.availHeight);
//Navigator object

function navigator_prop()
{
    document.write("<br> AppCodeName: "+navigator.appCodeName);
    document.write("<br> AppName: "+navigator.appName);
    document.write("<br> Platform: "+navigator.platform);
    document.write("<br> Cookie enabled or not: "+navigator.cookieEnabled);
    document.write("<br> Product: "+navigator.product);
    document.write("<br> User_Agent: "+navigator.userAgent);
    
}
var a=navigator_prop();

//Location object
function location_prop()
{
    console.log("href of location: "+location.href);
    console.log("Host: "+location.hostname);
    console.log("Protocol: "+location.protocol);
   // location.assign("https://www.google.com");
}
location_prop(); 

//History object
function history_prop()
{
//   history.back();
      history.forward();
}
history_prop();