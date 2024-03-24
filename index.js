for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// let num; 

// do {
//     num = prompt('Введи число от 0 до 100:')
// } while (num < 100);


for (let num = prompt('Введи число от 0 до 100:'); num < 100;) { // пока num меньше ста делать type again
    num = prompt('type again')
}
