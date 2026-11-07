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
    discribe() {
        return `${this.name} earns ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    teamMemberCount;
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
}
const employee1 = new Employee("rakib", 22344);
const employee2 = new Employee("sakib", 22554);
const manager = new Manager("Mizan", 20000, 50);
console.log(employee1.discribe());
console.log(manager);
export {};
