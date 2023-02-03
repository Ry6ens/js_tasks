const text = `aab The Tao gave birth to machine language. Machine language gave birth to the assembler.
The assembler gave birth to the compiler. Now there are ten thousand languages.
Each language has its purpose, however humble. Each language
expresses the Yin and Yang of software. Each language has its place within
the Tao.
But do not program in COBOL if you can avoid it.
        -- Geoffrey James, "The Tao of Programming"`;

const text2 = `C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup`;

const arrayWords = text
  .toLowerCase()
  .replace(/[\n-"---,-.]/gm, " ")
  .split(" ")
  .filter((el) => el !== "");

function firstNonRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
}

// - програма приймає на вхід довільний текст і знаходить в кожному слові цього тексту найперший символ, який більше НЕ повторюється в аналізуємому слові
const arrayCharacters = arrayWords.map((string) => {
  const result = firstNonRepeatingCharacter(string);
  return result;
});

// - далі із отриманого набору символів програма повинна вибрати перший унікальний (тобто той, який більше не зустручається в наборі) і повернути його.
const arrayToString = arrayCharacters.join("");

const uniqueCharacter = firstNonRepeatingCharacter(arrayToString);

console.log(uniqueCharacter); // Answer "u", if dont use method toLowerCase() will be "m"
