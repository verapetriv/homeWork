const inputCountRef = document.querySelector('#controls > input');
const createButtonRef = document.querySelector('button[data-action="render"]');
const removeButtonRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

const randomRGBA = () => {
    const o = Math.round;
    const r = Math.random;
    const s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
};

const getBoxesCount = () => boxesRef.querySelectorAll('div');

const createBoxes = (amount) => {
    let boxes = [];
    let i = 1;
    
    const boxesCount = getBoxesCount();
    console.log(boxesCount);

    if (boxesCount.length) {
        amount = Number(amount) + boxesCount.length;
        i += boxesCount.length;
    }

    for (i; i <= amount; i += 1) {
        const box = document.createElement('div');

        box.style.backgroundColor = `${randomRGBA()}`;
        box.style.height = `${20 + i * 10}px`;
        box.style.width = `${20 + i * 10}px`;

        boxes.push(box);
    }

    return(boxes);
};

const addBoxes = () => boxesRef.append(...createBoxes(inputCountRef.value));
const removeBoxes = () => {
    const boxesCount = getBoxesCount();
    boxesCount.forEach(box => box.remove());
};

createButtonRef.addEventListener('click', addBoxes);
removeButtonRef.addEventListener('click', removeBoxes);



