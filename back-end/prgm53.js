// single inheritance or inheritance
class A{
    methoda(){
        console.log('inside class a method a');
        
    }
}

class B extends A{
    methodb(){
        console.log('inside class b method b');
        
    }
}

const obj = new B()
obj.methodb()
// obj.methoda() // this wont work unless extends cheythilla engil coz
// obj nnu paranjath B nnu paranja classinu vendi mathram ullathanu so B clssil methoda nnu paranja method illannu error verum 
// so evde angane use akkanam ennundeel extends cheyyanam

obj.methoda()