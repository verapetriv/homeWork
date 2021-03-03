// 1.1
const name = 'Генератор защитного поля';
let price = 1000;

console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);

price = 2000;

console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);

// 1.2
const total = 100;
const ordered = 130;

ordered > total ? console.log("На складе недостаточно товаров!")
: console.log("Заказ оформлен, с вами свяжется менеджер");

// 1.3
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const password = prompt('Введите пароль');

switch(password) {
    case null: 
        message = 'Отменено пользователем!';
        break;
    case ADMIN_PASSWORD:
        message = 'Добро пожаловать!';
        break;
    default:
        message = 'Доступ запрещен, неверный пароль!';
        break;
}

alert(message);

// 1.4
let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const quantityDroidToBuy = prompt('Сколько дроидов желаете преобрести?');

if (quantityDroidToBuy === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = Number(quantityDroidToBuy) * pricePerDroid;
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        credits = credits - totalPrice;
        console.log(`Вы купили ${quantityDroidToBuy} дроидов, на счету осталось ${credits} кредитов.`);
    }
}

// 1.5
const deliveryChina = 100,
      deliveryChile = 250,
      deliveryAustralia = 170,
      deliveryIndia = 80,
      deliveryJamaica = 120;

const yourCountry = prompt('Укажите страну доставки'),
      normalizedContry = yourCountry.toLowerCase();

switch(normalizedContry) {
    case 'китай':
        alert(`Доставка в ${yourCountry} будет стоить ${deliveryChina} кредитов`);
        break;
    case 'чили':
        alert(`Доставка в ${yourCountry} будет стоить ${deliveryChile} кредитов`);
        break;
    case 'австралия':
        alert(`Доставка в ${yourCountry} будет стоить ${deliveryAustralia} кредитов`);
        break;
    case 'индия':
        alert(`Доставка в ${yourCountry} будет стоить ${deliveryIndia} кредитов`);
        break;
    case 'ямайка':
        alert(`Доставка в ${yourCountry} будет стоить ${deliveryJamaica} кредитов`);
        break;
    default:
        alert('В вашей стране доставка не доступна');
}

// 1.6
let total = 0;
while (true) {
    let input = prompt('Введите число');

    if (input === null) {
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }

    input = Number(input);

    const notANumber = Number.isNaN(input);

    if (notANumber) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }
    
    total += input;
}
