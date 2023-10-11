import { renderHeader } from "./header";
import { renderMain } from "./main";
import { renderFooter } from "./footer";
import "./styles/reset.css";
import "./styles/style.css";
import "./img/github-mark.svg"

const projects = [
    {
        "name": "Inbox",
        "color": "green",
        "todoList": [
            {
                "name": "game",
                "description": "adasdadadas",
                "date": {
                    "year": 2023,
                    "month": 9,
                    "date": 8,
                    "day": 0
                }
            },
            {
                "name": "work",
                "description": "adasagagagsdadadas",
                "date": {
                    "year": 2023,
                    "month": 9,
                    "date": 8,
                    "day": 0
                }
            },
            {
                "name": "task",
                "description": "asdad",
                "date": {
                    "year": 2023,
                    "month": 9,
                    "date": 8,
                    "day": 0
                }
            }
        ]
    },
    {
        "name": "Home",
        "color": "blue",
        "todoList": []
    },
    {
        "name": "Today",
        "color": "red",
        "todoList": []
    }
];

class Project {
    constructor(name, color) {
        this.name = name;
        this.color = color ? color : 'gray';
        this.todoList = [];
        projects.push(this);
    }

    removeSelf() {
        projects.splice(projects.indexOf(this), 1)
    }
}

class Todo{
    constructor(name, description, project, date) {
        const today = new Date();
        this.name = name;
        this.description = description;
        if (date) {
            this.date = date;
        } else {
            this.date = {
                year: today.getFullYear(),
                month: today.getMonth(),
                date: today.getDate(),
                day: today.getDay(),
            };
        }
        project.todoList.push(this);
        console.log(this);
    }
}

new Todo('game', 'adasdadadas', {
    "name": "Today",
    "color": "red",
    "todoList": []
}, '')

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

renderHeader();
renderMain();
renderFooter();

export { createHtmlElement, projects }
