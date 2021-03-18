/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    arr = str.split('');
    let result = [];

    let elem;
    let count = 0;

    elem = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === elem){
            count++;
            if( (arr.length - i) === 1 ){
                result.push(elem);
                if(count != 1) result.push(count);
            }
        }
        else{
            result.push(elem);
            if(count != 1) result.push(count);
            elem = arr[i];
            count = 1;

            if( (arr.length - i) === 1 ){
                result.push(elem);
                if(count != 1) result.push(count);
            }
        }


    }

    return result.join('');
}

module.exports = rle;

