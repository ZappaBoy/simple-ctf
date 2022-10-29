function createText(text, link = null) {
    let div = document.createElement("div");
    div.setAttribute("class", text.trim());
    div.width = width;
    div.height = height;
    div.style.position = 'absolute';
    div.style.top = (document.body.clientHeight - height - padding) * Math.random() + 'px';
    div.style.left = (document.body.clientWidth - width - padding) * Math.random() + 'px';
    div.style.fontSize = fontSize;
    div.style.color = textColor;
    if (link !== null) {
        div.innerHTML = `<a href="${link}">${text}</a>`;
    } else {
        div.innerHTML += text;
    }

    document.body.appendChild(div);
}

function showRandomText(elementsNumber) {
    for (let i = 0; i < elementsNumber; i++) {
        createText('T piacess')
    }
    createText('Eccert è chiar', '../sqli/');
}

const width = 120;
const height = 100;
const padding = 60;
const randomTextElements = 3000;
const textColor = 'whitesmoke';
const fontSize = '40px';

showRandomText(randomTextElements);
