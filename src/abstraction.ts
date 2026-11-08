abstract class Employee{
  constructor( public name:string,
   protected _baseSalary:number){ }

   get baseSalary():number{
    return this._baseSalary
   }



   set baseSalary(newSalary:number){
    if(newSalary<0){
        throw new Error("salary cannot be negative")
    }
    this._baseSalary=newSalary;
   }

abstract calculatePay():number;




}

class Manager extends Employee{
    calculatePay(){
        return this.baseSalary+5000
    }
}
class Developer extends Employee{
    calculatePay(){
        return this.baseSalary+2000
    }
}