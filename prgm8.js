// second large number
num1 = 3000
num2 = 4500
num3 = 10

if(num1 > num2 && num1 > num3){
    if(num2>num3){
        console.log(`second largest ${num2}`);
        console.log(`descending order ${num1} ${num2} ${num3}`);   
    }
    else{
        console.log(`second largest ${num3}`);
        console.log(`descending order ${num1 } ${num3 } ${num2}`);
    }
}
else if(num2 > num3 && num2 > num1){
    if(num1>num3){
        console.log(`second largest ${num1}`);
        console.log(`descending order ${num2} ${num1} ${num3}`);   
 
    }
    else{
        console.log(`second largest ${num3}`);
        console.log(`descending order ${num2} ${num3} ${num1}`);   

    }
}
else if(num3 > num1 && num3 >num2){
    if(num1>num2){
        console.log(`second largest ${num1}`);
        console.log(`descending order ${num3} ${num1} ${num2}`);   

    }
    else{
        console.log(`second largest ${num2}`);
        console.log(`descending order ${num3} ${num2} ${num1}`);   

    }
}
else{
    console.log(`numbers are equal`)   

}

// console.log('--------------');
// large = a
// if (b>large){
//     large =  b
// }
// if(c > large){
//     large= c
// }
// console.log('largest',large);
// s = a
// if(b<s){
//     s=b
// }
// if(c<s){
//     s= c
// }
// console.log("smallest",s);
// second_large = (a+b+c)-(large+s)
// console.log("second largest",second_large);

// console.log('--------------');

// if(a>=b && a>=c){
//     console.log('largest number is',a);
//     large = a
//     console.log('large =',large);
    
// }
// else if(b>= a && b>=c){
//     console.log('largest number is',b);
//     large = b
//     console.log('large =',large);
// }
// else{
//     console.log('largest number is',c);
//     large = c
//     console.log('large =',large);
// }
// console.log('--------------');

