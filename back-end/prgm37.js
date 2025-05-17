// includes()

a = [ 'mini' , 'manu', 'max', 'ayisha']

b = a.includes('max')
console.log(b? 'yes': 'no');

b = a.includes('fahma')
console.log(b? 'yes': 'no');


console.log('----------');

console.log(a);
// a.splice(1,1)
//a.splice(1,1,'rani')
//a.splice(1,0,'rani')
a.splice(2,0,'rani')
a.splice(3,0,'mini')
console.log(a);

console.log(a.indexOf('ayisha'));
console.log(a.indexOf('mini'));
console.log(a.lastIndexOf('mini'));

// c = a.slice(0,2) // 2 vare ulla index aanu kodthathengilm ending index nnu 1 remove cheythitte bakki print aavuu
c = a.slice(0,3)
console.log(c);

console.log('-------------');
a1 = [1, 8, 'hello', 'hi' , '9']
l = a1.reduceRight( (item) => item)
console.log(l);
console.log(typeof(l));










