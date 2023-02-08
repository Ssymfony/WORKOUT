

let a = [1,2,3,6,8,1,6,3,2,1,0,4];
// a.forEach(entry => {
//     console.log(entry);
// });
//for (let i = 0; i < a.length; i++){
 //   console.log(a[i])
//}
a.map ((
    item,key) => {
    console.log(Number(key+1)+' Элемент равен '+item)
    }
)
