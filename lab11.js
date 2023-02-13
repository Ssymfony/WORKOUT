class Worker {
    constructor(name, surname, rate, days ) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    sayWorker()
    {
        console.log(`Имя рабочего: ${this.name} ${this.surname} Ставка руб/час:${this.rate} Кол.во рабочих дней:${this.days}`)
    }
    getSalary(){
        console.log('Итоговая З/П:')
        console.log(this.rate*this.days);
        return this.rate*this.days;
        }
}
let worker1 = new Worker('Степан', 'Абрамкин', 110, 27);
worker1.sayWorker();
worker1.getSalary();

