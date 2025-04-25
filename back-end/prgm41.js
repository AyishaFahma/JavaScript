// wrt a prgm to check whether a given string is palindrome or not
//malayalam

// string = 'malayalam' // case mariyal work avilla so uppercase lekko lowecase lekko mattam

// pal = ''

// for(i = string.length-1; i >=0; i--){
//     pal += string[i]
// }
// console.log(pal == string? 'yes palindrome' : 'not palindrome');

string = 'malayalam'
string = string.toUpperCase()
s = Array.from(string)
console.log(s);
arr = ''
for(i = s.length-1; i>=0; i--){
    arr = arr+ s[i]
    //console.log(arr);  
}
console.log(arr);
console.log(string == arr? 'palindrome' : 'not palindrome');


