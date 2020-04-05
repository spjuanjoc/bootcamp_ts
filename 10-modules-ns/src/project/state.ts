namespace State {
    export class ProjectState {
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
}
