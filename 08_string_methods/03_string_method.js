
let text ="we are learning javascript";

console.log("text=> ",text);

// split
// split method is used to split a string into an array of substrings based on a specified separator.

console.log("split=> ",text.split(" ")); // split by space
console.log("split=> ",text.split("a")); // split by 'a'
console.log("split=> ",text.split("")); // split by each character

// substring
// substring method is used to extract a portion of a string between two specified indices.
// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

// The substring() method extracts characters from start to end (exclusive).

// The substring() method does not change the original string.

// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).

// Start or end values less than 0, are treated as 0
console.log("substring=> ",text.substring(3, 10)); 
console.log("slice=> ",text.slice(3, 10));
// argument swapped
console.log("substring=> ",text.substring(3,10));
console.log("slice=> ",text.slice(3,10));


// greater than end
console.log("substring=> ",text.substring(10, 3)); 
console.log("slice=> ",text.slice(10, 3));

// less than 0

console.log("substring=> ",text.substring(-3, 10));
console.log("slice=> ",text.slice(-3, 10));

console.log("substring=> ",text.substring(-1));
console.log("slice=> ",text.slice(-1));

// toUpperCase
// The toUpperCase() method converts a string to uppercase letters.

console.log("toUpperCase=> ",text.toUpperCase());

text = "WE ARE LEARNING JAVASCRIPT";

// toLowerCase
// the toLowerCase() method converts a string to lowercase letters.

console.log("toLowerCase=> ",text.toLowerCase());

// trim 
// returns a string with removed whitespace


let trimText = "       disha     ";

console.log("length of trimText=> ",trimText.length);
console.log("trim=> ",trimText.trim());
console.log("length of trimText after trim=> ",trimText.trim().length);

// trimStart
// The trimStart() method removes whitespace from the beginning of a string.

console.log("trimStart=> ",trimText.trimStart());

// trimEnd
// The trimEnd() method removes whitespace from the end of a string.

console.log("trimEnd=> ",trimText.trimEnd());

// example 1

let str = "your hard work makes you successful";

console.log("str=> ",str);
// split 

console.log("split=> ",str.split(" ")); 
console.log("split=> ",str.split("r")); 
console.log("split=> ",str.split(""));

// substring

console.log("substring=> ",str.substring(5, 15));
console.log("slice=> ",str.slice(5, 15));

// greater than end

console.log("substring=> ",str.substring(15, 5));
console.log("slice=> ",str.slice(15, 5));

// less than 0

console.log("substring=> ",str.substring(-5, 15));
console.log("slice=> ",str.slice(-5, 15));

console.log("substring=> ",str.substring(-1));
console.log("slice=> ",str.slice(-1));

// toUpperCase

console.log("toUpperCase=> ",str.toUpperCase());

// toLowerCase

console.log("toLowerCase=> ",str.toLowerCase());

// trim

let trimStr = "       your hard work makes you successful     ";

console.log("length of trimStr=> ",trimStr.length);
console.log("trim=> ",trimStr.trim());
console.log("length of trimStr after trim=> ",trimStr.trim().length);

// trimStart
console.log("trimStart=> ",trimStr.trimStart());
// trimEnd
console.log("trimEnd=> ",trimStr.trimEnd());


// example 2

let str2 = "you keep learning and growing";

console.log("str2=> ",str2);

// split

console.log("split=> ",str2.split(" "));
console.log("split=> ",str2.split("e"));
console.log("split=> ",str2.split(""));

// substring

console.log("substring=> ",str2.substring(4, 12));
console.log("slice=> ",str2.slice(4, 12));

// greater than end

console.log("substring=> ",str2.substring(12, 4));
console.log("slice=> ",str2.slice(12, 4));

// less than 0

console.log("substring=> ",str2.substring(-4, 12));
console.log("slice=> ",str2.slice(-4, 12));

console.log("substring=> ",str2.substring(-1));
console.log("slice=> ",str2.slice(-1));

// toUpperCase
console.log("toUpperCase=> ",str2.toUpperCase());

// toLowerCase
console.log("toLowerCase=> ",str2.toLowerCase());

// trim

let trimStr2 = "       you keep learning and growing     ";

console.log("length of trimStr2=> ",trimStr2.length);
console.log("trim=> ",trimStr2.trim());
console.log("length of trimStr2 after trim=> ",trimStr2.trim().length);

// trimStart

console.log("trimStart=> ",trimStr2.trimStart());

// trimEnd
console.log("trimEnd=> ",trimStr2.trimEnd());


// example 3

let str3 = "your successful life is in your hands";

console.log("str3=> ",str3);

// split

console.log("split=> ",str3.split(" "));
console.log("split=> ",str3.split("s"));
console.log("split=> ",str3.split(""));

// substring

console.log("substring=> ",str3.substring(5, 20));
console.log("slice=> ",str3.slice(5, 20));

// greater than end

console.log("substring=> ",str3.substring(20, 5));
console.log("slice=> ",str3.slice(20, 5));

// less than 0

console.log("substring=> ",str3.substring(-5, 20));
console.log("slice=> ",str3.slice(-5, 20));

console.log("substring=> ",str3.substring(-1));
console.log("slice=> ",str3.slice(-1));

// toUpperCase

console.log("toUpperCase=> ",str3.toUpperCase());

// toLowerCase

console.log("toLowerCase=> ",str3.toLowerCase());

// trim

let trimStr3 = "       your successful life is in your hands     ";

console.log("length of trimStr3=> ",trimStr3.length);
console.log("trim=> ",trimStr3.trim());
console.log("length of trimStr3 after trim=> ",trimStr3.trim().length);

// trimStart

console.log("trimStart=> ",trimStr3.trimStart());

// trimEnd

console.log("trimEnd=> ",trimStr3.trimEnd());
  







