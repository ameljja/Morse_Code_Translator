// Translator
const el = document.getElementById('morse');

window.addEventListener('input', (e) => {
    const message = e.target.value;
    const decoded = [...message].map(letter => decoder(letter)).join('&nbsp;&nbsp;');
    el.innerHTML = decoded;
}, false);

const alphabet = [
    { id: ' ', code: ' / ' },
    { id: 'A', code: '•-' },
    { id: 'B', code: '-•••' },
    { id: 'C', code: '-•-•' },
    { id: 'D', code: '-••' },
    { id: 'E', code: '•' },
    { id: 'F', code: '••-•' },
    { id: 'G', code: '--•' },
    { id: 'H', code: '••••' },
    { id: 'I', code: '••' },
    { id: 'J', code: '•---' },
    { id: 'K', code: '-•-' },
    { id: 'L', code: '•-••' },
    { id: 'M', code: '--' },
    { id: 'N', code: '-•' },
    { id: 'O', code: '---' },
    { id: 'P', code: '•--•' },
    { id: 'Q', code: '--•-' },
    { id: 'R', code: '•-•' },
    { id: 'S', code: '•••' },
    { id: 'T', code: '-' },
    { id: 'U', code: '••-' },
    { id: 'V', code: '•••-' },
    { id: 'W', code: '•--' },
    { id: 'X', code: '-••-' },
    { id: 'Y', code: '-•--' },
    { id: 'Z', code: '--••' },
    { id: '0', code: '-----' },
    { id: '1', code: '•----' },
    { id: '2', code: '••---' },
    { id: '3', code: '•••--' },
    { id: '4', code: '••••-' },
    { id: '5', code: '•••••' },
    { id: '6', code: '-••••' },
    { id: '7', code: '--•••' },
    { id: '8', code: '---••' },
    { id: '9', code: '----•' },
    { id: '.', code: '•-•-•-' },
    { id: ',', code: '--••--' },
    { id: '?', code: '••--••' },
];

function decoder(x) {
    const obj = alphabet.find(obj => obj.id === x.toUpperCase());

    console.log(obj);

    return obj && obj.code ? obj.code : null;
};