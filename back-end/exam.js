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