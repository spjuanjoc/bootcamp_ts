/// <reference path="state.ts" />

namespace List {

//Project list
    export class ProjectList {
        templateElement: HTMLTemplateElement;
        divHostElement: HTMLDivElement;
        // inside node
        element: HTMLFormElement;
        projectsList = [];
        state: State.ProjectState;

        constructor(private type: 'active' | 'finished') {
            this.templateElement = document.getElementById('project-list') as HTMLTemplateElement;
            this.divHostElement = document.getElementById('app') as HTMLDivElement;
            const node = document.importNode(this.templateElement.content, true);

            this.element = node.firstElementChild as HTMLFormElement;
            this.element.id = `${this.type}-projects`;
            this.state = new State.ProjectState();

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
}
