//If else
var age;
age=prompt("Enter your age");
if(age>60)
document.write("Age is above 60");
else if(age>30 && age<=60)
document.write("Age is between 30 and 60\n");
else if(age<30)
document.write("Age is less than 30\n");
//Switch case statements
var weight=parseFloat(prompt("Enter your weight\n"));
switch(weight)
{
    case 1:document.write("\nWeight is 1");
            break;
    case 2:document.write("\nWeight is 2");
            break; 
    case 3:document.write("\nWeight is 3");
           break;
    default:document.write("Error");
}
