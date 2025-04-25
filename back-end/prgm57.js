// method over-riding

class A{
    method_a(){
        console.log(`first writtem method`);
        
    }
    method_a(){
        console.log(`second written method`);
        
    }
    method_a(){
        console.log(`third written method`);
        
    }

}
const obj = new A()
obj.method_a() // third written method