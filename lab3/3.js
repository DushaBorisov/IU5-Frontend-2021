/**
 * Напишите функцию multiplyArray(arr, n),
 * на вход подается массив arr, и число n
 * необходимо вернуть новый массив, в котором все числа в n раз больше исходного
 * в массиве могут быть не только числа, эти элементы должны соответствовать исходным (не числа не трогать)
 * Примеры:
 * [1, 2, 3, 'ddd', {min: 1}, 22, false], 2 -> [2, 4, 6, 'ddd', {min: 1}, 44, false]
 */


function multiplyArray(arr, n) {
    let arr2 = [];
    for(let i = 0 ; i < arr.length; i++){
        if (typeof (arr[i]) == "number"){
            arr2.push(arr[i]*n);}
        else{
            arr2.push(arr[i]);}

    }
    return arr2;
}

module.exports = multiplyArray;