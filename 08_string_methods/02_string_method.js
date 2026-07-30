

let text = "Success comes to those who never give up.";

// match()

console.log("finding match in string :", text.match("Success"));

// if not finding matching string it will return null

console.log("not finding match in string :", text.match("Failure"));

// repeat()

console.log("repeating the string :", text.repeat(2));

// replace()

console.log("replacing Success to Victory :", text.replace("Success", "Victory"));

// replaceAll()

console.log("replacing o to O in all syntax :", text.replaceAll("o", "O"));

// search()

console.log("searching never in text :", text.search("never"));

// here we cant put starting index we can do that indexOf method

console.log("indexOf op with starting index =>", text.indexOf("o", 10));

// slice()

console.log("text example :", text);

console.log("slice OP :", text.slice(2));

console.log("slice OP :", text.slice(2, 10));

console.log("slice OP :", text.slice(8, 20));

console.log("slice OP :", text.slice(-5));

// example 1


let text = "Dream big and work hard every day.";

// match()

console.log("finding match in string :", text.match("work"));

console.log("not finding match in string :", text.match("failure"));

// repeat()

console.log("repeating the string :", text.repeat(2));

// replace()

console.log("replacing Dream to Think :", text.replace("Dream", "Think"));

// replaceAll()

console.log("replacing a to A :", text.replaceAll("a", "A"));

// search()

console.log("searching hard in text :", text.search("hard"));

console.log("indexOf op with starting index =>", text.indexOf("a", 10));

// slice()

console.log("text example :", text);

console.log("slice OP :", text.slice(2));

console.log("slice OP :", text.slice(2, 10));

console.log("slice OP :", text.slice(10, 20));

console.log("slice OP :", text.slice(-4));

// example 2

let text = "Believe in yourself and stay positive.";

// match()

console.log("finding match in string :", text.match("yourself"));

console.log("not finding match in string :", text.match("negative"));

// repeat()

console.log("repeating the string :", text.repeat(2));

// replace()

console.log("replacing Believe to Trust :", text.replace("Believe", "Trust"));

// replaceAll()

console.log("replacing e to E :", text.replaceAll("e", "E"));

// search()

console.log("searching stay in text :", text.search("stay"));

console.log("indexOf op with starting index =>", text.indexOf("e", 8));

// slice()

console.log("text example :", text);

console.log("slice OP :", text.slice(3));

console.log("slice OP :", text.slice(3, 12));

console.log("slice OP :", text.slice(13, 23));

console.log("slice OP :", text.slice(-8));

// example 3


let text = "Every challenge is a new opportunity.";

// match()

console.log("finding match in string :", text.match("challenge"));

console.log("not finding match in string :", text.match("problem"));

// repeat()

console.log("repeating the string :", text.repeat(2));

// replace()

console.log("replacing Every to Each :", text.replace("Every", "Each"));

// replaceAll()

console.log("replacing e to E :", text.replaceAll("e", "E"));

// search()

console.log("searching new in text :", text.search("new"));

console.log("indexOf op with starting index =>", text.indexOf("e", 10));

// slice()

console.log("text example :", text);

console.log("slice OP :", text.slice(4));

console.log("slice OP :", text.slice(4, 15));

console.log("slice OP :", text.slice(16, 27));

console.log("slice OP :", text.slice(-10));