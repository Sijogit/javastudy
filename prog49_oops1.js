class Student{
    stname
    stclass
    strollno
    
    constructor(sname,sclass,srollno){
             this.stname=sname
             this.stclass=sclass
             this.strollno=srollno
    }
    display(){
        console.log(`student name is : ${this.stname} student class id : ${this.stclass}`);
    }
}
const obj = new Student("hari", "VI", 23)
obj.display()