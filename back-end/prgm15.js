//       *
//     *   * 
//   *       *
// * * * * * * *


for(row=1; row<=4; row++){
    str = ""
    for(col=1; col<=7; col++){
        if(row + col == 5 || col - row == 3 || row == 4 ){
            str= str + "* "
        }
        else{
            str = str +"  "
        }        
    }

    console.log(str);

}
console.log('---------');


// * * * * *
// *       *
// *       *
// *       *
// * * * * *

for(row=1; row<=5; row++){
    str= ""
    for(col=1; col<=5; col++){
        if(row == 5 || col == 5 || row == 1 || col == 1 ){
            str = str + "* "
        }
        else{
            str = str + "  "
        }
    }
    console.log(str);
    
}

console.log('---------');

// * * * * *
//   *   *
//     *
//   *   *
// * * * * *


for(row=1; row<=5; row++){
    str= ""
    for(col=1; col<=5; col++){
        if(row == 1 || row == 5 || row == col || row+col == 6  ){
            str= str +"* "
        }
        else{
            str= str +"  "
        }
    }
    console.log(str);
    
}
console.log('---------');

// 1
// 0 1
// 1 0 1 
// 0 1 0 1


for(row=1; row<= 4; row++){
    str = ""
    for(col=1; col<= row; col++){
        if( (row+col) % 2 == 0 ){
            str= str + "1 "
        }
        else{
            str = str + "0 "
        }
    }
     console.log(str);
}

console.log('----------');


//             11
//          12 13 14
//       15 16 17 18 19
//    20 21 22 23 24 25 26
// 27 28 29 30 31 32 33 34 35 

i = 0
x = 11
for(row=1; row <=5 ; row++){
    str = ""
    for( space = 5; space> row; space-- ){
        str = str +"   "
    }
    for(col=1; col<= row +i ; col++){
        str = str + x + " "
        x++
        
    }
    i++
    console.log(str);
    
}

console.log('-------------');
//or

variable = 11
for(row = 1; row<=5; row++){
    str = ""
    for(space=1; space <= 5-row; space++){
        str = str + "   "
    }
    for(col=1; col <= 2*row-1; col++){
        str= str +variable + " "
        variable++
    }
    console.log(str);
    
}
