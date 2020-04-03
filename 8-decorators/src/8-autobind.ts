console.log("8.Decorators");
console.log("8.autobind");
{
function AutoBindDecorator(target, name, descriptor) {
    const original = descriptor.value;
    const adjusted = {
        configurabe:true,
        enumerable: false,
        get(){
            return original.bind(this);
        }
    };
    return adjusted;
}

class ButtonMessage {
    message = 'Clicked';

    //manually bound
    showMessageManual() {
        console.log(this.message);
    }

    //auto bound
    @AutoBindDecorator
    showMessageAuto() {
        console.log(this.message);
    }
}

let bm = new ButtonMessage();

const button1 = document.getElementById('button1');

if (button1) {
    //Manually bound
    button1.addEventListener('click', bm.showMessageManual.bind(bm));

    //Auto bound
    button1.addEventListener('click', bm.showMessageAuto);
}
}
