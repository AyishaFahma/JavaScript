//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name
console.log('all employee name');

employee.forEach( (item) => console.log(item[1]))
console.log('-----------------------------');


//print total numbers of employee
console.log('total numbers of employee');

console.log(employee.length);

console.log('-----------------------------');


//print developer employee details
console.log('developer employee details');

newa = employee.filter( (item) => item[2]=='developer')
console.log(newa);

console.log('-----------------------------');

//print employee name whose salary > 30000
console.log('employee name whose salary > 30000');

newa = employee.filter( (item) => item[4] > 30000)
// console.log(newa); // eth kodtha array nte ullil vere array verm ath remove akkan forEach use akki // [ [], [],.. ]
newa.forEach( (item) => console.log(item[1]))

console.log('-----------------------------');

// print details of employee Laisha
console.log('details of employee Laisha');

employee.filter( (item) => item[1] == 'Laisha').forEach( (item) => console.log(item))
//or
newa = employee.find( (item) => item[1] == 'Laisha')
console.log(newa);


console.log('-----------------------------');

//arrange employee based on their salary in descending order
console.log('employee based on their salary in descending order');

x = employee.sort((a, b) => b[4] - a[4])
console.log(x);

console.log('-----------------------------');

//arrange employee based on their experience in ascending order
console.log('employee based on their experience in ascending order');

y = employee.sort((exp1, exp2) => exp1[5] - exp2[5] )
console.log(y);

console.log('-----------------------------');

// print the employ name whose have the higest salary
console.log('employ name whose have the higest salary');

highest = employee.reduce( (item1,item2) => item1[4] > item2[4]? item1[1]: item2[1])
console.log(highest);

console.log('-----------------');

// print employee details with lowest salary
console.log('employee details with lowest salary');

low = employee.reduce( (item1, item2) => item1[4] < item2[4]? item1: item2)
console.log(low);

console.log('-----------------');

// find total salary expense of the company
console.log('total salary expense of the company');

sal = employee.map( (item) => item[4]).reduce( ( sal1,sal2) => sal1 + sal2)
console.log(sal);



