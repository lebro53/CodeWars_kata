// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


function sortArray(array) {

  function compareNumbers(a, b) {
    return a - b;
  }

    let oddNumbers = [];
    array.forEach((element) => element% 2 !== 0 ? oddNumbers.push(element) : element*1);
    oddNumbers.sort(compareNumbers);
    let cnt = 0;
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (item %2 !== 0){
        array.splice(i, 1, oddNumbers[cnt]);
        cnt++;
      }
    }
    return oddNumbers;
  }



  // function sortArray(array) {
  //   const oddArray = array.filter((x) => x % 2 !==0).sort((a, b) => a-b);
  //   return array.map((x) => x%2 !== 0 ? oddArray.shift() : x)
  //   }
  
  console.log(sortArray([5, 3, 2, 8, 1, 4]))