const colorarr = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar']
const colorList = (arr) => {
    let html = '';
    for (let i = 0; i < arr.length; i++) {
        html += `
            <button class = "color-button ${arr[i]}" onclick="changeColorHouse('${arr[i]}') "></button>
        `
    }
    document.querySelector('#colorContainer').innerHTML = html;
    return html
}
window.onload = function () {
    colorList(colorarr);
}

const changeColorHouse = (colochange) => {
    for (let i = 0; i < colorarr.length; i++) {
        if (colorarr[i] === colochange) {
            const colorValue = colorarr[i]
            let element = document.getElementById('house');
            element.className = 'house' + ' ' + colorValue
          
        }
    }
    return colochange

}
