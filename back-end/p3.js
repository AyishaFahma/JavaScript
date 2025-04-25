// Given an integer n, return true if n is a  perfect square else false


// console.log(Math.sqrt(25));

// 1 4 9 16 25 36 49 .... perfect square

n = 49
sq = []
for(i=1;i<=n;i++){

    sq.push(i*i)
    //sq.push(i**2)

}
console.log(sq);
ispresent = false;
for(item of sq){

    if(item == n){
        ispresent = true
        
    }
    
}
ispresent == true? console.log(`${n} is  perfect square`) : console.log(`${n} is not perfect square`);






