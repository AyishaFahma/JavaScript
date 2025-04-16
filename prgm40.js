// wrt a prgm to print all vowels from the given string
// o o o i a

sentence = 'good morning all'
vowels = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ]
o = []
s1 = Array.from(sentence)
console.log(s1);
console.log('-------');

for( char of s1){
    if (vowels.includes(char)){
        o.push(char)
    }
}
console.log(o);
console.log('-----------');
Array.from(sentence).filter( (char) => vowels.includes(char)).forEach( (item) => console.log(item))
console.log('---------------------------------');

//or

sentence = 'good morning all'
str = Array.from(sentence)
console.log(str);
o = []
op = {}
for(item of str){
    if( item == 'a' ||  item == 'e' || item == 'i' || item == 'o' || item == 'u'){
        o.push(item)
        if(item in op){ // op[item]
            op[item] += 1

        }
        else{
            op[item] = 1
        }
    }
}
console.log(o);
console.log(op);


