// binary search 

a = [10, 2, 80, 3, 5, 90, 1]

searchitem = 80
                        // 0  1  2  3   4   5   6
a.sort((x,y)=> x - y) // [ 1, 2, 3, 5, 10, 80, 90]

low = 0 // 4
up = a.length-1 // 7-1 = 6
mid = 0
isPresent = false

while( low <= up){ // 0<=6 // 4<=6

mid = Math.floor( (low+up)/2 ) // 3 // 4+6/2 = 10/2 = 5 //

if(a[mid] == searchitem){ // 5 == 80 no // 80 == 80 yes
    isPresent = true // true
    break
}

else if(a[mid] < searchitem){ // 5 <80 
    low = mid +1 // 3+1 = 4 //
}

else{
    up = mid -1
}
}
console.log(isPresent == true? `present at ${mid}` : 'not present');
// console.log(low); 4
// console.log(up);  6
// console.log(mid); 5






