// function minArray(arr) {
//     let min = arr[0];
//     for(var i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return min;
// }
// let arr1 = [3, 5, 1, 8, -3, 7, 8];
// let min = minArray(arr1);
// alert(min);
let arr1 = [3, 5, 1, 8, -3, 7, 8];
let  arr2 = [];
function minArray(arr) {

    if (arr.length == 0) {
        return -1;
    }
    let min = arr[0];
    let locationArr = null;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            locationArr = i;
        }
    }
    return min, "Phần tử nhỏ nhất ở vị trí " + locationArr;
}

alert(minArray(arr1));

