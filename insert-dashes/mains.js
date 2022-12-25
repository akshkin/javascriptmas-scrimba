function insertDashes(arr) {
  arr = arr.split("").join("-")
  arr = arr.split(" ")
  return arr.map(word => {
      if (word.endsWith("-")){
           return word.slice(0,-1)           
      } else if (word.startsWith("-")){
            return word.slice(1)
                       
      }
       return word        
  }).join(" ")
  
}

console.log(insertDashes("aba caba"))



/**
* Test Suite 
*/
describe('insertDashes()', () => {
  it('insert dashes in between chars', () => {
      // arrange
      const value = "aba caba";
      
      // act
      const result = insertDashes(value);

      // log
      console.log("result: ", result);
      
      // assert
      expect(result).toBe("a-b-a c-a-b-a");
  });
});