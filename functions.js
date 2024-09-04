// Função para retornar números pares
function getEvenNumbers(numbers) {
return numbers.filter(num => num % 2 === 0);
}

// Função para ordenar strings
function sortStrings(strings) {
return strings.sort();
}

// Função para contar vogais
function countVowels(str) {
const vowels = 'aeiouAEIOU';
return Array.from(str).filter(char => vowels.includes(char)).length;
}

module.exports = { getEvenNumbers, sortStrings, countVowels };
