<script>  
var emp = class Employee {  
  constructor(id, name) {  
    this.id = id;  
    this.name = name;  
  }  
};  
document.writeln(emp.name);  
/*document.writeln(Employee.name);  
Error occurs on console:  
"ReferenceError: Employee is not defined  
*/  
</script>  