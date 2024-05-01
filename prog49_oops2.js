class Bank{
    accountDetails={
        1000:{accno:1000,username:'userone',password:'userone',balance:50000},
        1001:{accno:1001,username:'usertwo',password:'usertwo',balance:5000},
        1002:{accno:1002,username:'userthree',password:'userthree',balance:10000},
        1003:{accno:1003,username:'userfour',password:'userfour',balance:6000},
    }
    //method to validate account
    validateaccount(accno){
        return accno in this.accountDetails?true:false
    }
   //-----------------------------------------------------------------------------------------------------
   //---------------------------------------------------------------------------------------------------------
     //method to authenticate account
     authenticateAccount(accno,pswd){
    if(this.validateaccount(accno)){
             if(this.accountDetails[accno].password==pswd){
                  console.log('authentication successfull');
             }
             else{
                console.log('invalid password');
             }
        }
        else{
            console.log('invalid account');
        }
     }
     //------------------------------------------------------------------------------------------------------
     //--------------------------------------------------------------------------------------------------
          //method to check the balance of a given account
        getBalance(accno,pswd){
            if(this.validateaccount(accno)){
                  if(this.accountDetails[accno].password==pswd){
                    console.log(`current balance of your account number ${accno} is ${this.accountDetails[accno].balance}`);
                  }
                  else{console.log('password incorrect');}
            }
            else{
                console.log('invalid account');
            }
        }
        //---------------------------------------------------------------------
        //-----------------------------------------------------------------
            //method to transfer fund
            fundTransfer(fromaccnt,toaccnt,amount){
                if(this.validateaccount (fromaccnt) && this.validateaccount(toaccnt)){
                    if(this.accountDetails[fromaccnt].balance>=amount){
                        console.log(`current balance of ${fromaccnt} is ${this.accountDetails[fromaccnt].balance} \n current balance of ${toaccnt} is ${this.accountDetails[toaccnt].balance}`);

                        console.log(`amount transfered ${amount}`);
                        this.accountDetails[fromaccnt].balance=this.accountDetails[fromaccnt].balance-amount
                        this.accountDetails[toaccnt].balance+=amount
                        console.log(`final balance of ${fromaccnt} is ${this.accountDetails[fromaccnt].balance}`);
                        console.log(`final balance of ${toaccnt} is ${this.accountDetails[toaccnt].balance}`);
                    }
                    else{console.log('insuffitiant balance');}
                }
                else{console.log('invalid account');}
            }
}
const user1 = new Bank()
console.log(user1.validateaccount(1000)?'valid':'invalid')
console.log('----------------------------');
    user1.authenticateAccount(1000,'userone')
    console.log('----------------------------');
    user1.getBalance(1001,'usertwo')
    console.log('-hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
    user1.fundTransfer(1001,1002,3000)
   
