let event1 = ["01:15","02:00"];
let event2 = ["02:00","03:00"];
let event3 = event1.concat(event2);


const suka = event3
    .map((event) => {  //Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
        return {
            count: 1,
            event3: event
        };
    })
    .reduce((result, b) => { //Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
        result[b.event3] = (result[b.event3] ||  0) + b.count;

        return result;
    }, {});
const duplicates = Object.keys(suka).filter((a) => suka[a] > 1);

console.log('Ошибка:' + duplicates);