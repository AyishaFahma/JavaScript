class Landing{

    //properties

    database = {

        "milan" : {username : 'Milan' , password : 'milan123'},
        "mini" : {username : 'Mini' , password : 'mini123'},
        "manu" : {username : 'Manu' , password : 'manu123'}

    }

    // method to store this database data in to browser storage

    saveData(){

        if(this.database){
            localStorage.setItem("database", JSON.stringify(this.database))
        }
    }

    //register

    register(){
        console.log(reguser.value);
        console.log(regpass.value);
        
        
    }

 
}

const obj = new Landing()
obj.saveData()

