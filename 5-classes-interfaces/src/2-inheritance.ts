console.log("Module 5.Classes and interfaces");
console.log("2.Inheritance");
{
class Department {

    constructor(private name: string, private readonly subdept: string = "") {
        this.name = name;
        this.subdept = subdept;
    }

    elaborate() {
        console.log(`Literal string ${this.name}`);
        console.log(" Department is: " + this.name);
    }

    private employees: string[] = [];

    addEmployees(name: string) {
        this.employees.push(name);
    }

    showEmployees() {
        console.log("Number of employees: " + this.employees.length);
        console.log("Names: ");
        console.log(this.employees);
    }
}

class SubDepartment extends Department{
    admins:string[] ;
    constructor(id:string, admins:string[]) {
        super(id,'SUB');
        this.admins = admins;

    }
}
const dept = new Department('Software', 'Elections');
console.log(dept);

const it = new SubDepartment('IT', ['Admin']);
console.log(it);
}
