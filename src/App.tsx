function App() {
  const sortArray = (arr: number[]) => {
    return arr.sort((a, b) => a - b)
  }

  const getFilterQuery = (arr: number[], index = 0) => {
    return new RegExp(`${arr[index].toString().split('').join('|')}`, 'g')
  }

  const filterArrayByQuery = (arr: number[], query: RegExp) => {
    return arr.filter((item) => {
      if (
        query.test(item.toString()) &&
        arr.join(' ').match(query)?.join('').toString() === item.toString()
      ) {
        return item
      } else if (query.test(item.toString())) {
        return ''
      } else {
        return item
      }
    })
  }

  const filterArray = (arr: number[], i = 0) => {
    const filterQuery: RegExp = getFilterQuery(arr, i)

    const filteredByQueryArr = filterArrayByQuery(arr, filterQuery)

    return filteredByQueryArr
  }

  const reverseDigitsInArray = (arr: number[]) => {
    const reversedArr = arr.map((item) => {
      return parseInt(item.toString().split('').reverse().join(''))
    })
    return reversedArr
  }

  const squareNumbersInArray = (arr: number[]) => {
    const squaredArr = arr.map((item) => {
      return item * item
    })
    return squaredArr
  }

  const checkStopCondition = (originArr: number[], resultArr: number[]) => {
    if (
      resultArr.length === 0 ||
      resultArr.length === 1 ||
      resultArr.every((value, index) => value === originArr[index])
    ) {
      return true
    } else {
      return false
    }
  }

  const iterateArrayThroughFilter = (arr: number[], currArr: number[]) => {
    let iteratedArr = [...arr]

    for (let i = 0; i < iteratedArr.length; i++) {
      if (checkStopCondition(currArr, iteratedArr)) {
        return iteratedArr
      } else {
        iteratedArr = filterArray(iteratedArr, i)
        if (iteratedArr.length !== filterArray(iteratedArr, i).length) {
          i = 0
        }
      }
    }
    return iteratedArr
  }

  const manipulateArray = (arr: number[]) => {
    const currentArray = [...arr]

    const sortedArray = sortArray(currentArray)

    const filteredArr = filterArray(sortedArray)

    let resultArr = [...filteredArr]

    const iteratedArr = iterateArrayThroughFilter(resultArr, currentArray)

    console.log(iteratedArr)

    if (checkStopCondition(currentArray, iteratedArr)) {
      return iteratedArr
    }
    resultArr = squareNumbersInArray(reverseDigitsInArray(iteratedArr))

    resultArr = manipulateArray(resultArr)

    return resultArr
  }

  const arrExample = [41, 55, 61, 1, 8, 27, 37, 39] // expected: [3025]
  // some examples :
  // const arrExample1 = [64, 8649, 3025]; //expected: [3025]
  // const arrExample2 = [41, 55, 61, 1, 8, 27, 82, 37, 22, 39]; // expected: [3025, 8649]
  // const arrExample3 = [11, 2, 4, 65, 89]; // expected: [2, 4, 11, 65, 89]
  // const arrExample4 = [11, 2, 4, 625, 89]; // expected: []

  manipulateArray(arrExample)

  return <div className='App'></div>
}

export default App
