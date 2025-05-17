// wrt a prgm to check a given number is mobile number or nor

number = '8078284748'
//num = Array.from(number)
//console.log(num);
l = number.length
//console.log(l);
console.log(l == 10? 'yes, it is a mobile number': 'not a mobile number');
// console.log(number[0] > 0 && number[0] < 10 ? 'number ' : 'not a number'); this is wrong code


console.log('------------');

// wrt a prggm to check a given mail is gmail or not

email = 'fahma@gmail.com'
s = email.endsWith('@gmail.com')
//console.log(s);
console.log(s?'yes, it is a gmail':'no its not a gmail');

console.log('----------');

// wrt a prgm to check a given string starts with letter q

str = 'qeen'
console.log(str.startsWith('q') || str.startsWith('Q')? 'yes it start with q' : 'not start with q');
