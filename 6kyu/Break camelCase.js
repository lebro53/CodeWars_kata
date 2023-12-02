// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
    const stringArray = string.split('')
    const camelLetter = stringArray.filter((camel) => camel === camel.toUpperCase()).map((elem) => ' ' + elem)
    return stringArray.map((element) =>  element === element.toUpperCase() ? camelLetter.shift() : element).join('')
    
}


function solution(string) {
    return stringArray = string.split('').map((element) => element === element.toUpperCase() ? ' ' + element : element).join('')
}


console.log(solution('aMamaKasha'))