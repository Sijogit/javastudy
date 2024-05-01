//nested array

//[id, name, designation, location, salary, experiance]

employee =[
    [1000, 'Neel', 'developer', 'kochi', 25000, 3],
    [1001, 'Max', 'tester', 'TVM', 20000, 2],
    [1002, 'Maxwell', 'QA', 'kochi', 35000, 4],
    [1003, 'Vyom', 'QA', 'kochi', 35000, 4],
    [1004, 'Laisha', 'tester', 'TVM', 55000, 5],
    [1005, 'Aahan', 'developer', 'TVM', 15000, 1],
    [1006, 'Aahil', 'QA', 'kochi', 20000, 2],
    [1007, 'Shayn', 'developer', 'kochi', 30000, 3],
    [1008, 'Nihan', 'developer', 'TVM', 25000, 3]
]
//print all employee name
employee.forEach(empname => {console.log(empname[1]);
    
});


//print total numbers of employee

console.log(employee.length);
 
//print developer employee details

developer=employee.filter(emp=>emp[2]=='developer')
console.log(developer);
//using foreach
employee.forEach(emp=>{console.log(emp[1]);})




//print employee salary whose >30000
console.log('salary under 30k');
salary=employee.filter(emp=>emp[4]>30000).forEach(emp=>{console.log(emp[1]);})
//console.log(salary);
console.log('==============');


//print details of employee laisha
laisha=employee.find(emp=>emp[1]=='Laisha')
console.log(laisha);

//sort employee based on their salary in descending order

employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(employee);
//sort employee based on their experiance in ascending order
employee.sort((emp1,emp2)=>emp1[4]-emp2[4])
console.log(employee);

//print the employee name whose have the highest salary
hieghest=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(hieghest);
//print the employee name whose have the least salary
hieghest=employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(hieghest[1]);
//print  the total salary
total=employee.map(sal=>sal[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(total);