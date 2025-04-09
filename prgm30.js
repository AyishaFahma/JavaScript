a = [ 1, 2, 3, 4, 5 ]

for(let item of a){
    console.log(item);
    
}
console.log('-------------');

a.forEach( (item) => console.log(item))
console.log('-------------');

// wrt a prgm to find square of all element
a.forEach((num) => console.log(num ** 2))

console.log('-------------');

sq = a.map((item) => item **2)
console.log(sq);

console.log('-------------');


// wrt a prgm to create a new array with number <=3 and increment by 1 else decrement by 1
// a = [ 1, 2, 3, 4, 5 ]


newa = a.map( (item) => {
    if(item <= 3){
        return item = item +1 
    }
    else{
        return item = item -1
    }
})
console.log(newa);

//or
newa = a.map( (item) => item<=3 ? item+1 : item-1 )
console.log(newa);

console.log('-------------');




