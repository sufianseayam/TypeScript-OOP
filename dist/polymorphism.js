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
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("salary cannot be negative");
        }
        this._baseSalary = newSalary;
    }
    calculatePay(taxRate) {
        return this.baseSalary - this.baseSalary * taxRate;
    }
}
class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
}
const employee1 = new Employee("rakib", 25000);
const manager = new Manager("Sufian", 35000);
employee1.calculatePay(0.1);
manager.calculatePay();
export {};
