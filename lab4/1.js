/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let lengthOfElem = 0;
    let newArray = [];
    let single = 0;
    let i =0;
    while(i < arr.length)
    {
        console.log('i: ' + i);

        let elArray =[];
        elArray.push(arr[i]);

        lengthOfElem = arr[i].length;

        for(let j = i+1; j < arr.length; j++)
        {

            if(lengthOfElem === arr[j].length)
            {

                let first = arr[i].toLowerCase();
                let second = arr[j].toLowerCase();
                if(check(first, second) === 1)
                {
                    elArray.push(arr[j]);
                    arr.splice(j,1);
                }
            }
        }
        if(elArray.length != 1){
            newArray.push(elArray);
            arr.splice(i,1);
        }else single++;

        i = single;

    }
    if(arr.length != 0){

        for(let i = 0; i < arr.length; i++){
            let singleArr = [];
            singleArr.push(arr[i]);
            newArray.push(singleArr);
        }
    }

    return newArray;

}


// 1- схожи, 0 - различны
function check(first, second){

    let firstArr = first.split('');
    let secondArr = second.split('');
    firstArr.sort();
    secondArr.sort();
    let check = 0;

    for(let k = 0; k < firstArr.length; k++){
        if(firstArr[k] === secondArr[k]) check++;
    }

    if(check === firstArr.length)return 1;
    else return 0;
}


module.exports = getAnagramms;
