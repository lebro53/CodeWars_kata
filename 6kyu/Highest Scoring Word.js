// Учитывая строку слов, вам нужно найти слово, набравшее наибольшее количество баллов.
// Каждая буква слова набирает очки в зависимости от ее положения в алфавите: a = 1, b = 2, c = 3 и т.д.
// Например, оценка abad равна 8 (1 + 2 + 1 + 4).
// Вам нужно вернуть слово с наибольшим количеством баллов в виде строки.
// Если два слова имеют одинаковый результат, верните слово, которое появляется раньше всего в исходной строке.
// Все буквы будут строчными, и все входные данные будут действительными.



function high(x){
    const lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ",", "."];
    x = x.split(' ').map((e) => e.split(''))
    let maxHigh = 0
    let maxWord = ''
    for (let index = 0; index < x.length; index++) {
        const element = x[index];
        let temp = 0
        element.forEach(element => {
            temp += (lowerAlph.lastIndexOf(element) + 1 )
        });
        if(maxHigh<temp){
            maxHigh = temp
            maxWord = element.join('')
        }
    }
    return maxWord
}

// function high(s){
//     let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//     return s.split(' ')[as.indexOf(Math.max(...as))];
//   }


