//class creation
class Employee{
     //property- variable inside a class
     empId
     empName
     empDesg
     empSalary

     //constructor-to initialize property
     constructor(id,ename,desg,salary){
        this.empId=id
        this.empName=ename
        this.empDesg=desg
        this.empSalary=salary
     }
     //method-function inside class
     display(){
        console.log(`employee name is: ${this.empName} emplyee salary is :${this.empSalary}`);
     }
}
//object
const emp1=new Employee(1000,"max","developer",23000)
emp1.display()