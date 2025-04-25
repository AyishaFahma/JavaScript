
// object

// [ 1000, 'fahma', 'developer', 'calict', '35000', 1 ]

const employee = {
    empid:1000,
    empname:'fahma',
    empdesig:'developer',
    
}
console.log(employee);
//console.log(a[1]);
console.log(employee['empname']); // to access a single key '' must aanu
console.log(employee['empid']);
console.log(employee.empname); // .key vechum access cheyyam // . work avaneel exact key aa objectil venam
console.log('---------------------');

// for (item in a){
//     console.log(item); // eth print cheyynnath index ayirikkm 0 1 2 ...
//     console.log(a[item]); // this will print element in the array    
// }

// also

for( item in employee){
    console.log(item);
    
    console.log('----');
    console.log(employee[item]);

    // console.log(employee['item']); eth work avaneel item nnu paranja key objectil present aavanam appo aa value tharum

    // console.log(employee.item); ethm work avilla
}

console.log('-------------------------------');

// add new data
employee['emploc'] = 'calict'
console.log(employee);

employee['emploc'] = 'kochi' // value change aavum calicut mareett kochi verm

// or

Object.assign(employee, {empsal :35000})
console.log(employee);

console.log('-------------------------------');

// check wheather employee experience is present in the given object or not, if present print 'key is available', else add a new key value pairs as empExp :3
ispresent = false
for( item in employee){
    if ( item == 'empexp'){
        ispresent = true   
    }
}
console.log(ispresent? 'key already available' : Object.assign(employee,{empexp : 1}))

console.log('------------------');

console.log(employee['empexp']? 'key already available' : Object.assign(employee,{empexp : 1})) // for checking purpose

console.log('------------------');
// or

'empexp' in employee ? console.log('key already available') : Object.assign(employee,{empexp : 1}),console.log(employee);

console.log('-------------------------------');

// add update data 
// employee['empexp'] = 5 // value change akum
employee['empexp'] += 5 // old value + new value
console.log(employee);
console.log('------------------');
employee['empname'] = 'ayisha'
console.log(employee);
console.log('------------------');

// delete data

delete employee.empexp
console.log(employee);
console.log('------------------');









