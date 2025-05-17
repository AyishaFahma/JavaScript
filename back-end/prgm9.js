// wr a given num is odd or even
num = 11
if(num % 2 ==0){
    console.log(`number is even ${num}`);
}
else{
    console.log(`number is odd ${num}`);
}

console.log('------');
// wr to print 'fizz' when the given number is divisible by 3 'buzz ' if the number is divisible by 5 and 'fizzbuzz' if the num is divisible by 15
// 15 ne kond divisible aneel ath 3 5 kond divisible ayikkm

num = 90
if(num%15 == 0){
    console.log(`FIZZBUZZ`);
}
else if(num%5 == 0){
    console.log(`BUZZ`);
    
}
else if(num%3 == 0){
    console.log('FIZZ');  
}
else{
    console.log('not divisible');
    
}
