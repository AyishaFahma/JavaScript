accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]



//1. total number of accounts

console.log('total number of accounts');

console.log(accounts.length);

console.log('-----------');

//2. print account number whose ac_type is savings

console.log('account number whose ac_type is savings');

accounts.filter( (item) => item.ac_type == 'savings').forEach( (item) => console.log(item.acno))

//or

// accounts.forEach( (element) => {element['ac_type'] == 'savings'  && console.log(element['acno'])})

console.log('-----------');


//3.print the balance of accnount number 1000

console.log('print the balance of accnount number 1000');

accounts.filter( (item) => item.acno == 1000).forEach( (ac_item) => console.log(ac_item.balance))

//or

 //  console.log(accounts.find( (item) =>  item.acno == 1000).balance)

console.log('-----------');

//4. print all gpay transactions 

console.log('print all gpay transactions');

// accounts.filter( (item) => item.transaction.filter( (item) => item.mode == 'gpay').forEach( (item) => console.log(item)))

//or

accounts.map( (item) => item.transaction).flat().filter( (item) => item.mode == 'gpay').forEach( (trans) => console.log(trans))



console.log('-----------');

//5. print all transaction whose amount > 5000 

console.log('all transaction whose amount > 5000');

// accounts.filter( (item) => item.transaction.filter( (item) => item.amount > 5000 ).forEach((item)=> console.log(item)))

//or

accounts.map( (item) => item.transaction).flat().filter( (item) => item.amount > 5000).forEach( (trans)=> console.log(trans))


console.log('-----------');

//6. print credit transaction of account 1002

console.log('credit transaction of account 1002');

credit = accounts.map( (item) =>item.transaction).flat().filter( (item) => item.to == 1002)
console.log(credit);


console.log('-----------');

//7. print debit transaction of account 1002

console.log('debit transaction of account 1002');

debit = accounts.find( (item) => item.acno ==1002).transaction
console.log(debit);


console.log('-----------');

//8. print transaction history of 1002

console.log('transaction history of 1002'); // both debit and credit

transHis = {
    creditHis : credit ,
    debitHis : debit
}

console.log(transHis);

console.log('-----------');

// by using spread operator

history = [...credit,...debit]
console.log(history);

console.log('-----------');

//9. print highest balance account details

console.log('highest balance account details');

console.log(accounts.reduce( (ac1,ac2) => ac1.balance > ac2.balance ? ac1 : ac2))

console.log('-----------');
