const now = new Date();

console.log(now.getTimezoneOffset()); // получение разница между своим часовым поясом и UTC в минутах

console.log(now.getFullYear()); // получение года
console.log(now.getMonth()); // получение месяца
console.log(now.getDate()); // получение номера месяца
console.log(now.getDay()); // получение  номера дня (нумерация начинаеться с воскресенья = 0)
console.log(now.getHours()); // получение часов
console.log(now.getUTCHours()); // получение часов в UTC формате
console.log(now.getMinutes()); // получение минут
console.log(now.getSeconds()); // получение секунд 

console.log(now.setHours(18)); // назначение времени (по часовому поясу брузера/ комадной строки)
console.log(now)

// определение времени работы цикла \\
let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i;
}
let end = new Date();

alert(`Цикл сработал за ${end - start} мили секунд`);