const generateBtn = document.getElementById('generate-passwords');
const leftResult = document.getElementById('generated-password-1');
const rightResult = document.getElementById('generated-password-2');
const passwordRange = document.getElementById('password-range')
const copyBtn1 = document.getElementById('copy-btn-1')
const copyBtn2 = document.getElementById('copy-btn-2')
const generatedPassword1 = document.getElementById('generated-password-1');
const generatedPassword2 = document.getElementById('generated-password-2');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const pwdLength = document.getElementById('pwd-length');
const passwordStrength = document.getElementById('strength');

let lengthValue = passwordRange.value;
pwdLength.innerHTML = lengthValue
passwordRange.addEventListener('input', function () {
    pwdLength.innerHTML = ''
    lengthValue = passwordRange.value;
    pwdLength.innerHTML = lengthValue
})

let characters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];

function generatePassword(arr, length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        password +=  arr[Math.floor(Math.random() * arr.length)]
    }
    return password;
}


let baseCharacters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

let uppercaseChars = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbolsChars = [
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];

generateBtn.addEventListener('click', function () {
    let chars = [...baseCharacters]
    if (uppercase.checked) {
        chars.push(...uppercaseChars);
    }

    if (numbers.checked) {
        chars.push(...nums);
    }

    if (symbols.checked) {
        chars.push(...symbolsChars);
    }

    let checked = (uppercase.checked ? 1 : 0) + (numbers.checked ? 1 : 0) + (symbols.checked ? 1 : 0);

    if (checked === 3) {
        passwordStrength.textContent = "Strength: " + "  Strong password 💪⭐️💕⚡️"
    }

    if (checked === 2) {
        passwordStrength.textContent = "Strength: " + " Moderate password 🤩👍"
    }

    if (checked === 1) {
        passwordStrength.textContent = "Strength: " + " Bad password 🤔👎"
    }

    if (checked === 0) {
        passwordStrength.textContent = "Strength: " + " Week password 🤦🏻‍♂️👎💀😑"
    }

    leftResult.value = generatePassword(chars, lengthValue)
    rightResult.value = generatePassword(chars, lengthValue)
    rightResult.innerHTML = rightResult.value;
    leftResult.innerHTML = leftResult.value;
})

copyBtn1.addEventListener('click', function () {
    if (generatedPassword1.value.length > 0) {
        const password = generatedPassword1.value;
        navigator.clipboard.writeText(password)
        .then(() => {
            generatedPassword1.innerHTML = 'Password copied!'
        })
        .catch(err => {
            console.error('Error copying text: ', err);
        });
    }
})

copyBtn2.addEventListener('click', function () {
    if (generatedPassword2.value.length > 0) {
        const password = generatedPassword2.value;
        navigator.clipboard.writeText(password)
            .then(() => {
                generatedPassword2.innerHTML = 'Password copied!'
            })
            .catch(err => {
                console.error('Error copying text: ', err);
            });
    }
})