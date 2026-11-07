//Encapsulation
//access modifier
//1.Public 2.Private 3.Protected
//4.read-only
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    get salaryWithBonus() {
        return this._baseSalary + 5000;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("salary cannot be negative");
        }
        this._baseSalary = newSalary;
    }
}
const employee1 = new Employee("rakib", 22344);
const employee2 = new Employee("sakib", 22554);
employee1.baseSalary = 50000;
console.log(employee1.salaryWithBonus);
export {};
