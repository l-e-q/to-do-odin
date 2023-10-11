const projects = [];

class Project{
    constructor(name, caption, color) {
        this.name = name;
        this.caption = caption;
        this.color = color;
        this.todos = [];
            
        projects.push(this);
    }

    removeSelf() {
        projects.splice(projects.indexOf(this), 1)
    }

    changeName(name) {
        this.name = name;
    }

    changeCaption(caption) {
        this.caption = caption;
    }

    changeColor(color) {
        this.color = color;
    }

}

class Todo {
    constructor(name, caption, toCompleteDays, project) {
        this.name = name;
        this.caption = caption;
        this.toCompleteDays = toCompleteDays;

        this.projectIndex = projects.indexOf(project);
        projects[this.projectIndex].todos.push(this);
    }

    removeSelf() {
        projects[this.projectIndex].todos.splice(projects[this.projectIndex].todos.indexOf(this), 1)
    }

    changeName(name) {
        this.name = name;
    }

    changeCaption(caption) {
        this.caption = caption;
    }

    changeToCompleteDays(toCompleteDays) {
        this.toCompleteDays = toCompleteDays;
    }
}

const startProject = new Project('Start project', 'Default project for your tasks', 'gray');

const firstTodo = new Todo('First todo', 'Make sure to your mom is happy', 1, startProject);

console.log(projects);
