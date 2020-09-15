function addListItems () {
    for (let i = 0; i < arguments.length; i++)
        appendItem(arguments[i])
}

function appendItem(item) {
    let ul = document.getElementById("interests-list");

    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("href", item.url);
    a.innerHTML = item.title;

    li.append(a);
    ul.append(li);
}

addListItems(
    {title: 'Любимые занятия', url: '#hobbies'},
    {title: 'Любимые книги', url: '#books'},
    {title: 'Любимая музыка', url: '#music'}
);