// nested array

a = [ [2, 4], [3, 5], [7, 9] ]

 for( item of a){ // [2, 4] // [3, 5] //[7, 9]
    // console.log(item);
    for( num of item){ // [2,4] // [3, 5] // [7, 9]
        console.log(num); //2 // 4 //3 //5 //7 // 9  
    }  
 }

console.log('---------------');



//wrt a prgm to find the heighest number
high = a[0][0]
for(item of a){
    for( i of item){
     if(i > high ){
        high = i
     }
}
}
console.log(`highest is ${high}`);

// find the lowest number

low = a[0][0]
for(item of a){
    for ( j of item){
    if(j < low ){
        low = j
    }
}
}
console.log(`lowest is ${low}`);



// find the sum

sum = 0
for(item of a){
    for( x of item){
        sum = sum +x
    }
}
console.log(`sum is ${sum}`);


// last = a[a.length-1][a.length-1]
// console.log(last);



