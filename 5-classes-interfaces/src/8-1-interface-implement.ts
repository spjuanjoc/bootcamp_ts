console.log("Module 5.Classes and interfaces");
console.log("8-1.Interfaces-implement");

{
interface IPrinter {
    id:string;
    print(message:string):void;
}

class ConsolePrinter implements IPrinter{
    constructor(public id:string) {

    }
    print(message: string): void {
        console.log(message);
    }
}

let cp = new ConsolePrinter("Printer1");
cp.print("Hello interfaces");
console.log(cp);
}
