class Bank{
    //property

    accountsDetails = {
        1000 : {acno:1000, username: 'userone', password: 'userone', balance: 5000},

        1001 : {acno:1001, username: 'usertwo', password: 'usertwo', balance: 10000},

        1002 : {acno:1002, username: 'userthree', password: 'userthree', balance: 6000},

        1003 : {acno:1003, username: 'userfour', password: 'userfour', balance: 2000},
    }

    // w.a. method to validate an account

    validate(acno){        
        return acno in this.accountsDetails ? true : false  
    }

    // w.a.method to authenticate an account

    authenticate(acno, pswd){

        if(this.validate(acno)){

            if(this.accountsDetails[acno].password == pswd){

                console.log('authentication successfull');
                
            }
            else{

                console.log('incorrect acnumber or password');
                
            }

        }
        else{
            console.log('incorrect acno number');
            
        }
    }

    // w.a. m to check the balance of an account


    balance( acno, pwd ){
        if(this.validate(acno)){
            if(this.accountsDetails[acno].password == pwd){

                console.log(this.accountsDetails[acno].balance)

            }
            else{
                console.log('incorrect acnumber or password');
                
            }


        }
        else{
            console.log('account does not exist');
            
        }

    }

    // w.a.m to transfer an amount from one account to another

    transfer( from_acno, pswd, to_acno, money ){
        if(this.validate(from_acno) && this.validate(to_acno)){

            if(this.accountsDetails[from_acno].password == pswd){

                if(this.accountsDetails[from_acno].balance >= money){

                    console.log('--------before-------');
                    

                    console.log(`balance of ${from_acno} is : ${this.accountsDetails[from_acno].balance} and balance of ${to_acno} is : ${this.accountsDetails[to_acno].balance} before fund transfer`);


                        this.accountsDetails[from_acno].balance -= money

                        this.accountsDetails[to_acno].balance += money

                        console.log('--------after-------');


                        console.log(`balance of ${from_acno} is : ${this.accountsDetails[from_acno].balance} and balance of ${to_acno} is : ${this.accountsDetails[to_acno].balance} after fund transfer`);

                }
                else{
                    console.log('in-sufficient money');
                    
                }


            }
            else{
                console.log('incorrect acnumber or password');
                
            }

        }
        else{
            console.log('acnumber does not exist');
            
        }

    }

}


const obj = new Bank()
console.log(obj.validate(1000)? 'account exist' : 'no such account number in account details')

obj.authenticate(1000,'userone')

obj.balance(1003,'userfour')

obj.transfer(1001,'usertwo',1003,1000)
