const { getEvenNumbers, sortStrings, countVowels } = require('./functions');

describe('Testes para funções', () => {

// Teste para getEvenNumbers
test('Deve retornar apenas números pares', () => {
expect(getEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
expect(getEvenNumbers([10, 15, 20, 25])).toEqual([10, 20]);
expect(getEvenNumbers([1, 3, 5, 7])).toEqual([]);
expect(getEvenNumbers([])).toEqual([]);
});

// Teste para sortStrings
test('Deve ordenar uma lista de strings em ordem alfabética', () => {
expect(sortStrings(['banana', 'apple', 'cherry'])).toEqual(['apple', 'banana', 'cherry']);
expect(sortStrings(['dog', 'cat', 'elephant'])).toEqual(['cat', 'dog', 'elephant']);
expect(sortStrings(['grape', 'apple', 'banana'])).toEqual(['apple', 'banana', 'grape']);
});

// Teste para countVowels
test('Deve contar o número de vogais em uma string', () => {
expect(countVowels('hello')).toBe(2);
expect(countVowels('world')).toBe(1);
expect(countVowels('Jest is awesome')).toBe(5);
expect(countVowels('')).toBe(0);
});

});
