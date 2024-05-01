class Bank{
    accountDetails={
        1000:{accno:1000,username:'userone',password:'userone',balance:50000},
        1001:{accno:1001,username:'usertwo',password:'usertwo',balance:5000},
        1002:{accno:1002,username:'userthree',password:'userthree',balance:10000},
        1003:{accno:1003,username:'userfour',password:'userfour',balance:6000},
    }
    
    validateAccount(accno){
      return  accno in this.accountDetails?true:false
    }
        //method to transfer fund
      fundTransfer(fromaccount, toaccount, amount){
        if(this.validateAccount(fromaccount) && this.validateAccount(toaccount)){
          
          if(this.accountDetails[fromaccount].balance>=amount){
             console.log(`current balance of ${fromaccount} is ${this.accountDetails[fromaccount].balance}`);
             console.log(`current balance of ${toaccount} is ${this.accountDetails[toaccount].balance}`);
             console.log(`amount transfered ${amount}`);
             this.accountDetails[fromaccount].balance-=amount
             this.accountDetails[toaccount].balance+=amount
             console.log(`final amount of ${fromaccount} is ${this.accountDetails[fromaccount].balance}`);
             console.log(`final amount of ${toaccount} is ${this.accountDetails[toaccount].balance}`);


          }
          else{console.log('insuffitiant balance');}
        }
        else{console.log('invalid');
        }
      }


}
const user1 = new Bank()
console.log(user1.validateAccount(1000)?'valid':'invalid')
user1.fundTransfer(1000,1001,3000)
