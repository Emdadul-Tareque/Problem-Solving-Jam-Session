
// [2, 7, 3, 9, 4]

function getSecondLargestElement(numbers){

    const unique = [];


    for(let i = 0; i < numbers.length; i++){
        if(unique.indexOf(numbers[i]) == -1){
            unique.push(numbers[i]);
        }
    }
    const sortedArr = sort(unique);
    const index = sortedArr.length - 2;
    const secondLargestElement = sortedArr[index];
    return secondLargestElement;
    

}

function sort(arr){

    const length = arr.length

    for(let i= 0; i < length; i++){
        for(j = 0; j < length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;

}

const arr = [ 10, 9, 9, 8, 8, 11, 8, 0, 9, 1 ];
console.log( getSecondLargestElement(arr));

