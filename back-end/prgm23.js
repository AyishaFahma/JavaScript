weekdays = ['mon','tue','wedn']
console.log(weekdays);

for(i in weekdays){
    console.log(weekdays[i]);
    
}

weekdays[3] = 'thur'

weekdays.push('friday') // add new item to the end of an array
console.log(weekdays);

weekdays.push(3) // add new item to the end of an array irrespect of datatype
console.log(weekdays);

weekdays.unshift('sunday') // add to the start of array
console.log(weekdays);

weekdays.pop() //remove the last item from the array 
console.log(weekdays);

weekdays.shift() // remove the first item
console.log(weekdays);


console.log('----------------------------');




expense = [12000, 5000, 28000, 10000, 6000]

//find the least expense - 5000

lowest = expense[0]
for(i of expense){

    if(lowest > i){
        lowest = i
    }    
}
console.log(lowest);

//find the highest expense - 28000

high = expense[0]
for(i of expense){
    if(high < i){
        high = i
    }
}
console.log(high);

//find total expense

sum = 0
for(i of expense){
    sum = sum +i
}
console.log(sum);

console.log('---------------');




arr = [10, 11, 12, 3, 4, 2]
// wrt a prgm where 2 is present or not in the array
present = false
for(i in arr){
    if(arr[i] == 2){
        present=true
        x = i
    }
}
console.log(`location is ${x}`);
console.log(present==true? '2 is present': '2 not present');

console.log('---------------');





arr = [4, 5, 6]
// output = [11, 10, 9]

newa = []
sum = 0
for(i in arr){
    sum = sum + arr[i]
}
console.log(sum);

for(i in arr){
    newa.push(sum-arr[i])
    //console.log(newa);
}
console.log(newa);

console.log('---------------');

//or

variable = 7
newa = []

for(item of arr){
    newa.push(item+variable)// 7+4 = 11 // 5+5=10 // 3+6 =9
    variable -= 2 // 5 //3
}
console.log(newa);

console.log('---------------');






// wrt a prgm to find the duplicate element from the given array
arr = [10, 20, 30, 20, 30, 40, 50, 60, 10, 10]
o = []
for(i=0; i <= arr.length-1; i++){
    for(j=i+1; j<= arr.length-1; j++){
        if( arr[i] == arr[j] ){
            // console.log(arr[i]);this wil display numbers not in array format so thats why we declare empty array
            isdupliacte = false
            for(k=0; k<= o.length-1; k++){
                if(arr[i] == o[k]){
                    isdupliacte = true
                }
            }
            if(!isdupliacte){
                o.push(arr[i]);
            }
            
        }
    }
}

//console.log(o); // this will show the array if there contain dupliacte numbers
console.log(o.length==0? 'no duplicate': o);








