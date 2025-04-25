// wrt prgm check wheather a person is eligible to vote
y=18
x = 22
if(x>=18){
    console.log('eligible to vote coz age is ',y,' or above',x);
}
else{
    console.log('not eligible to vote coz age is ',y,' below',x);
}

//trenary operator use 
console.log(x>=18?'eligible to vote ': 'not eligible to vote ');


// write a prgm to check a given numb is positive or neg

num = 40
if(num>0){
    console.log('number is positive');   
}
else if(num==0){
    console.log('number is zero');
}
else{
    console.log('number is negative');
    
}

//ternary
console.log(num>0?'number is positive':num==0?'number is zero':'number is negative');


// wrt a prgm to print the largest num bet two given numbers

num1 = 100
num2 = 500
if(num1>num2){
    console.log('large num is',num1);  
}
else if(num1==num2){
    console.log('numbers are equal');   
}
else{
    console.log('large num is',num2);

}
