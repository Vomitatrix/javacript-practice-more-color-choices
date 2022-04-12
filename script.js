const select = document.querySelector('select');
const html = document.querySelector('html');

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.addEventListener('change', () => {
    switch (select.value) {
        case 'white':
            update('white', 'black');
            break;
        case 'black':
            update('black', 'white');
            break;
        case 'purple':
            update('purple', 'yellow');
            break;
        case 'yellow':
            update('yellow', 'purple');
            break;
        case 'psychedelic':
            update('red', 'green');
    }
})