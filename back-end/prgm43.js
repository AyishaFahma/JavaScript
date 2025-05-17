car = {
    name : 'baleno',
    model : 'Hatch back',
    manufacturer : 'maruthi',
    price : "10lakhs"
}

// display car name and manufacturer name

console.log(`car name is ${car['name']}`);
console.log(car.manufacturer);

console.log('----------');

// check wheather  ' model' key is present or not , if present display the value

'model' in car? console.log( ` model is ${car['model']}`) : console.log('not preset');

console.log('----------');

// add 'varient' key to the car object with values as 'manuel'

car['varient'] = ['manuel']
console.log(car);

console.log('----------');

// update a new value 'automatic' to the car varient

car['varient'].push('Automatic')
console.log(car);
console.log('----------');


// create a new key 'color' with values as 'red' , 'blue', and 'green'

car['color'] = ['red', 'blue', 'green']
console.log(car);
