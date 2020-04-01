console.log("Module 5.Classes and interfaces");
console.log("5.Statics");
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

    //statics
    static year = 2020;
    static manager(){
        console.log("This is the manager in: " + this.year.toString());
    }
}


const it = new Department('Main', "Sub");
console.log(it);
Department.manager();
}
