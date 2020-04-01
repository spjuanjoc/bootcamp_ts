console.log("Module 5.Classes and interfaces");
{
console.log("1.Classes");
class Department{
    name: string;

    //1. Ctor
    // constructor(n:string) {
    //     this.name = n;
    // }

    //2. Methods
    elaborate(){
        console.log(`Literal string ${this.name}`);
        console.log(" Department is: " + this.name);
    }

    //3. Access modifiers
    private employees: string[] = [];

    addEmployees(name:string){
        this.employees.push(name);
    }

    showEmployees(){
        console.log("Number of employees: " + this.employees.length);
        console.log("Names: ");
        console.log(this.employees);
    }

    //4. short hand init
    constructor(name:string, private readonly subdept:string = "") {
        this.name = name;
        this.subdept = subdept;
    }


}

const dept = new Department('Software','Elections');

console.log(dept);
console.log(dept.name);

dept.elaborate();
dept.addEmployees('Jane Doe');
dept.addEmployees('John Doe');
// dept.employees.push('me'); //compile error for private members
dept.showEmployees();
}
