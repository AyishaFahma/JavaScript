// j
// ja
// jav
// java
// javas
// javasc
// javascr
// javascri
// javascrip
// javascript


string = 'javascript'
x = 0
for (i = 0; i < string.length; i++) {

    x = x + 1
    console.log(string.slice(0, x));

}
for (i = 0; i < string.length; i++) {

    x = x - 1
    console.log(string.slice(0, x));

}

// j
// ja
// jav
// java
// javas
// javasc
// javascr
// javascri
// javascrip
// javascript
// javascrip
// javascri
// javascr
// javasc
// javas
// java
// jav
// ja
// j


function containsSubstring(str, substring) {
    //searches for the substring within str
    return str.indexOf(substring) !== -1;
}

console.log(containsSubstring('GeeksForGeeks', 'For'));





// Find the Longest Word in a String in JavaScript?  

function longestWord(str) {
    //str is split into an array of words using the split method.
    const words = str.split(' ');
    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord('GeeksForGeeks is great'));



//Capitalize the First Letter of Each Word in a Sentence in JavaScript?

function capitalizeFirstLetter(sentence) {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

console.log(capitalizeFirstLetter('hello geeks'));


//Remove Duplicates from an Array in JavaScript

function removeDuplicates(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

console.log(removeDuplicates([5, 2, 5, 6, 6, 7])); //[ 5, 2, 6, 7 ]

console.log('------------------');


num1 = [1, 2, 1, 3]
set = new Set(num1)
console.log(set);
console.log(set.size);
if (set.size == num1.length) {
    console.log("no repeat");

}
else {
    console.log('repeat');

}

console.log('------------------');




