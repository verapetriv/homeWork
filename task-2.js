// 2.1
const logItems = function(array) {
    for (let i = 0; i < array.length; i += 1) {
        console.log(`${i+1} - ${array[i]}`);
    }
  };
  
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//2.2
const calculateEngravingPrice = function(message, pricePerWord) {
    const doArray = message.split(' ');
    const allPrice = doArray.length * pricePerWord;
    return(allPrice);
};
  
console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
);  // 80
  
console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
); // 160
  
console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240
  
console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120

// 2.3
const findLongestWord = function(string) {
    const words = string.split(' ');
    let theLongestWord = words[0];
    for (let i = 1; i < words.length; i += 1) {

        if (words[i].length > theLongestWord.length) {
            theLongestWord = words[i];
        }
    }

    return theLongestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));  // 'jumped'

console.log(findLongestWord('Google do a roll'));  // 'jumped'

console.log(findLongestWord('May the force be with you')); // 'force'

// 2.4
const formatString = function(string) {
    if (string.length > 40) {
        const shortString = `${string.slice(0, 40)}...`;
        return shortString;
    }
    return string;
};

console.log(
    formatString('Curabitur ligula sapien, tincidunt non.')
); // вернется оригинальная строка

console.log(
    formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')
); // вернется форматированная строка

console.log(
    formatString('Curabitur ligula sapien.')
); // вернется оригинальная строка

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
); // вернется форматированная строка

// 2.5
const checkForSpam = function(message) {
    const messageLowerCase = message.toLowerCase();
    if (messageLowerCase.includes('spam') || messageLowerCase.includes('sale')) {
        return true;
    }
    return false;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// 2.6
const numbers = [];
let total = 0;
while(true) {
    let input = prompt('Введите число');

    if (input === null) {
        break;
    }

    input = Number(input);

    const notANumber = Number.isNaN(input);

    if (notANumber) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }

    numbers.push(input);

    console.log(numbers);
}
if (numbers.length !== 0) {
    for (let number of numbers) {
        total += number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
}

//2.7
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
    const length = login.length;
    if (length < 4 || length > 16) {
        return true;
    }
    return false;
};

const isLoginUnique = function(allLogins, login) {
    for (let eachLogin of allLogins) {
        if (login === eachLogin) {
            return true;
        }
    }
    return false;
};

const addLogin = function(allLogins, login) {
    isLoginValid(login);

    if (isLoginValid(login)) {
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
        return;
    }

    if (isLoginUnique(allLogins, login)) {
        console.log('Такой логин уже используется!');
        return;
    }

    allLogins.push(login);
    console.log('Логин успешно добавлен!');
    console.log(logins);
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
