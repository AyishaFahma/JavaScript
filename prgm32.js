a = [ 12, 41, 6, 5, 22 ]

// wrt a prgm to print all even numbers from the given array

newa = a.filter( (num) => num%2 == 0)
console.log(newa);
console.log('------------------');

// wrt a prgm to print all odd numbers from the given array
newa = a.filter( (num) => num%2 != 0)
console.log(newa);
console.log('------------------');
  

//some()

// is there any even number present in tha given array

newa = a.some( (num) => num%2 == 0)
console.log(newa? 'yes present' : 'no ,not present');
console.log('------------------');


//find()

newa = a.find( (num) => num%2 == 0)
console.log(newa);
console.log('------------------');

newa = a.find( (num) => num%2 != 0)
console.log(newa);
console.log('------------------');
