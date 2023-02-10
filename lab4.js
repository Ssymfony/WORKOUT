let arr =   [1,2,3,6,8,1,6,3,2,1,0,4];

let count = 0;
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
         if (array[j + 1] < array[j]) {
             let tmp = array[j]
             array[j] = array[j+1]
             array[j+1] = tmp
         }
         count+=1
        }
    }
    return array
}

let arr1 = bubbleSort(arr);
let arr2 = ['one', 'two','three'];
let arr3 = arr1.concat(arr2);
console.log(arr3);