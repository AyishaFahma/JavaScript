const posneg = (num)=>{   
    return num<0? 'negative' : num==0? 'zero number' : 'positive'
}
console.log(posneg(-2));
console.log('--------------');


console.log(posnegz(10)); // hoising not possible in arrow function
const posnegz = (num)=>{   
    return num<0? 'negative' : num==0? 'zero number' : 'positive'
}

console.log('--------------');

console.log(sumd(5, 8)) // hoisting is possible in normal function
function sumd(x , y){
    let sum = 0
    return sum = x + y   
}
 
