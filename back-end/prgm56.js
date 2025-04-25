// polymorphism

// method loading

class A{
    method_a(){
        console.log(`inside method _a with no argument`);
        
    }
    method_a(num){
        console.log(`inside method _a with ${num} argument`);
        
    }
}
const obj = new A()
obj.method_a(2) // inside method _a with 2 argument verum ie method_a(num) work avum
obj.method_a() // inside method _a with undefined argument verum ie eppozhum method_a(num) aanu work ayath rather than method_a() 
// so here js doesnt support method overloading



// by using rest operator (...)

class Sum{
    sumofnumbers(n1,n2){
        console.log(`sum of ${n1} and ${n2} is ${n1+n2}`);
        
    }
    sumofnumbers(n1,n2,n3){
        console.log(`sum of ${n1},${n2} and ${n3} is ${n1+n2+n3}`);
        
    }
}
const obj1 = new Sum()
obj1.sumofnumbers(2,1) // sum of 2,1 and undefined is NaN
obj1.sumofnumbers(2,1,1) // sum of 2,1 and 1 is 4



class Sum1{
    sumofnumbers(...arg){
        console.log(arg); //[ 2, 1 ] // [ 2, 1 ,1]

        let total = arg.reduce( (n1,n2)=>n1+n2)
        console.log(`sum of the given number is ${total}`);
        
    }
}

const obj2 = new Sum1()
obj2.sumofnumbers(2,1) //sum of the given number is 3
obj2.sumofnumbers(2,1,1) //sum of the given number is 4
