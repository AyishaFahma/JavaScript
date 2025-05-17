//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]

//1. display all product name

console.log('all product name');
products.forEach( (item) => console.log(item[1]))

console.log('------------');

//2. display product whose price < Rs.50

console.log('product whose price < Rs.50');
products.filter( (item) => item[2] < 50).forEach( (item) => console.log(item))

console.log('--------------');




//3. print price of oreo

console.log('price of oreo');


products.filter( (item) => item[1] == 'oreo').forEach( (item) => console.log(item[2])) // find() use cheyyam coz oru product nte name repeat cheyyilla
// console.log(products.find( (item) => item[1] == 'oreo'[2]))


console.log('--------');



//4. print costly product name

console.log('costly product name');
cost = products.reduce( (item1,item2) => item1[2] > item2[2]? item1[1]: item2[1])
console.log(cost);

console.log('-----------------');


//5. display out of stock product

console.log('out of stock product');

products.filter( (pro1) => pro1[3] == 0).forEach( (pro1) => console.log(pro1)) // pro[1]

console.log('----------------');

//6. sort products based on stock in decsending order
console.log('products based on stock in decsending order');

products.sort( (s1, s2) => s2[3] - s1[3]).forEach( (item) => console.log(item)); //item[1]

console.log('---------------');


//7. print product having maximum available stock

console.log('product having maximum available stock');


highest = products.reduce( ( s1,s2) =>s1[3] > s2[3]? s1:s2 )
console.log(highest);

console.log('---------------');


//8. is there any product can be purchased by Rs. 10

console.log('is there any product can be purchased by Rs. 10');

rs = products.some( (item) =>item[2] <= 10)
console.log(rs? 'yes' : 'no');

console.log('---------------');


//9. Is there any product in the range of 10 to 30
console.log('Is there any product in the range of 10 to 30');

range = products.some( (pro) => pro[2] >=10 && pro[2] <= 30)?'yes' : 'no'
console.log(range);

console.log('---------------');


//10. print all products in the range of 10 to 30

console.log('print all products in the range of 10 to 30');

products.filter( (item) => item[2] >= 10 && item[2] <= 30).forEach( (pro) => console.log(pro))
