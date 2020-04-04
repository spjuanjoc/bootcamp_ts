console.log('9.Drag adn drop project');
console.log('1-load-form');
class ProjectInput {
    templateElement: HTMLTemplateElement;
    divHostElement: HTMLDivElement;
    // inside node
    element: HTMLFormElement;

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.divHostElement = document.getElementById('app')! as HTMLDivElement;

        const node = document.importNode(this.templateElement.content, true);
        this.element = node.firstElementChild as HTMLFormElement;
        this.attach();

    }

    private attach(){
        this.divHostElement.insertAdjacentElement('afterbegin', this.element)
    }
}

//Load the form when instantiated
const main = new ProjectInput();
