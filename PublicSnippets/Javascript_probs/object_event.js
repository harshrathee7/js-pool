 var a={};
 a.name="Manak";
 a.age=20;
 console.log("Name: "+a.name);
 console.log("Age: "+a.age);
 //Within a function
 function create_person()
 {
    var a={};
    a.name="Manak";
    a.age=20;
    console.log("Name: "+a.name);
    console.log("Age: "+a.age);
    return a;
 }
 var b=create_person();
console.log(b);
//Another method
 function create_person4()
 {
     var person= {
         name:"Manak",
         age:60,
         designation:"Student"
     };
     return person;
 }
 var c;
 c=create_person4();
 console.log(c);
 //Another method
 function Person()
 {
     this.name="Manak";
     this.age="20";
 }
 var d = new Person();
 console.log("Name: "+d.name+" Age: "+d.age);
 //Object create method
 var animal={
     type:"Invertibrates",
     displayType: function(){
         alert("Type is: "+this.type);}
     } 
 var horse=Object.create(animal);
 horse.type="Something";
 horse.displayType();
 //
 var trainer={
     name:"ABCD",
     subject:["Maths","Physics","Chemistry"],
     Teaches:["F","S"],
     age:40
 }
 var properties;
 for(i in trainer)
{
    properties+=i +" :BDSM "
}
console.log("Before deletion: "+properties);
delete trainer.age;
properties="";
for(i in trainer)
{
    properties+=i +" :BDSM "
}
console.log("After deletion of age : "+properties);