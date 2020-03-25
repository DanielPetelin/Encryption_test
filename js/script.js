let textInput = document.querySelector('#text-input');

document.querySelector('button').onclick = () => {
    let str = textInput.value;
    let str2 = '';
    for (let i = 0; i < str.length; i++) {
        str2 += '&';
    };
    document.querySelector('#out').textContent = str2;
};