// A JavaScript String is a sequence of characters, typically used to represent text.

// We can write a string using single quotes ('') or double quotes ("").

// Example

let text = "Shiva is not a destination; He is the path.";

console.log("text =>", text);

// charAt() method ==> Returns the character at the specified index (position), counting starts from 0.

console.log("charAt:", text.charAt(8));

// concat() method ==> Joins two or more strings and returns a new string.

console.log("concat:", text.concat(" Always"));

// endsWith() method ==> Returns true if the string ends with the specified value.

console.log("endsWith:", text.endsWith("path."));

// includes() method ==> Returns true if the string contains the specified value.

console.log("includes 'Shiva':", text.includes("Shiva"));

// indexOf() method ==> Returns the index of the first occurrence of the specified value.

console.log("indexOf 'destination':", text.indexOf("destination"));

console.log("indexOf (not available):", text.indexOf("Mahadev"));

// lastIndexOf() method ==> Returns the last occurrence of the specified value.

console.log("lastIndexOf 'is':", text.lastIndexOf("is"));

// length property ==> Returns the total number of characters in the string.

console.log("length:", text.length);

// example 1

let text = "Krishna teaches love, wisdom, and devotion.";

console.log("text =>", text);

// charAt()

console.log("charAt:", text.charAt(8));

// concat()

console.log("concat:", text.concat(" Hare Krishna"));

// endsWith()

console.log("endsWith:", text.endsWith("devotion."));

// includes()

console.log("includes 'Krishna':", text.includes("Krishna"));

// indexOf()

console.log("indexOf 'love':", text.indexOf("love"));

console.log("indexOf (not available):", text.indexOf("Radha"));

// lastIndexOf()

console.log("lastIndexOf 'a':", text.lastIndexOf("a"));

// length

console.log("length:", text.length);

// example 2


let text = "Lord Ganesha removes obstacles and brings success.";

console.log("text =>", text);

// charAt()

console.log("charAt:", text.charAt(10));

// concat()

console.log("concat:", text.concat(" Ganpati Bappa Morya"));

// endsWith()

console.log("endsWith:", text.endsWith("success."));

// includes()

console.log("includes 'Ganesha':", text.includes("Ganesha"));

// indexOf()

console.log("indexOf 'obstacles':", text.indexOf("obstacles"));

console.log("indexOf (not available):", text.indexOf("Shiva"));

// lastIndexOf()

console.log("lastIndexOf 's':", text.lastIndexOf("s"));

// length

console.log("length:", text.length);

// example 3

let text = "Lord Hanuman is the symbol of strength and devotion.";

console.log("text =>", text);

// charAt()

console.log("charAt:", text.charAt(6));

// concat()

console.log("concat:", text.concat(" Jai Shree Ram"));

// endsWith()

console.log("endsWith:", text.endsWith("devotion."));

// includes()

console.log("includes 'Hanuman':", text.includes("Hanuman"));

// indexOf()

console.log("indexOf 'strength':", text.indexOf("strength"));

console.log("indexOf (not available):", text.indexOf("Sita"));

// lastIndexOf()

console.log("lastIndexOf 'o':", text.lastIndexOf("o"));

// length

console.log("length:", text.length);