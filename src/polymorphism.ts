

class Employee{
  constructor( public name:string;
   private _baseSalary:number){ }

   get baseSalary():number{
    return this._baseSalary
   }



   set baseSalary(newSalary:number){
    if(newSalary<0){
        throw new Error("salary cannot be negative")
    }
    this._baseSalary=newSalary;
   }

   calculatePay(taxRate:number){
    return this.baseSalary - this.baseSalary *taxRate
   }

   


 
}
class Manager extends Employee{
   override calculatePay(){
        return this.baseSalary+5000;
    }
}




const employee1=new Employee("rakib",25000)
const manager=new Manager("Sufian", 35000)
employee1.calculatePay(0.1)
manager.calculatePay()

