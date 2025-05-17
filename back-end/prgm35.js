//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
console.log('----------------------');
//1. district having Highest +ve case 
// calicut
console.log('district having Highest +ve case');

pc = covid_data.reduce( (case1,case2) => case1[2] > case2[2]? case1 : case2 )
console.log(pc[1]);

console.log('----------------------');

//2. district having Highest 1st dose vaccine
// idukki
console.log('district having Highest 1st dose vaccine');

dose = covid_data.reduce( (d1,d2) => d1[5] > d2[5]? d1 :d2)
console.log(dose[1]);

console.log('----------------------');

//3. district having lowest death rate
//palakkad
console.log('district having lowest death rate');

d = covid_data.reduce( (dth1, dth2) => dth1[3] < dth2[3] ? dth1 : dth2)
console.log(d[1]);

console.log('----------------------');

//4. sort data with +ve case in descending order

console.log('data with +ve case in descending order');

a1 = covid_data.sort( (x,y) => y[2] - x[2])
console.log(a1);

console.log('----------------------');

//5. is district with +ve cases > 15000

console.log('is district with +ve cases > 15000');

console.log(covid_data.some( (item) => item[2] > 15000)?'yes present':'no');

console.log('----------------------');

//6. sort data with 1st dose vaccine ascending order

console.log('data with 1st dose vaccine ascending order');

console.log(covid_data.sort( (x,y) => x[5] - y[5]));

console.log('----------------------');

//7. Print Thrissur details

console.log('Thrissur details');

console.log(covid_data.find( (item) => item[1] == 'Thrissur'));

console.log('----------------------');

//8. Print total number of positive cases

console.log('total number of positive cases');

console.log(covid_data.map( (item) => item[2]).reduce( (case1,case2) => case1 + case2));

console.log('----------------------');

//9. Print total number of curred cases

console.log('total number of curred cases');

console.log(covid_data.map( (item) => item[4]).reduce( (case1,case2) => case1 + case2));

console.log('----------------------');

//10. Print curred cases in Idukki

console.log('curred cases in Idukki');

covid_data.filter( (item) => item[1] == 'Idukki').forEach( (item) => console.log(item[4]))

console.log('----------------------');
