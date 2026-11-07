class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
const employee1 = new Employee("rakib", 22344);
const employee2 = new Employee("sakib", 22554);
console.log(employee1);
console.log(employee2);
export {};
