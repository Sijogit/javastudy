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
for(let x of employee){
    
   console.log(x[1]);
}
//print total numbers of employee
 console.log(employee.length);
 console.log('--------------------------------');
 //print developer employee details

 console.log('developer employee details');
 for(let emp of employee){
    if(emp[2]=='developer'){
        console.log(emp);
    }
 }
 console.log('----------------------------------');

 //print employee salary whose >30000

 console.log('employee salary whose >30000');

 for(let emp of employee){
    if(emp[4]>30000){
        console.log(emp[1] , emp[4]);
     }
 }
console.log('--------------------------');

//print details of employee laisha

console.log('details of employee laisha');
for(let emp of employee){
    if(emp[1]=='Laisha'){
        console.log(emp);
    }
}
console.log('--------------------------');
//sort employee based on their salary in descending order
console.log('employee based on their salary in descending order');

    employee.sort((emp1,emp2)=> emp2[4]- emp1[4])
        console.log(employee)

        console.log('-------------------------------');
    
//sort employee based on their experiance in ascending order

console.log('employee based on their experiance in ascending order');

employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(employee);

//print the employee name whose have the highest salary

console.log('employee name whose have the highest salary');
employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(employee[0][1]);