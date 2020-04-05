import {ProjectList} from "./list.js";
import {validate} from "../utils/validate.js"

export class ProjectInput {
    templateElement: HTMLTemplateElement;
    divHostElement: HTMLDivElement;
    // inside node
    element: HTMLFormElement;
    //Elements
    htitle: HTMLInputElement;
    hdescription: HTMLInputElement;
    hpeoplelist: HTMLInputElement;
    activeProjects: ProjectList;

    // finishedProjects: List.ProjectList;

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

        this.activeProjects = new ProjectList('active');
        // this.finishedProjects = new ProjectList('finished');
        this.listenSubmitButton();
        this.loadElement();
    }

    private submitHandler(event) {
        event.preventDefault();
        const input = this.gatherInput();
        if (Array.isArray(input)) {
            const [title, descr, plist] = input;
            console.log(title, descr, plist);
            this.activeProjects.state.pushProject(title, descr, plist);
            this.cleanup();
        }
        // console.log(this.htitle.value);
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

        if (!validate({value: title, required: true})) {
            alert('Title is required');
        } else if (!validate({value: description, required: true})) {
            alert('Description is mandatory');
        }
        //if empty
        //alert
        return [title, description, +peoplelist];
    }

    private cleanup() {
        this.htitle.value = '';
        this.hdescription.value = '';
        this.hpeoplelist.value = '0';
    }
}
