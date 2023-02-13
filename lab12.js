class Worker {
    #name
    #surname
    #rate
    #days
    constructor(name, surname, rate, days ) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    sayWorker()
    {
        console.log(`Имя рабочего: ${this.#name} ${this.#surname} Ставка руб/час:${this.#rate} Кол.во рабочих дней:${this.#days}`)
    }
    getSalary(){
        console.log('Итоговая З/П:')
        console.log(this.#rate*this.#days);
        return this.#rate*this.#days;
    }
    setName(name){
        this.#name = name;
    }
    setSurname(surname){
        this.#surname = surname;
    }
    setRate(rate){
        this.#rate = rate;
    }
    setDays(days){
        this.#days = days;
    }
    getName(){
        return this.#name;
    }
    getSurname(){
        return this.#surname;
    }
    getRate(){
        return this.#rate;
    }
    getDays(){
        return this.#days;
    }
}
let worker1 = new Worker('Степан', 'Абрамкин', 50, 27);
worker1.sayWorker();
worker1.getSalary();
worker1.getName();
worker1.getSurname();
worker1.getRate();
worker1.getDays();

