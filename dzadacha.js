alert('Загадайте целое число от 1 до 100. Импортозамещенный Акинатор угадает Ваше число!')

function guess() {
    let start = 1;
    let end = 100;
    let num;
    
    while (true) {

    num = Math.floor((start + end)/2);
    
    let answer = prompt(`Это число ${num}? Введите "меньше", "больше" или "загаданное число".`);
    
   
    if (answer === "загаданное число") {
    console.log(`Я победил! Я угадал Ваше число, это ${num}!`);
    break;} 
    else if (answer === "меньше") {
    end = num - 1;} 
    else if (answer === "больше") {
    start = num + 1;}
    else {
    console.log('Пожалуйста, введите "меньше", "больше" или "загаданное число".');}
    }
    }
    
guess();
    
