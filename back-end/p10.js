        //       *
        //      * *
        //     *   *
        //    *******

for(r=1;r<=4; r++){
    str= ''
    for(c=1;c<=7; c++){
        if(r+c == 5 || c-r == 3 || r==4){
            str = str + "*"
        }
        else{
            str= str + " "
        }
    }
    console.log(str);
    
}

console.log('-------------------');


    //    *******
    //     *****
    //      ***
    //       *

for(r=7;r>=1;r--){
    str= ''
    if(r%2 == 0){
        continue
    }
    else{
    for(s=0 ;s< (7-r) / 2; s++){
        str= str + " "
    }
    for(c=1;c<=r;c++){
        str = str +"*"
    }
    console.log(str);

}


}  

console.log('-------------------');


// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *


str = '*****'
x=0
for(i=0;i<=str.length-1;i++){
    x= x+1
    console.log(str.slice(0,x));
    
}
for(i=0;i<=str.length-1;i++){
    x = x-1
    console.log(str.slice(0,x));
    
}
console.log('-------------------');

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *


for (let row = 1; row <= 9; row++) {
    let str = "";

    if (row <= 5) {
        // Top half of the diamond
        for (let s = 1; s <= 5 - row; s++) {
            str += " ";
        }
        for (let c = 1; c <= row; c++) {
            str += "* ";
        }
    } 
    else {
        // Bottom half of the diamond
        for (let s = 1; s <= row - 5; s++) {
            str += " ";
        }
        for (let c = 1; c <= 10 - row; c++) {
            str += "* ";
        }
    }

    console.log(str);
}


//(2 * row - 1)
console.log('-------------------');

//   *
//  * *
// *   *
//  * *
//   *

for(r=1;r<=5; r++){
    str= ''
    for(c=1;c<=5; c++){
        if(r+c == 4 || r-c == 2 || c-r == 2 || r == 4 && c==4){
            str = str + "*"
        }
        else{
            str= str + " "
        }
    }
    console.log(str);
    
}
console.log('-------------------');


//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *

for(r=1;r<=9; r++){
    str= ''
    for(c=1;c<=9; c++){
        if(r+c == 6 || r-c == 4 || c-r == 4 || r+c == 14 ){
            str = str + "*"
        }
        else{
            str= str + " "
        }
    }
    console.log(str);
    
}
console.log('-------------------');





//     *****
//    *   *
//   *   *
//  *   *
// *****






// *   *
//  * *
//   *
//  * *
// *   *


// *        *
// **      **
// ***    ***
// ****  ****
// **********
// **********
// ****  ****
// ***    ***
// **      **
// *        *