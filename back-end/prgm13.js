// // wrt a prgm to print numbers from 1 to 5
for(i = 1;i<=5;i++){
    console.log(i);  
}
console.log('------');

// // wrt a prgm to find the factorial of a given number by using for loop

num = 5
fact = 1
for(i=1;num>=i;i++){
    fact= fact*i
}
console.log(fact);


// //wrt a prgm that have the ability to iterate up to 10 but print only upto 5
console.log('------');

for(i = 1;i<=10;i++){
    if(i>=1 && i<=5){
    console.log(i); 
    } 
}
console.log('------');

// //or
for(i = 1;i<=10;i++){
    
    console.log(i);
    
    if(i>=5){
        break
    }
 
}
console.log('------');


// // wrt a prgm to print a given number is prime or not

num = 1
prime = true
if(num<=0){
    console.log('not a prime');
    
}
else if(num==1){
    console.log('neither prime nor composite');
}
else{
for(i=2;i<num;i++){
    if(num%i == 0){
        prime=false
    }
}
console.log(prime==true?'number is prime':'number is not a prime');
}



// wrt a prgm to find gcd/hcf of two given numbers  
//12 -1 2 3 4 6 12
//28 -1 2 4 7 14 28
//common - 1 2 4 = highest=4


console.log('-------');
num1 = 12
num2 = 28
gcd = 0
for(i=1;i<=num1 && i<=num2;i++){ // 1<=12 && 1<=28 // 2<=12 && 2<=28
    if(num1%i == 0 && num2%i == 0){ // 12%1 ==0 && 28%1==0 //
        //console.log(i);
        gcd = i //1 //2
    }
}
console.log(gcd);

//wrt a prgm to display all prime numbers between 2 to 50



for(low=2;low<=50;low++){ //2 //3
    prime = true 
    for(i=2; i<low; i++){ // 2<2 f  // 2<3 t     
        if(low%i == 0){ // 3%2 ==0 no
            prime = false   
        }      
}
prime && console.log(low); //2 //3
}




// wrt to display all anstrong numbers between 8 to 500

// to get the number of digit we convert the number into string

console.log('----------');

for(i=8; i <=500; i++){

    let power = (i +"").length
    temp = i
    sum=0
    while(temp>0){
        let ld= temp%10
        sum = sum + ld ** power
        temp =Math.floor(temp/10)
    }
    sum == i && console.log(i);
      
}

console.log('-------');