// sort array

a = [11, 10, 30, 5, 1, 80, 3]

// ascending order
newarray = a.sort((x,y)=> x - y)  //newarray = a.sort((x,y)=>{  return x - y}) {} kodkkaneel return must ayitt kodkkanam

console.log(newarray);

//descending order
newarray1 = a.sort((i,j)=> j - i)
console.log(newarray1);
