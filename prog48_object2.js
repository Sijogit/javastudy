employee={
    empid:1000,
    empname:"Neel",
    empdesig:"developer",
    emplocation:"Kochi",
    empsalary:25000,
    empexp:3  

}

//w.a.p to print all keys from the given object
for(let key in employee){
    console.log(key);
}
//w.a.p to print all values from the given object
for(let key in employee){
     console.log(employee[key]);
}

//w.a.p tp print all key:valuesfrom the given object
for(let key in employee){
    console.log(`${key}, ${employee[key]}`);
}

//check whether employee location is present or not if present print available else not available

    if("emplocation" in employee){
        console.log("present");

    }
    else{
        console.log("not present");
    }

    console.log(`emplocation is ${"emplocation" in employee?'present':'not present'}`);

    "emplocation" in employee?console.log('present'):console.log('not present');;
