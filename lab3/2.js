/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    let arr = str.split(' ');
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;

    console.log(arr);

    for(let i = 0; i < arr.length; i++){

        if(arr[i].indexOf('.') ){
            if(parseFloat(arr[i]) != NaN){
                let number1 = parseFloat(arr[i]);
                if(number1 > max) max = number1;
                if(number1< min) min = number1;

            }
        }else {
            if (parseInt(arr[i], 10) != NaN) {
                let number = parseInt(arr[i], 10);
                if (number > max) max = number;
                if (number < min) min = number;

            }
        }
    }

    let result = {
        min : min,
        max : max
    }
    return result;
}


module.exports = getMinMax;