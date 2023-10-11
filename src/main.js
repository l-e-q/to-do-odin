import { createHtmlElement } from "./index";
import { renderLeftMenu } from "./leftMenu";

function render() {
    const main = createHtmlElement('main', '', ['main'], '');
    document.body.appendChild(main);

    renderLeftMenu();

    const mainContent = createHtmlElement('div', 'content', [], '');
    main.appendChild(mainContent);

    const projectName = createHtmlElement('h1', 'project-name', [], 'Inbox');
    mainContent.appendChild(projectName);

    const todoList = createHtmlElement('ul', 'todo-list', [], '');
    mainContent.appendChild(todoList);

    

}

export { render as renderMain }
