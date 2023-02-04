
let month  = prompt("Время года");
let year = prompt('Введите год:');
    console.log((year % 4 === 0)?'весокосный':'невесокосный');
let day  = prompt("День");
switch (month) {
    case '1':
    case '2':
        console.log('Winter');
        break;
    case '3':
    case '4':
    case '5':
        console.log("Spring ");
        break;
    case '6':
    case '7':
    case '8':
        console.log("Summer");
        break;
    case '9':
    case '10':
    case '11':
        console.log("Autumn");
        break;
    case '12':
}
switch (day) {
    case '1':
    case '2':
        console.log('Понедельник');
        break;
    case '3':
    case '4':
    case '5':
        console.log("Пятница ");
        break;

}
