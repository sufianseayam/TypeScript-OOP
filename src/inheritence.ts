

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


   discribe():string{
    return `${this.name} earns ${this.baseSalary}`
   }

}
class Manager extends Employee{
    teamMemberCount:number;


    constructor(name:string ,_baseSalary:number , teamMemberCount:number){
        super(name,_baseSalary)
        this.teamMemberCount=teamMemberCount;
    }

}



const employee1=new Employee("rakib",22344)
const employee2=new Employee("sakib",22554)

const manager=new Manager("Mizan",20000,50)

console.log(employee1.discribe());
console.log(manager);

