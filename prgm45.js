text = 'hai hello all hello world all'
//wrt a prgm to grt the word count from the given text
// op - { hai :1 , hello:2, all:2, world:1}

words = text.split(' ')
console.log(words);
o = []

for(i =0 ; i<= words.length-1; i++){
    for( j = i+1 ; j <= words.length-1; j++){
        if(words[i] == words[j]){
            present = false
            for(k=0; k<=o.length-1;k++){
                if(words[i] == words[k]){
                    present= true
                }

            }
            if(present == false){
                o.push(words[i])
            }
        }
    }
    
}
console.log('duplicate words', o);

