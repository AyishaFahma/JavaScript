// wrt to find factorial of a given number

// n = 7
// fact = 1
// i = 1
// while(n>i){ // 5>= 1 t // 5>=2 t
//     fact = fact*(n-i) // (5-1)=4  //(5-2)=3
//     i++ // 2 //
//     // console.log(fact);
// }
// console.log(`factorial of the number is ${fact*n}`);

//or
console.log(`-----------`);

n = 7
if(n == 0 || n==1){
    fact = 1
    console.log(`factorial of the number is ${fact}`);
}
else{
fact = 1
i = 1
while(n>i){ // 5>= 1 t // 5>=2 t
    fact = fact*(n-i) // (5-1)=4  //(5-2)=3
    i++ // 2 //
    // console.log(fact);
}
console.log(`factorial of the number is ${fact*n}`);
}

// w r t to find the given three digit number is amstrong or not 
console.log(`---------`);

input = 153
original_digit = input
last_digit = 0
ams=0
// to get the number of digit we convert the number into string
b = input.toString();
console.log(b);
console.log(typeof(b));
c = b.length
console.log(c);

console.log('----------');

while(input>0){
    last_digit=input%10
    ams = ams + last_digit**c
    input=Math.floor(input/10)
    //console.log(ams);
}
console.log(ams);
if(original_digit == ams){
    console.log('given number is amstrong');
}
else{
    console.log('given number is not amstrong');
}

console.log('-------');







