// string



str = 'Ayisha'
console.log(str.startsWith('ayi')); // case sensitive
console.log(str.startsWith('Ayi'));

console.log(str.endsWith('a'));
console.log(str.endsWith('shA'));
console.log('--------------');

str1 = str.toUpperCase()
console.log(str1);

str1 = str.toLowerCase()
console.log(str1);
console.log('---------');

str1 = 'TECHNOLOGY'
console.log(str1.substring(0,4)); // end index-1 print cheyym
console.log(str1.substring(0,str1.length)); 
console.log(str1.substring(6)); // evide end index parayenda if we want 'logy' in this case
console.log('---------');

console.log(str1.slice(0,4));// endindex-1

console.log(str1.slice(-6,-3)); // endindex-1
console.log(str1.slice(-6));
console.log(str1.slice(-(str1.length))); //is just returning the full string — it’s not reversing the string.



console.log('----------');

text = 'hello'
console.log(text);
text1 = '         hello'
console.log(text1);
text2 = 'hello         '
console.log(text2);
console.log('--------');

console.log(text1.trim());
console.log(text2.trim());

text3 = 'he    llo'
console.log(text3.trim()); // this wont remove

console.log('------replace()-----');
sentence = 'i work in microsoft'
console.log(sentence.replace('microsoft','google'));

sentence1 = 'i work in microsoft, coz microsoft is far away'
console.log(sentence1.replace('microsoft','google')); // it only replace first occurence of searching value
console.log('----------');

sentence3 = 'i work in microsoft, coz microsoft is far away'
console.log(sentence3.replaceAll('microsoft','google'));

console.log('----------');


//Array.from()

s = 'HELLO'
s1 = Array.from(s)
console.log(s1);

s = 'HELLO WORLD'
s1 = Array.from(s)
console.log(s1);

console.log('----------');

st = 'LUMINAR'
console.log(st.split('I'));
console.log(st.split('MI'));
console.log(st.split('L'));


st = 'LUMINAR TECHNOLAB'
console.log(st.split(' '));// space vechitt divide cheyth














