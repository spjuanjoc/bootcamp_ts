console.log("Module 5.Classes and interfaces");
console.log("3.Overriding");
{
class Department {

    constructor(protected name: string, protected subdept: string = "") {
        this.name = name;
        this.subdept = subdept;
    }

    elaborate() {
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

    //overriding methods
    elaborate() {
        this.name = 'sub_' + this.name;
        console.log("sub-elaborate called instead: " + this.name);
    }
}

const it = new SubDepartment('IT', ['Admin']);
console.log(it);
it.elaborate();
}
