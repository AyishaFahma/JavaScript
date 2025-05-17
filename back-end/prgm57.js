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




class animal{
    speak(){
        console.log('animal make sound');
        
    }
}

class Dog extends animal{
    speak(){
        console.log('dog barks');
        
    }
}


class Cat extends animal{
    speak(){
        console.log('cat meows');
        
    }
}

const c = new Cat()
c.speak()