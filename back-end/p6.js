// Find the Intersection of Two Arrays in JavaScript?


num1 = [1,2,3,4,2]
num2 = [2,4,6,7,2] // here 2 will repeated in result [ 2, 2, 4, 2, 2 ]
r =[]
for(i=0;i<num1.length;i++){
    for(j=0;j<num2.length;j++){
        if(num1[i] == num2[j]){
            r.push(num1[i])
        }
    }
}
console.log(r);

//or

num1 = [1,2,3,4,2] // here first arrayil kodtha repeat cheyth verm  [ 2, 4, 2 ]
num2 = [2,4,6,7,2]
r =[]
for(i=0;i<num1.length;i++){
    if(num2.includes(num1[i])){

        r.push(num1[i])
    }
    
}
console.log(r);


//or 


const arr1 = [1, 2, 3, 4 ,2];
const arr2 = [2, 4, 6, 7, 2];

const intersection = arr1.filter(value => arr2.includes(value));

console.log(intersection); // [ 2, 4, 2 ]


//or
console.log('----------------');

//Removing duplicates in the result 

const ar1 = [1, 2, 3, 4 ,2];
const ar2 = [2, 4, 6, 7, 2];

const set2 = new Set(ar2); // {2,4,6,7}
const intersection1 = [...new Set(ar1.filter(val => set2.has(val)))]; // [2,4,2] = {2,4} = [2,4]

console.log(intersection1); // [2, 4]

