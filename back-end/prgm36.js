// flat()
a  = [ [2, 4], [5, 6, 7], [8, 9] ]
b = a.flat()
console.log(b);

f  = [ [2, 4], [5, 6, 7, [4, 6]], [8, 9, [5, 8, [ 3, 5 ]]] ] // 4d
e = f.flat(1) //3d
//e = f.flat(2) //2d
console.log(e);


d  = [ [2, 4], [5, 6, 7, [4, 6]], [8, 9, [5, 8, [ 3, 5 ]]] ]
c = d.flat(Infinity)
console.log(c);


