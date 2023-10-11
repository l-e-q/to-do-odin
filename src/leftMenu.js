import { createHtmlElement } from "./index";

function render() {
    const leftMenu = createHtmlElement('div', 'left-menu', ['display-no'], '');
    document.querySelector('.main').appendChild(leftMenu);

    const tagsList = createHtmlElement('ul', 'tags-list', [], '');
    leftMenu.appendChild(tagsList);

    const tags = ['inbox', 'today', 'upcoming'];
    tags.forEach((tag) => {
        const tagElement = createHtmlElement('li', '', ['tags-list-item'], tag)
        tagsList.appendChild(tagElement);
    })

    const projectsList = createHtmlElement('ul', 'projects-list', [], '');
    leftMenu.appendChild(projectsList);

    const projects = ['work', 'home', 'def'];
    projects.forEach((project) => {
        const projectElement = createHtmlElement('li', '', ['projects-list-item'], project)
        projectsList.appendChild(projectElement);
    })
}

export { render as renderLeftMenu }