// hierarchial inheritance

class A{
    methoda(){
        console.log('inside class A method a');
        
    }
}

class B extends A{
    methodb(){
        console.log('inside class B method b');
        
    }
}

class C extends A{
    methodc(){
        console.log('inside class C method c');
        
    }
}

const obj = new C()
obj.methodc()
obj.methoda()
