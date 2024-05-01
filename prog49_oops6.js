//method overloading
class A{
    methoda(){
        console.log('inside first method');
    }
    methoda(n){
        this.n1=n
        console.log('inside second method');

    }
}
obj=new A
obj.methoda()//inside first method
obj.methoda(5)//inside second method, this.n1