text = 'hai hello all hello world all'
//wrt a prgm to grt the word count from the given text
// op - { hai :1 , hello:2, all:2, world:1}

words = text.split(' ')
console.log(words);
o = {}
for( w of words){ // hai // hello //all //hello
    if( w in o){// o[w]      // hai in o 
        o[w] += 1 // {hai:1, hello:2, all:1}
    }
    else{
        o[w] = 1 // o[hai] = 1 key = value // {hai:1 , hello:1, all:1}
    }
}
console.log(o);
//or
console.log(text.split(' ').forEach( (w)=> w in o? o[w] +=1 : o[w] =1))
console.log('------------------------------------------');


// numArray = [10, 20, 30, 20, 40, 50, 50, 60, 10]
// find the num count
//{ 10:2, .....}

numArray = [ 10, 20, 30, 20, 40, 50, 50, 60, 10, 10 ]
console.log(numArray);

o = {}
for ( num of numArray){
    if(o[num]){ // num in o
        o[num] += 1
    }
    else{
        o[num] = 1
    }
}
console.log(o);
//or
numArray.forEach( (num) => num in o? o[num] +=1 : o[num] = 1)
console.log('------------------------------------------');


// pattern = ABCBCAA
//find the count of letter A

pattern = "ABCBCAA"
p = Array.from(pattern)
console.log(p);
r = {}
for(item of p){
    if(item == 'A'){
        if(r[item]){ //r['A']
            r[item] += 1

        }
        else{
            r[item]=1
        }
    }
}
console.log(r);
console.log('------------------------------------------');



// pattern = ABCBCAA
//find the first recursive letter 

pattern = 'ABCBCAA'
p = Array.from(pattern) //pattern.toLowerCase()
console.log(p);
ispresent = false
r = {}
for(char of p){
    if(r[char]){
        console.log(char);
        ispresent = true
        break
    }
    else{
        r[char] = 1
    }
}
//console.log(char); // eth evide kodkkan pattoolla if recursive item illa engil last char il ulla value print aavum
!ispresent && console.log('no recursive item');
console.log(r); // eth complete print avilla recursive verna vare ullath mathre print avullu











