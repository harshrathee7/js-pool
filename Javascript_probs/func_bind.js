let user= {
    firstName: "Manak"
};
function func()
{
    alert(this.firstName);
}
let funcUser =func.bind(user);
funcUser();//Manak