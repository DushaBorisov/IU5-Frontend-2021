/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {


    let arr = str.split(' ');
    let newStr ='';
    for(let i = 0; i < arr.length; i++){
        if(i != 0 ) newStr+=' ';
        newStr+= ((arr[i]).charAt(0)).toUpperCase() + (arr[i]).slice(1);
    }
    return newStr;

}





module.exports = capitalize;