/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
 [
 [1, 2],
 [1, 2]
 ],
 [
 [
 [1, 2, [1, 2, [2]]], 3
 ], 4
 ]
 ]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
 */

function get1DArray(arr) {
    let result = [];
    get(arr,result);
    // console.log(result);
    // for(let i=0; i < result.length; i++){
    //     console.log(result[i]);
    // }
    return result;
}

function get(array, res){
    for(let i =0; i < array.length; i++){
        //console.log(Array.isArray(array[i]));
        if(Array.isArray(array[i]) == false) res.push(array[i]);
        else get(array[i],res);
    }
    //console.log(res);
}

// let test = [1, 2, 'aa', [1, 2, 3],
//     [
//         [1, 2],
//         [1, 2]
//     ],
//     [
//         [
//             [1, 2, [1, 2, [2]]], 3
//         ], 4
//     ]
// ];
// get1DArray(test);
module.exports = get1DArray;
