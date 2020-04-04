console.log('9.Drag adn drop project');
console.log('3.validate-decorator');

class ProjectInput {
    templateElement: HTMLTemplateElement;
    divHostElement: HTMLDivElement;
    // inside node
    element: HTMLFormElement;
    //Elements
    htitle: HTMLInputElement;
    hdescription: HTMLInputElement;
    hpeoplelist: HTMLInputElement;

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.divHostElement = document.getElementById('app')! as HTMLDivElement;

        const node = document.importNode(this.templateElement.content, true);
        //inside node
        this.element = node.firstElementChild as HTMLFormElement;
        //inside element
        this.element.id = 'user-input';
        //Elements
        this.htitle = this.element.querySelector('#title') as HTMLInputElement;//# query by id
        this.hdescription = this.element.querySelector('#description') as HTMLInputElement;//# query by id
        this.hpeoplelist = this.element.querySelector('#people') as HTMLInputElement;//# query by id

        this.listenSubmitButton();
        this.loadElement();
    }

    private submitHandler(event) {
        event.preventDefault();
        const input = this.gatherInput();
        if (Array.isArray(input)) {
            const [title, descr, plist] = input;
            console.log(title, descr, plist);
        }
        console.log(this.htitle.value);

    }

    private listenSubmitButton() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }

    private loadElement() {
        this.divHostElement.insertAdjacentElement('afterbegin', this.element)
    }

    private gatherInput(): [string, string, number]/*returns 3 */ {
        console.log('gathering information');
        const title = this.htitle.value;
        const description = this.hdescription.value;
        const peoplelist = this.hpeoplelist.value;

        if(!validate({value:title, required:true})){
            alert('Title is required');
        }
        else if(!validate({value:description, required:true})){
            alert('Description is mandatory');
        }
        //if empty
        //alert
        return [title, description, +peoplelist];
    }
}

//Validate decorator
interface Valid{
    value;
    required?;
    minStrLength?;
    maxStrLength?;
    minNum?;
    maxNum?;
}
function validate(valid:Valid){
    let isValid =  true;
    if (valid.required){
        isValid = isValid && valid.value.trim().length != 0;
    }
    return isValid;
}


//Load the form when instantiated
const main = new ProjectInput();
