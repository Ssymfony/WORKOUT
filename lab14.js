//Реализуйте класс MyString, который будет иметь следующие методы:
//метод reverse(), который параметром принимает строку, а возвращает
//ее в перевернутом виде, метод ucFirst(), который параметром принимает строку,
// а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
//который принимает строку и делает заглавной первую букву каждого слова этой строки
class MyString{
    #string
    constructor(string) {
    this.#string = string;
    }

    reverseString(){
        const reverse = Array.from(this.#string).reverse().join('');
        console.log(reverse);
    }
    ucFirst() {
        console.log(this.#string.charAt(0).toUpperCase() +  this.#string.slice(1))
        return  this.#string.charAt(0).toUpperCase() +  this.#string.slice(1);
    }
    ucWords() {
        console.log(this.#string.split(' ').map(i => i.charAt(0).toUpperCase()+i.slice(1)).join(' '));
       return this.#string.split(' ').map(i => i.charAt(0).toUpperCase()+i.slice(1)).join(' ');
    }
}

let string1 = new MyString('вперед зайчата вперед');

string1.reverseString();
string1.ucFirst();
string1. ucWords();