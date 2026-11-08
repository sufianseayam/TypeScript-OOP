//Encapsulation

//access modifier

//1.Public 2.Private 3.Protected

//4.read-only

class Employee{
  constructor( public name:string,
   private _baseSalary:number){ }

   get baseSalary():number{
    return this._baseSalary
   }

get salaryWithBonus():number{
    return this._baseSalary+5000
}


   set baseSalary(newSalary:number){
    if(newSalary<0){
        throw new Error("salary cannot be negative")
    }
    this._baseSalary=newSalary;
   }

}

const employee1=new Employee("rakib",22344)
const employee2=new Employee("sakib",22554)

employee1.baseSalary=50000

console.log(employee1.salaryWithBonus);
