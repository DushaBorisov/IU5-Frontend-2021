/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    let arr = [];
    arr = str.split('');
    let flag = 1;
    let a = arr.length / 2;

    for(let i =0; i < a; i++  ){
        if(arr[i] != arr[arr.length - 1 - i]){
            flag = 0;
            break;
        }
    }
    if(flag === 1) return true;
    else return false;

}

module.exports = isPalindrome;
