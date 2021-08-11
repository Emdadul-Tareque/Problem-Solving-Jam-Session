

//[2, 5, 7, 9]

//[9, 7, 5, 2]

function getSecondLargest(nums) {
    
    const unique = []; 

    for(let i= 0; i <nums.length; i++){
        if(unique.indexOf(nums[i]) == -1){
            unique.push(nums[i])
        }
    }
    console.log(unique)
    const sortedArr = unique.sort() // [2, 5, 7, 9]
    const secondLargestIndex = sortedArr.length - 2;
    const secondLargestElement = sortedArr[secondLargestIndex]

    return secondLargestElement;
    
}

const arr = [2, 5, 9, 9, 9, 7];

console.log(getSecondLargest(arr))

