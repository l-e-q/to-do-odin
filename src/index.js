import { renderHeader } from "./header";
import { renderMain } from "./main";
import { renderFooter } from "./footer";
import { renderLeftMenu } from "./leftMenu";
import "./styles/style.css";
import "./img/github-mark.svg"

class Project {
    constructor(name, color) {
        this.name = name;
        this.color = color ? color : 'gray';
        this.todoList = [];
    }
}

class Todo{
    constructor(name, description, project, date) {
        const today = new Date();
        this.name = name;
        this.description = description;
        this.project = project;
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
    }
}

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
renderLeftMenu();
renderFooter();

export { createHtmlElement }
