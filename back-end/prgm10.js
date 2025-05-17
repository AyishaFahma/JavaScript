// wrt to print javascript 5 times
i = 1
while(i <= 5){
    console.log('javascript');
    i++   
}
console.log('-----');

// w r to print numbers from 1 to 5
 i= 1
 while(i<=5){
    console.log(i);
    i++  
 }
 console.log('-----');

 // w r t to print number from 10 to -1

 i = 10
 while(i>0){
    console.log(i);
    i--  
 }
console.log('----');

 // w r t print all even numbers bet 1 to 50

 i=1
 while(i<=50){
    if(i%2 == 0){
        console.log(i);
    }
    i++
 }
 console.log('-----');

// w r t to find sum of all numbers 1 to 10

i = 1
sum = 0
while(i<=10){
    sum = sum +i
    console.log(sum);
    i++
    
}
console.log(`sum of all numbers from 1 to 10 ${sum}`);
console.log('------');



// w r t to print the given output corresponding to a given input

// inp - 2   3     4
// out - 24  369   4936

input = 4
i = 1
str = ""
while( i <= input){ // 1<=4 t //2<=4 t //3<=4 t // 4<=4 t
    str = str + i // str=''+1='1'// str='1'+2='12' //str= '12'+3='123' // str= '123'+4='1234'
    i++//2 //3 //4
}
console.log(str*input); // '1234'*4 =4936 // stringm number m + cheythal ath concatination avum but ath * cheythal multiplication work avum

// or 
input = 4
i = 1
str = 0
while( i <= input){
    str = str*10 + i // 0*10+1-1 //1*10+2-10+2-12 //12*10+3-120+3-123
    i++
}
console.log(str*input);

// or  2+22 3+33+333 4+44+444+4444 ...

input=3
i = 1
pro = 0
sum = 0
while(i<= input){ // 1<=3
    pro = pro*10 +input //0*10+3-3 // 3*10+3 -33 //333
    sum = sum+pro // 0+3-3 // 3+33-36 // 36 +333-369
    i++
}
console.log(sum);


// w rt prgm to dispaly reverse of a given number
//ip - 236
// out - 632
console.log('-------');

input = 236
lastdigit = 0
rev = 0
while(input>0){ // 23>0 t // 2 >0 t // 0 >0 f
    lastdigit = input%10 //6 // 23%10 - 3 // 2%10 = 2
    rev = rev *10 + lastdigit //6 //6*10=60+3=63 // 63*10=630+2=632
    input = Math.floor(input/10) // 236/10 =23.6 = 23 // 23/10=2.3=2 // 2/10=0.2 = 0
}
console.log(rev);

//wrt to check a given number is palindrome or not

// palindrome- number and its reverse are same
console.log('------');

input = 121
original_input = input // before changing input value store it to a temp variable
lastdigit = 0
rev = 0
while(input>0){
    lastdigit = input%10
    rev = rev *10 + lastdigit
    input = Math.floor(input/10) 
}
// console.log(rev);
if(input == rev){
    console.log('number are same palindrome');   
}
else{
    console.log('numbers are not same');  
}



