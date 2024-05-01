student={
    stdname:"max",
    stdrollno:53,
    stdclass:"8th",
    
}
console.log(student);
//add address to the object
"stdaddress" in student?"present":student["stdaddress"]="kochi",


console.log(student);
//2) object.assign(target,{"key":value})
Object.assign(student,{"stdage":20})
console.log(student);
Object.assign(student,{stdplace:"ernakulam"})
Object.assign(student,{isvaccinate:true})
console.log(student);

//to update data(replacing rollno.)
student["stdrollno"]+=3
console.log(student);
//replacing name
student["stdname"]="sasi"
console.log(student);

//delete delete object.key
console.log(delete student.isvaccinate)
console.log(student);