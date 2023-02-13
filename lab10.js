let obj1 =  { a: 1, b: 1 };
let obj2 =  { a: 1, b: 1 };
function deepEqual (obj1, obj2){

        for(let propName in obj1){

            if (! obj2.hasOwnProperty(propName)) { // Есть ли свойства в обоих объектах
                return false;
            }
            if(obj1[propName].valueOf() !== obj2[propName].valueOf()){ // Одинаковы ли значения свойст
                if(! deepEqual(obj1[propName], obj2[propName]) ){ // проверка объекта в объекте
                    return false;
                }

            }
        }
    return true; }

console.log(deepEqual (obj1, obj2));