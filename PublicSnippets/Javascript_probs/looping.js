//For loop
/*var subjects=["Maths","Physics"];
var marks = new Array();
for(var j=0;j<subjects.length;j++)
{
    num1=parseFloat(prompt("Enter marks for subject "+subjects[j]));
    marks[j]=num1;
}
for(i in marks)
{
    document.write("Marks: \n");
    document.write(subjects[i] +marks[i]);
}*/
//While loop
var n=prompt("Enter a number to find factorial");
var fact=1;
while(n>0)
{
 fact*=n;
 n--;
}
document.write("The factorial of the number is :" +fact);
//Same conditions type while just that it will be executed at-least once