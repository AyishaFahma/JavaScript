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

for(item of employee){
    console.log(item[1]);   
}
console.log('-----------------------------');

//print total numbers of employee

console.log(employee.length);

console.log('-----------------------------');


//print developer employee details

x = 'developer'
for(item of employee){
    for( i of item){
        if( i == x){
            console.log(item);
            
        }
    }
}

console.log('-----------------------------');

//print employee name whose salary > 30000

for(item of employee){
    if(item[4] >= 30000){
        console.log(item[1]);
        
    }
}

console.log('-----------------------------');

// print details of employee Laisha

for(item of employee){
    if(item[1] == 'Laisha'){
        console.log(item);
        
    }
}

console.log('-----------------------------');

//arrange employee based on their salary in descending order

x = employee.sort((a, b) => b[4] - a[4])
console.log(x);

console.log('-----------------------------');

//arrange employee based on their experience in ascending order

y = employee.sort((exp1, exp2) => exp1[5] - exp2[5] )
console.log(y);

console.log('-----------------------------');

// print the employ name whose have the higest salary

highest = employee.sort((sal1, sal2) => sal2[4] - sal1[4])
console.log(highest[0]);
console.log(highest[0][1]);


