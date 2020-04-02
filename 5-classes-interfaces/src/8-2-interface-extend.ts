console.log("Module 5.Classes and interfaces");
console.log("8-2.Interfaces-extend");
{
interface IPrinter {
    id:string;
    print(message:string):void;
}
interface IScanner{
    scan(image: string):void;
}

interface IMachine extends IPrinter, IScanner{
    //optional properties
    machineName?:string;
}

class Machine implements IMachine{
    id:string;
    machineName;

    print(message: string): void {
        console.log("Print message: " + message);
    }

    scan(image: string): void {
        console.log("Scanned image: " + image);
    }
    setMachineName(name:string){
        this.machineName = name;
    }
}

let m = new Machine();
m.print("Hello interfaces");
m.scan("Image1");
m.setMachineName("MachineName");
console.log(m);
}
