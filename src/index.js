// import { renderHeader } from "./header";
// import { renderMain } from "./main";
// import { renderFooter } from "./footer";
import "./styles/reset.css";
import "./styles/style.css";
import "./img/github-mark.svg"

const projects = [];

class Project {
    constructor(name, caption, color) {
        this.name = name;
        this.caption = caption;
        this.color = color;
        this.todos = [];

        projects.push(this);
    }

    removeSelf() {
        if (projects.length > 1) {
            projects.splice(projects.indexOf(this), 1)
        }
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
    constructor(name, caption, toCompleteDays, projectIndex) {
        this.name = name;
        this.caption = caption;
        this.toCompleteDays = toCompleteDays;

        this.projectIndex = projectIndex;
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

const startProject = new Project('Start project', 'Default project for your tasks', 'grey');

const firstTodo = new Todo('First todo', 'Make sure to your mom is happy', 1, projects.indexOf(startProject));


function createHtmlElement(tag, id, arrayClasses, content) {
    const element = document.createElement(tag);
    if (id) element.id = id;
    if (arrayClasses) {
        arrayClasses.forEach((Class) => {
            element.classList.add(Class)
        });

    }
    if (content) element.innerText = content;
    return element;
}

// projectInput
const createProjectInputContainer = createHtmlElement('div', 'create-project-input-container', [], '');
document.body.appendChild(createProjectInputContainer);

const projectNameInput = createHtmlElement('input', 'project-name-input', ['project-create-input'], '');
projectNameInput.placeholder = 'Name';
createProjectInputContainer.appendChild(projectNameInput);

const projectCaptionInput = createHtmlElement('input', 'project-caption-input', ['project-create-input'], '');
projectCaptionInput.placeholder = 'Caption';
createProjectInputContainer.appendChild(projectCaptionInput);

const projectColorInput = createHtmlElement('input', 'project-color-input', ['project-create-input'], '');
projectColorInput.type = 'color';
createProjectInputContainer.appendChild(projectColorInput);

const sumbitProjectButton = createHtmlElement('button', 'project-sumbit-button', [], 'Sumbit');
sumbitProjectButton.addEventListener('click', () => {
    const name = projectNameInput.value;
    projectNameInput.value = ''

    const caption = projectCaptionInput.value;
    projectCaptionInput.value = '';

    const color = projectColorInput.value;
    
    new Project(name, caption, color);
    displayProjects();
    renderOptions();
    // log
    console.log(projects);
})
createProjectInputContainer.appendChild(sumbitProjectButton);
// projectInput


// projectsDisplay
const projectsContainer = createHtmlElement('div', 'projects-container', [], '');
document.body.appendChild(projectsContainer);

function displayProjects() {
    projectsContainer.innerHTML = '';
    projects.forEach(project => {
        const projectCard = createHtmlElement('div', '', ['project-card'], '');
        projectsContainer.appendChild(projectCard);

        const projectName = createHtmlElement('h3', '', ['project-name'], project.name);
        projectCard.appendChild(projectName);

        const projectCaption = createHtmlElement('p', '', ['project-caption'], project.caption);
        projectCard.appendChild(projectCaption);
        
        const projectColor = createHtmlElement('span', '', ['project-color'], '');
        projectColor.style.backgroundColor = project.color;
        projectCard.appendChild(projectColor);

        const deleteProjectButton = createHtmlElement('button', '', ['delete-project-button'], 'X');
        deleteProjectButton.addEventListener('click', () => {
            project.removeSelf();
            displayProjects();
            renderOptions();
        })
        projectCard.appendChild(deleteProjectButton);

        const todosContainer = createHtmlElement('div', 'todos-container', [], '');
        projectCard.appendChild(todosContainer);

        project.todos.forEach(todo => {
            const todoCard = createHtmlElement('div', '', ['todo-card'], '');
            todosContainer.appendChild(todoCard);

            const todoName = createHtmlElement('h4', '', ['todo-name'], todo.name);
            todoCard.appendChild(todoName);

            const todoCaption = createHtmlElement('p', '', ['todo-caption'], todo.caption);
            todoCard.appendChild(todoCaption);

            const todoDaysToComplete = createHtmlElement('div', '', ['todo-days-to-complete'], todo.toCompleteDays);
            todoCard.appendChild(todoDaysToComplete);

            const deleteTodoButton = createHtmlElement('button', '', ['delete-todo-button'], 'X');
            deleteTodoButton.addEventListener('click', () => {
                todo.removeSelf();
                displayProjects();
            })
            todoCard.appendChild(deleteTodoButton);
        })
    })
}

displayProjects();
// projectsDisplay


function renderOptions() {
    todoProjectSelect.innerHTML = '';
    projects.forEach(project => {
        const option = createHtmlElement('option', '', ['project-select-option'], project.name)
        option.value = `${projects.indexOf(project)}`;
        todoProjectSelect.appendChild(option);
    })
}

//  todoInput
const createTodoInputContainer = createHtmlElement('div', 'create-todo-input-container', [], '');
document.body.appendChild(createTodoInputContainer);

const todoNameInput = createHtmlElement('input', 'todo-name-input', ['todo-create-input'], '');
todoNameInput.placeholder = 'Name';
createTodoInputContainer.appendChild(todoNameInput);

const todoCaptionInput = createHtmlElement('input', 'todo-caption-input', ['todo-create-input'], '');
todoCaptionInput.placeholder = 'Caption';
createTodoInputContainer.appendChild(todoCaptionInput);

const todoToCompleteDaysInput = createHtmlElement('input', 'todo-to-complete-days-input', ['todo-create-input'], '');
todoToCompleteDaysInput.type = 'Number';
todoToCompleteDaysInput.placeholder = 'Days to complete';
createTodoInputContainer.appendChild(todoToCompleteDaysInput);

const todoProjectSelect = createHtmlElement('select', 'todo-projects-input-container', [], '');
createTodoInputContainer.appendChild(todoProjectSelect);

renderOptions();

const sumbitTodoButton = createHtmlElement('button', 'todo-sumbit-button', [], 'Sumbit');
sumbitTodoButton.addEventListener('click', () => {
    const name = todoNameInput.value;
    todoNameInput.value = '';

    const caption = todoCaptionInput.value;
    todoCaptionInput.value = ''; 

    const daysToComplete = todoToCompleteDaysInput.value;
    todoToCompleteDaysInput.value = '';

    const projectIndex = todoProjectSelect.value;

    new Todo(name, caption, daysToComplete, projectIndex);
    displayProjects();
})
createTodoInputContainer.appendChild(sumbitTodoButton);

// todoInput