//Write a Program to reverse a string in JavaScript

string = "Malayalam"
console.log(string);
result = string.split("").reverse().join("")
console.log(result);
if(string == result){
    console.log('plaindrome');
}
else{
    console.log('not palindrome');
}


// How Remove the first element from an array in JavaScript?

ar = [ 3, 5, 7]
result1 = ar.splice(0,1) // slice(1,3) // shift()
console.log(result1);
console.log(ar);

//Write a Program to print Fibonacci sequence up to n terms?

// 0 1 1 2 3 5 8 13 ...

function Fibonacci(num){

    num1 = 0
    num2 = 1
    let nextnum

    for(i=1 ; i<=num; i++){ //1 //2 //3 //4
        console.log(num1);// 0 // 1 // 1 // 2
        nextnum = num1 + num2 // 0+1=1 //1+1 = 2 // 1+2=3
        num1 = num2 //1 // 1 // 2
        num2 = nextnum  // 1 // 2 // 3
    }

}
Fibonacci(7)
console.log('-----------------');

function countChar(str, char) 
{
  result =  str.split(char)
  console.log(result);
  r1 = result.length-1 // n character ndeel n+1 array elements split cheytha array il ndaavum so athilnnu 1 subtract cheythal count kittm
  console.log(r1);
  
  
}

countChar('GGeeksForGeeksGG', 'G'); // [ '', 'eeksFor', 'eeks', '' ]

str = 'hellohworld' 
console.log(str.split('h')); // [ '', 'ello ', 'world', '' ]


//Write a Program to sort an array in Ascending Order in JavaScript?

function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // swap the elements
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArray([5, 3, 8, 1]));



// write a Program to sort an array in Descending Order in JavaScript? bubble sort

function sortArrayDesc(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArrayDesc([5, 3, 8, 1]));


