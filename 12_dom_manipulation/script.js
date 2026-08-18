// DOM Manipulation

const heading1 = document.getElementById("heading1");
console.log("heading1:", heading1);
const heading2 = document.getElementById("heading2");
console.log("heading2:", heading2);

const heading3 = document.getElementById("heading3");
console.log("heading3:", heading3);

const heading4 = document.getElementById("heading4");

console.log("heading4:", heading4);

// 1. innerHTML
heading2.innerHTML = "<b>This is innerHTML</b>";

// 2. innerText
console.log("heading3 innerText:", heading3.innerText);

// 3. textContent
console.log("heading3 textContent:", heading3.textContent);

// 4. Difference between innerText and textContent
console.log("heading4 innerText:", heading4.innerText);
console.log("heading4 textContent:", heading4.textContent);

const className = document.getElementsByClassName("className");

console.log("className", className);

const query = document.querySelector(".query");

console.log("querySelector", query);

const selector = document.querySelector("#selector");

console.log("queryselctor", selector);

const queryAll = document.querySelectorAll(".para");

console.log("Query All Selector", queryAll);

console.log(queryAll[0]); // Paragraph 1
console.log(queryAll[1]); // Paragraph 2
console.log(queryAll[2]); // Paragraph 3

queryAll[0].innerText = "First paragraph";
queryAll[1].innerText = "Second paragraph";
queryAll[2].innerText = "Third paragraph";

const para = document.querySelectorAll(".para");

queryAll.forEach((element) => {
  console.log(element.innerText);
});

const headings = document.getElementsByTagName("h6");

console.log(headings);

console.log(headings[0]);
console.log(headings[1]);


const para1 = document.createElement("p");

para1.innerText = "This paragraph JavaScript";

document.body.appendChild(para1);

para1.style.color="blue"

heading1.style.color="violet"

heading2.style.color="pink"

query.style.fontFamily="cursive"
