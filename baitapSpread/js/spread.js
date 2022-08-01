const getElement = (id) => {
    return document.getElementById(id)
}
const hoverText = (text) => {
    var fsize = text.style.fontSize;
    var newSize = +fsize.replace('px', '') + 10;
    text.style.fontSize = newSize + 'px';
    return newSize

}

let text = getElement('heading').innerHTML;
text = text.trim();
let textSeparate = [...text]
textSeparate.splice(5, 1)
console.log(textSeparate)

let html = '';
for (let i = 0; i < textSeparate.length; i++) {

    let value = textSeparate[i];
    html += `
        <span>${value}</span>
    `
    getElement('heading').innerHTML = html;

}

