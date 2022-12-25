function countVowelConsonant(str) {
  // write code here
  const vowels = ["a", "e", "i", "o", "u"]
  strArray = str.split("")
  let sum = 0
  strArray.map(char => {
        if(vowels.includes(char)) {
            char = 1
        } else char = 2          

        sum += char
  })
  return sum
}

console.log(countVowelConsonant("abcde"))




//Test Suite 

describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcdeou';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(10);
    });
});
