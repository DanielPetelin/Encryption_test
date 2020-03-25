let textInput = document.querySelector('#text-input');
const key = {
        'a' : '1',
        'b' : '2',
        'c' : '3',
        'd' : '4',
        'f' : '5',
        'h' : 't',
        'e' : 'u',
        'l' : 'i',
        'o' : 'p',
        ' ' : 'y',
        'y' : ' '
    };

document.querySelector('button').onclick = () => {
    let str = textInput.value;
    let str2 = '';
    
    for (let i = 0; i < str.length; i++) {
        // str[i];
        console.log(key[str[i]]);
        if (key[str[i]]) {
            str2 += key[str[i]];
        } else {
            str2 += str[i];
        };
    };
    document.querySelector('#out').textContent = str2;
};