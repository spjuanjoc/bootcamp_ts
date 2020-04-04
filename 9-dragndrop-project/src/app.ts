console.log('9.Drag adn drop project');
console.log('5.push-project');

//Validate decorator
interface Valid {
    value;
    required?;
    minStrLength?;
    maxStrLength?;
    minNum?;
    maxNum?;
}

function validate(valid: Valid) {
    let isValid = true;
    if (valid.required) {
        isValid = isValid && valid.value.trim().length != 0;
    }
    return isValid;
}

///
class ProjectInput {
    templateElement: HTMLTemplateElement;
    divHostElement: HTMLDivElement;
    // inside node
    element: HTMLFormElement;
    //Elements
    htitle: HTMLInputElement;
    hdescription: HTMLInputElement;
    hpeoplelist: HTMLInputElement;
    activeProjects: ProjectList;
    finishedProjects: ProjectList;

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

//Project list
class ProjectList {
    templateElement: HTMLTemplateElement;
    divHostElement: HTMLDivElement;
    // inside node
    element: HTMLFormElement;
    projectsList = [];
    state: ProjectState;

    constructor(private type: 'active' | 'finished') {
        this.templateElement = document.getElementById('project-list') as HTMLTemplateElement;
        this.divHostElement = document.getElementById('app') as HTMLDivElement;
        const node = document.importNode(this.templateElement.content, true);

        this.element = node.firstElementChild as HTMLFormElement;
        this.element.id = `${this.type}-projects`;
        this.state = new ProjectState();

        this.state.addListener((projects) => {
            this.projectsList = projects;
            this.refreshList();
        });

        this.loadElement();
        this.renderList();

    }

    private loadElement() {
        this.divHostElement.insertAdjacentElement('beforeend', this.element)
    }

    private renderList() {
        this.element.querySelector('ul').id = `${this.type}-projects-list`;
        this.element.querySelector('h2').textContent = this.type.toUpperCase() + ' PROJECTS';
    }

    private refreshList() {
        const listElement = document.getElementById(`${this.type}-projects-list`) as HTMLUListElement;
        listElement.innerHTML = '';
        for (const item of this.projectsList) {
            const listItem = document.createElement('li');
            listItem.textContent = item.title;
            listElement.appendChild(listItem);
        }
    }
}

//
class ProjectState {
    private projectsList: any[] = [];
    private listeners: any[] = [];

    constructor() {
    }

    pushProject(title, description, peopleList) {
        console.log('Project pushed');
        const project = {
            id: Math.random().toString(),
            title: title,
            description: description,
            peopleList: peopleList
        };

        this.projectsList.push(project);
        console.log(this.projectsList);

        for (const listenerCallback of this.listeners) {
            listenerCallback(this.projectsList.slice());// slice: return only a copy, don't modify
        }
    }

    addListener(listenerCallback) {
        this.listeners.push(listenerCallback);
    }

}

//Load the form when instantiated
const main = new ProjectInput();
// const activeList = new ProjectList('active');
// const finishedList = new ProjectList('finished');
// const projectsList = new ProjectState();
