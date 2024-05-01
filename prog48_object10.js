accounts=[
           
    {
        acno: 1000, ac_type: 'savings', balance: 45000, transaction:[
            {to:1001, amount:5000,msg: 'ebill', mode: "gpay"},
            {to: 1002, amount:2000,msg:'emi', mode: "neft"},
            {to: 1003, amount: 1000, msg:'recharge', mode: 'phonePay'},
            

        ]
        
    },
    {
        acno: 1001, ac_type: 'current', balance: 30000, transaction: [
            {to: 1000, amount:1000, msg:'grossary', mode: 'gpay'},
            {to: 1002, amount:7000, msg: 'gift', mode: 'phonePay'},
            {to: 1003, amount:10000,msg:'emi', mode: 'neft'},
        ]
    },
    {
        acno: 1002, ac_type: 'fixed', balance: 100000, transaction: [
            {to: 1000, amount:5000, msg:'ebill', mode: 'gpay'},
            {to: 1001, amount:2000, msg: 'emi', mode: 'neft'},
            {to: 1003, amount:1000,msg:'recharge', mode: 'phonepay'},
        ]
        
    },
    {
        acno: 1003, ac_type: 'savings', balance: 30000, transaction: [
            {to: 1001, amount:5000, msg:'ebill', mode: 'gpay'},
            {to: 1002, amount:2000, msg: 'emi', mode: 'neft'},
            {to: 1000, amount:1000, msg:'recharge', mode: 'phonepay'},
        ]

    }

]
//1.total number of accounts
console.log('total number of accounts');
console.log(`total number of accounts: ${accounts.length}`);
console.log('---------------------');
//2.print account number whose ac_type is savings
console.log('print account number whose ac_type is savings');
accounts.filter(data=>data.ac_type=='savings').forEach(item => {console.log(item.acno);});
console.log('--------------------------------------');
//3.print the balance of account number 1000
console.log('print the balance of account number 1000');
acno=accounts.find(data=>data.acno==1000)
console.log(acno.balance);
console.log('------------------------------------');
//4.print all gpay transactions
console.log('print all gpay transactions');
accounts.map(data=>data.transaction).flat().filter(data=>data.mode=='gpay').forEach(item=>{console.log(item);})
console.log('ttttttttttttttttttttttttttttttttttttttt');
//5.print all transaction whose amount > 5000
console.log('print all transaction whose amount > 5000');
accounts.map(data=>data.transaction).flat().filter(item=>item.amount>5000).forEach(item=>{console.log(item);})
console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
//6.print credit transaction of account 1002
credittrans=accounts.map(data=>data.transaction).flat().filter(data=>data.to==1002)
console.log(credittrans);
console.log('ooooooooooooooooooooooooooooooo');
//7.print debit transaction of account 1002
console.log('print debit transaction of account 1002');
debittrans=accounts.find(data=>data.acno==1002).transaction
console.log(debittrans);
console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjj');
//print transaction history of 1002 (taking credit and debit from 6 and 7th question)
transhist={
    credit:credittrans,
    debit:debittrans
}
console.log(transhist);
console.log('llllllllllllllllllllllllll');
//array creation
console.log('array creation');
hist=[
    credittrans,debittrans
]
//spred operator= ...credittrans,...debittrans
console.log(hist);
console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnn');
//print highest balance account details
console.log('print highest balance account details');
a=accounts.reduce((data1,data2)=>data1.balance>data2.balance?data1:data2)
console.log(a);