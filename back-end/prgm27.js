p = [ 10, 11, 12, 20, 30 ]
q = [ 11, 20, 25, 30, 33 ]

i = 0
j = 0

while ( i <p.length && j<q.length) {

    if( p[i] == q[j] ){
        console.log(p[i]);
        i++
        j++
        
    }
    else if( p[i] > q[j] ){
        j++
    }
    else{
        i++
    }
    
}




