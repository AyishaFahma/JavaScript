// // # # # #
// // # # # #
// // # # # #
// // # # # #

// // wrt a prgm to print above pattern

for(row=1;row<=4;row++){
    str= ''
    for(col=1;col<=4;col++){
        str = str + '# ' // ''+'#'-'#'//
    }
    console.log(str);   
}

 console.log('---------');

// // 1 1 1 1
// // 2 2 2 2
// // 3 3 3 3
// // 4 4 4 4

for(row=1;row<=4;row++){
    str = ''
    for(col=1;col<=4;col++){
        str = str+ row + ' '
    }
    console.log(str);   
}
console.log('--------');

// // 1 2 3 4
// // 1 2 3 4
// // 1 2 3 4
// // 1 2 3 4

for(row=1;row<=4;row++){
    str = ''
    for(col=1;col<=4;col++){
        str = str + col + ' '
    }
    console.log(str);   
}
console.log('--------');

// // *
// // * *
// // * * *
// // * * * *

for(row=1;row<=4;row++){
    str = ''
    for(col=1;col<=row;col++){
        str = str + '* '
    }
    console.log(str);   
}
console.log('--------');

// // 1
// // 2 2
// // 3 3 3
// // 4 4 4 4
 
for(row=1;row<=4;row++){
    str = ''
    for(col=1;col<=row;col++){
        str = str + row +' '
    }
    console.log(str);   
}
console.log('--------');

// // 1
// // 1 2
// // 1 2 3
// // 1 2 3 4

for(row=1;row<=4;row++){
    str = ''
    for(col=1;col<=row;col++){
        str = str + col +' '
    }
    console.log(str);   
}
console.log('--------');


// // * * * *
// // * * * 
// // * * 
// // * 

for(row=4;row>=1;row--){
    str = ''
    for(col=1;col<=row; col++){
        str = str + '* '
    }
    console.log(str);   
}
console.log('--------');

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * * 
// * 


//or

for(row=1; row<=9; row++){
    if(row<=5){
        str = ""
        for(col=1; col<=row; col++){
            str= str + "* "
        }
        console.log(str);
        
    }

    else{
        str = ""
        for(col=1; col <= 10-row; col++){
            str= str + "* "
        }
        console.log(str);
        
    }
}

// for(row=1;row<=5;row++){
//     str=""
//     for(col=1;col<=row;col++){
//         str = str+"* "
//     }
//     console.log(str);   
// }

// for(row=4;row>=1;row--){
//     str=""
//     for(col=1;col<=row;col++){
//         str = str+"* "
//     }
//     console.log(str);   
// }




//    *
//   * *
//  * * *
// * * * *

console.log('---------');

// str = "" //"" // ethine loopinte porth kodkkam pattoolla 
for(row=1;row<=4;row++){ //1<=4
    str = "" //""
    for(space=3;space>=row;space--){ // 3>=1 //2>=1 //1>=1
        str = str+" " //### this # is actually space for understanding purpose we give # vale
    }
    for(col=1;col<=row;col++){ //1<=1
        str = str+"* " // ###*
    }
    console.log(str); // ###*
    
}


//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

for(r=1;r<=9;r++){
    if(r<=5){
        str = ''
        for(s=1;s<=5-r;s++){
            str = str + " "
        }
        for(c=1;c<=r;c++){
            str = str + " *"
        }
        console.log(str);
        
    }
    else{
        str =''
        for(s=1;s<= r-5;s++){
            str = str + " "
        }
        for(c=1;c<= 10-r;c++){
            str = str + " *"
        }

        console.log(str);
    }
    
}
