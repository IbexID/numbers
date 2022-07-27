import React from 'react';

function App() {


  const sortArray = (arr: number[]) => {
    return arr.sort((a, b) => a - b)
  }

  const getFilterQuery = (arr: number[], index: number = 0) => {

    return new RegExp(`${arr[index].toString().split('').join('|')}`, 'g')
  }

  const filterArrayByQuery = (arr: number[], query: RegExp) => {

    return arr.filter(item => {

      if (query.test(item.toString()) && arr.join(' ').match(query)?.join('').toString() === item.toString()) {
        return item
      } else if (query.test(item.toString())) {
        return ''
      } else {
        return item
      }
    })
  }


  const filterArray = (arr: number[], i: number = 0) => {

    let filterQuery: RegExp = getFilterQuery(arr, i)

    let filteredByQueryArr = filterArrayByQuery(arr, filterQuery)

    return filteredByQueryArr
  }

  const reverseDigitsInArray = (arr: number[]) => {
    const reversedArr = arr.map(item => {
      return parseInt(item.toString().split('').reverse().join(''))
    })
    return reversedArr
  }

  const squareNumbersInArray = (arr: number[]) => {
    const squaredArr = arr.map(item => {
      return item * item
    })
    return squaredArr
  }

  const checkStopCondition = (originArr: number[], resultArr: number[]) => {
    if (resultArr.length === 0 || resultArr.length === 1 || resultArr.every((value, index) => value === originArr[index])) {
      return true;
    } else {
      return false;
    }
  }

  /* [1, 8, 27, 37, 39, 41, 55, 61] */
  /* [8, 27, 37, 39, 55] */
  /* [8, 39, 55] */
  /* [8, 93, 55] */
  /* [64, 8649, 3025] */
  /* [64, 3025, 8649] */
  /* [3025] */
  const doArray = (arr: number[], currArr: number[]) => {
    let doneArr = [...arr]

    for (let i = 0; i < doneArr.length; i++) {
      if (checkStopCondition(currArr, doneArr)) {
        return doneArr;
      } else {
        doneArr = filterArray(doneArr, i)
        if (doneArr.length !== filterArray(doneArr, i).length) {
          i = 0
        }
      }


    }
    return doneArr
  }

  const playArray = (arr: number[]) => {
    let currentArray = [...arr];

    let sortedArray = sortArray(currentArray)

    let filteredArr = filterArray(sortedArray)

    let resultArr = [...filteredArr]

    const doneArr = doArray(resultArr, currentArray)

    console.log(doneArr);
    if (checkStopCondition(currentArray, doneArr)) {
      return doneArr;
    }
    resultArr = squareNumbersInArray(reverseDigitsInArray(doneArr));



    resultArr = playArray(resultArr);  

    return resultArr






  }

  const arrExample = [41, 55, 61, 1, 8, 27, 37, 39]
  const arrExample2 = [41, 55, 61, 1, 8, 27, 82, 37, 22, 39]
  const arrExample1 = [64, 8649, 3025]


  playArray(arrExample2)

  return (
    <div className="App">
    </div>
  );
}

export default App;
