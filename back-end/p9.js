// ****
// ****
// ****
// ****

for (r = 1; r <= 4; r++) {
    str = ''
    for (c = 1; c <= 4; c++) {
        str = str + ' *'

    }
    console.log(str);

}
console.log('------------');


// ****
// *  *
// *  *
// ****


for (r = 1; r <= 4; r++) {
    str = ''

    for (c = 1; c <= 4; c++) {

        if (r == 1 || r == 4 || c == 1 || c == 4) {
            str = str + "* "
        }
        else {
            str = str + '  '
        }
    }
    console.log(str);

}

console.log('------------');


//    ****
//     ****
//      ****
//       ****



for (r = 1; r <= 4; r++) {
    str = ''
    for (s = 1; s <= r - 1; s++) {
        str = str + " "
    }
    for (c = 1; c <= 4; c++) {
        str = str + " *"
    }

    console.log(str);


}
console.log('------------');


//            ****
//           ****
//          ****
//         ****

for (r = 1; r <= 4; r++) {
    str = ''
    for (s = 3; s >= r; s--) {
        str = str + " "
    }
    for (c = 1; c <= 4; c++) {
        str = str + " *"
    }

    console.log(str);


}

console.log('------------');


// *
// **
// ***
// ****

for(r=1;r<=4;r++){
    str =''
    for(c=1;c<=r;c++){
        str= str + " *"
    }
    console.log(str);
    
}

console.log('------------');


//     *
//    ***
//   *****
//  *******

for (r = 1; r <= 7; r++) {
    
    if(r%2 ==0){
        continue
    }
    else{
    str = ''
    for (s = 3; s > r-4; s--) {
        str = str + " "
    }
    for (c = 1; c <= r; c++) {
        str = str + "* "
    }

    console.log(str);
    }

}
