car = {
    name : 'baleno',
    model : 'Hatch back',
    manufacturer : 'maruthi',
    price : "10lakhs",
    address : {
        city : 'tirur',
        code : 676101
    }
}
console.log(car);
console.log(car.name);
console.log(car.address);
console.log(car.address.city);
console.log('model' in car); // boolean
console.log('code' in car); // false
console.log('code' in car.address);

console.log('---------------------------');
 
a = new Array()
a.push(10)
a.push('hi')
console.log(a);

a = new Object()
a.name = 'rani'
a.age = 34
a['place'] = 'malappuram'
console.log(a);








