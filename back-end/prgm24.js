// wrt a prgm to find the pairs whose sum is 6
// a = [2, 3, 4, 5]  (2,4)


a = [2, 3, 4, 5]
sum = 6
found = false
for(i =0;i<=a.length-1;i++){
    for(j=i ; j<=a.length-1;j++){
        if(a[i]+a[j] == sum){
            console.log(`(${a[i]},${a[j]})`); 
            found = true     
        }
    }
}
!found && console.log('no pair');

console.log('---------------');

// wrt a prgm to print common numbers from two given array

p = [10, 11, 12, 20, 30]
q = [11, 20, 25, 30, 33, 30, 20, 12]
o =[]

for(i = 0; i<= p.length-1; i++){
    for(j =0; j<= q.length-1 ;j++){
        if(p[i] == q[j]){
            // o.push(p[i])
            common = false
            for(k=0;k<=o.length-1;k++){
                if(p[i] == o[k]){
                    common = true
                }
            }
            if(common == false){
                o.push(p[i])
            }
        }
    }
}
console.log(o.length==0? 'no duplicate' : o);


