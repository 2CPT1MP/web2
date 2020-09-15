imgBlocks = [
    {title: 'Изображение 1', path: 'img/backgrounds/1.png'},
    {title: 'Изображение 2', path: 'img/backgrounds/2.jpg'},
    {title: 'Изображение 3', path: 'img/backgrounds/3.png'},
    {title: 'Изображение 4', path: 'img/backgrounds/4.png'},
    {title: 'Изображение 5', path: 'img/backgrounds/5.png'},

    {title: 'Изображение 6', path: 'img/backgrounds/6.jfif'},
    {title: 'Изображение 7', path: 'img/backgrounds/7.jfif'},
    {title: 'Изображение 8', path: 'img/backgrounds/8.jfif'},
    {title: 'Изображение 9', path: 'img/backgrounds/9.jfif'},
    {title: 'Изображение 10', path: 'img/backgrounds/10.jfif'},

    {title: 'Изображение 11', path: 'img/backgrounds/11.jfif'},
    {title: 'Изображение 12', path: 'img/backgrounds/12.jfif'},
    {title: 'Изображение 13', path: 'img/backgrounds/13.jfif'},
    {title: 'Изображение 14', path: 'img/backgrounds/14.jfif'},
    {title: 'Изображение 15', path: 'img/backgrounds/15.jfif'},
];

function addImgBlock(index) {
    let parentId = document.getElementById("img-container");

    let imgBlock = document.createElement("div");
    imgBlock.setAttribute("class", "flex-item");

    let image = document.createElement("img");
    image.setAttribute("src", imgBlocks[index].path);
    image.setAttribute("width", "200");
    image.setAttribute("title", imgBlocks[index].title);

    let desc = document.createElement("p");
    desc.setAttribute("class", "image-title");
    desc.innerHTML = imgBlocks[index].title;

    imgBlock.append(image);
    imgBlock.append(desc);
    parentId.append(imgBlock);
}

function addAll() {
    const imgCount = document.getElementById("img-count").value;

    for (let i = 0; i < imgCount; i++)
        addImgBlock(i)
}

function removeAllBlocks() {
    let parentId = document.getElementById("img-container");
    let children = parentId.getElementsByClassName("flex-item");

    while (children.length != 0)
        parentId.removeChild(children[0]);
}
