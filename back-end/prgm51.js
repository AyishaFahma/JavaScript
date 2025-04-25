
// class Student{
//     //properties

//     s_rollno
//     s_name
//     s_age
//     s_course
//     s_mark

//     //constructors
//     constructor(num,name,age,course,mark){
//         this.s_rollno = num
//         this.s_name = name
//         this.s_age = age
//         this.s_course = course
//         this.s_mark = mark
//     }

//     //method

//     display(){
//         console.log(`rollnumber: ${this.s_rollno}`);
//         console.log(`name: ${this.s_name}`);
//         console.log(`age: ${this.s_age}`);
//         console.log(`course: ${this.s_course}`);
//         console.log(`mark: ${this.s_mark}`); 
        
//     }

// }
// const s1 = new Student(1,'fahma',23,'mearn',100) 
// s1.display()
// console.log('--------------------');

// const s2 = new Student(2,'asna',23,'python',100)
// s2.display()
// console.log('--------------------');

// const s3 = new Student(3,'max',25,'java',90)
// s3.display()
// console.log('--------------------');

// const s4 = new Student(4,'jhon',19,'AI',50)
// s4.display()
// console.log('--------------------');

//or


class Student{
    //properties
    

    //constructors
    constructor(num,name,age,course,mark){
        this.s_rollno = num
        this.s_name = name
        this.display()
    }

    //method

    display(){
        console.log(`rollnumber: ${this.s_rollno}`);
        console.log(`name: ${this.s_name}`); 
        
    }

}
const s5 = new Student(1,'fahma')
console.log('--------------------');
