const array = [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5]

function selectionSort(array) {
    for (let j = 0; j < array.length; j++) {
        let max = -Infinity
        let index = null
        for (let i = 0; i < array.length - j; i++) {
            if (array[i] > max) {
                max = array[i]
                index = i
            }
        }
        let buff = array[array.length - 1 - j]
        array[array.length - 1 - j] = max
        array[index] = buff
    }
return array;
}
let sortArray = selectionSort(array);

function binarySearch(array, item){
    let start = 0
    let end = array.length
    let middle;
    let found = false
    let position = -1
    while (found === false && start <= end){
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item){
            found = true
            position = middle
            return position;
        }
        if (item < array[middle]){
            end = middle - 1
        }else {
            start = middle + 1
        }
    }
    return position;
}

console.log(binarySearch(sortArray, -1))
console.log(sortArray)