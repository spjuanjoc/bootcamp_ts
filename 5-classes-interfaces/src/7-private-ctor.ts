console.log("Module 5.Classes and interfaces");
console.log("7.Private ctor");
{
abstract class Department {

    constructor(protected name: string, protected subdept: string = "") {
        this.name = name;
        this.subdept = subdept;
    }

    abstract elaborate();

    private employees: string[] = [];

    addEmployees(name: string) {
        this.employees.push(name);
    }

    showEmployees() {
        console.log("Number of employees: " + this.employees.length);
        console.log("Names: ");
        console.log(this.employees);
    }

    //statics
    static year = 2020;

    static manager() {
        console.log("This is the manager in: " + this.year.toString());
    }
}

class SubDepartment extends Department {

    private static instance: SubDepartment;

    static getInstance() {
        if (!SubDepartment.instance) {
            SubDepartment.instance = new SubDepartment("", "");
        }
        return SubDepartment.instance;
    }

    private constructor(name, sub) {
        super(name, sub);
    }

    elaborate() {
        console.log(" Department is: " + this.name);
    }
}

// const obj = new SubDepartment('Main', "Sub");
const obj = SubDepartment.getInstance();
console.log(obj);
obj.addEmployees("Jane Doe");
obj.showEmployees();
}
