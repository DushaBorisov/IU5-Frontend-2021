/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    let arr = [];
    let stack = [];
    arr = str.split('');


    for(let i =0; i < arr.length; i++){

        let elem;

        switch (arr[i]){
            case '[': elem = 1;
                break;
            case '(': elem = 2;
                break;
            case '<': elem = 3;
                break;
            case ']': elem = 4;
                break;
            case ')': elem = 5;
                break;
            case '>': elem = 6;
                break;
        }

        if( (elem === 1) ||  (elem === 2) || (elem === 3) ) stack.push(elem);
            else
        {
            switch (elem){
                case 4: {
                    if (stack[stack.length - 1] === 1) stack.pop();
                    else return false;
                    break;
                }
                case 5: {
                    if (stack[stack.length - 1] === 2) stack.pop();
                    else return false;
                    break;
                }
                case 6: {
                    if (stack[stack.length - 1] === 3) stack.pop();
                    else return false;
                    break;
                }
            }

        }

    }
    return true;

}


module.exports = checkBrackets;
