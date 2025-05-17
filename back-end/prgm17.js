function add(x,y){
    sum = 0
    return sum = x +y 
    console.log('hello'); // return is the last statement
    
}
console.log(add(5,5));
console.log('-------');


//wrt a prgm to find the cube of a given number using functions

function cube(num){
    x = num **3
    console.log(x);   
}
cube(2)

// wrt a prgm to find a given number is odd or even

console.log('---------');
 

function even(num){
    if(num%2 ==0){
         return 'even numebr';
        
    }
    else{
        return 'odd number';
        
    }
    // return num%2 == 0 ? 'even':'odd'

}
console.log(even(13));
console.log(even(8));

// arrow function the avove prgm

console.log('---------');

const oddeven = (num) => num%2 == 0 ? 'even':'odd'
console.log(oddeven(8));

console.log('--------');

// wrt a prgm to find a given number is positive or negative using arrow function

const posneg = (num)=>{
    if(num>0){
        return 'positive number'
    }
    else if(num==0){
        return 'number is zero'
    }
    else{
        return 'negative number'
    }

    // num<0? 'negative' : num==0? 'zero number' : 'positive'
}
console.log(posneg(0));



