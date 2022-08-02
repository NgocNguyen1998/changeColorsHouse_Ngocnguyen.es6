const colorarr = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar']
const colorList = (arr) => {
    let html = '';
    for (value of arr) {
        html += `
            <button class = "color-button ${value}" onclick="changeColorHouse('${value}') "></button>
        `
    }
    document.querySelector('#colorContainer').innerHTML = html;
    return html
}
window.onload = function () {
    colorList(colorarr);
}

const changeColorHouse = (colochange) => {
    for( value of colorarr){
        if(value ===colochange){
            const colorValue = value
            let element = document.getElementById('house');
            element.className = 'house' + ' ' + colorValue
        }
    }
    return colorValue

}
