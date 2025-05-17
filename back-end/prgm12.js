// wrt prgm to display a number whose exponential is in the range of 8-36,where the user can input the power.

// user power-2
// 1^2 
// 1 4 9 16 25 36 49 64 81 100
// 3, 4, 5, 6

power = 2
num = 1
up = 36
low = 8

while(num<=up){
    if(num**power>=low && num**power<=up){
        console.log(num);   
    }
    num++
}
