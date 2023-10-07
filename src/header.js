import { createHtmlElement } from "./index";


function render() {
    const header = createHtmlElement('header', 'header', [], '');
    document.body.appendChild(header);

    const leftHeader = createHtmlElement('ul', 'left-header', ['header-list'], '');
    header.appendChild(leftHeader);

    const listMenuElement = createHtmlElement('li', 'left-header-list-menu', ['left-header-list-item'], '');
    leftHeader.appendChild(listMenuElement);

    const headerMenuButton = createHtmlElement('button', 'header-menu-button', ['header-button'], 'Menu')
    listMenuElement.appendChild(headerMenuButton);

    const listHomeElement = createHtmlElement('li', 'left-header-list-home', ['left-header-list-item'], '');
    leftHeader.appendChild(listHomeElement);

    const headerHomeButton = createHtmlElement('button', 'header-home-button', ['header-button'], 'Home')
    listHomeElement.appendChild(headerHomeButton);

    const headerSearch = createHtmlElement('input', 'header-search', [], '');
    headerSearch.placeholder = "Search";
    headerSearch.name = "search";
    headerSearch.type = "search";
    header.appendChild(headerSearch);


    const rightHeader = createHtmlElement('ul', 'right-header', ['header-list'], '');
    header.appendChild(rightHeader);

    const listAddTaskElement = createHtmlElement('li', 'right-header-list-add-task', ['right-header-list-item'], '');
    rightHeader.appendChild(listAddTaskElement);

    const headerAddTaskButton = createHtmlElement('button', 'header-add-task-button', ['header-button'], 'Add task')
    listAddTaskElement.appendChild(headerAddTaskButton);

    const listProfileElement = createHtmlElement('li', 'right-header-list-profile', ['right-header-list-item'], '');
    rightHeader.appendChild(listProfileElement);

    const headerProfileButton = createHtmlElement('button', 'header-profile-button', ['header-button'], 'Add task')
    listProfileElement.appendChild(headerProfileButton);
}

export { render as renderHeader }
