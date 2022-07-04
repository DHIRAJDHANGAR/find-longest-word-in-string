// const str = "Google do a barrel roll";
const str = "What if we try a super-long word such as otorhinolaryngology";
// const str = "The quick brown fox jumped over the lazy dog";
// const str = "the parenthesis of";

function findLongestWord(str) {
  const array = str.split(" ");
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    let arraySplit = array[i].split("");
    let arrayLenght = arraySplit.length;
    if (result < arrayLenght) {
      result = arrayLenght;
    }
  }
  return result;
}
findLongestWord(str);
console.log("Output", findLongestWord(str));
