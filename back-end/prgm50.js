// oops

class employee{
    //property

    empid
    empname
    empdesig

    //constructors
    constructor(name,id,desig){
        this.empid = id
        this.empname = name
        this.empdesig = desig

    }

    //methods

    display(){
        console.log(`employee name is ${this.empname}`);
        console.log(`employee id ${this.empid}`);
        
    }
}

//object

const emp1 = new employee('fahma',1000, 'SE')
emp1.display()
const emp2 = new employee('max',200)
emp2.display()