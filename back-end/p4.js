//Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

//The digit sum of a positive integer is the sum of all its digits.

num = 4
number1 = []
result = []
for (i = 1; i <= num; i++) {
    temp = i
    sum = 0
    while (temp > 0) {
        last = temp % 10
        sum = sum + last
        temp = Math.floor(temp / 10)
    }
    number1.push(sum)
}
for (item of number1) {
    if (item % 2 == 0) {
        result.push(item)
    }
}
l = result.length
console.log(l);
