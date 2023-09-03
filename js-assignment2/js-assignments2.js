const maskedStringInput = document.getElementById("mask-string");
const maskedStringResult = document.getElementById("mask-string-result");
const generateButton = document.getElementById("generate-btn");
const rowsInput = document.getElementById("rows");
const columnsInput = document.getElementById("columns");
const tableDiv = document.getElementById("multiplication-table");
const numInput = document.getElementById("num");
const doubleButton = document.getElementById("double-btn");
const resultElement = document.getElementById("doubled-result");
const predefinedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const triangleResult = document.getElementById("triangle-result");
const addBookButton = document.getElementById("add-book");
const bookTitleInput = document.getElementById("book-title");
const searchBookInput = document.getElementById("search-book");
const availableBooksList = document.getElementById("available-books");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteButton = document.getElementById("new-quote-button");
const availableBooks = [
  "Web Development Basics",
  "Java Programming",
  "Data Structures and Algorithms",
  "Database Management",
  "Networking Essentials",
];

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  {
    text: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    text: "Simplicity is the keynote of all true elegance.",
    author: "Coco Chanel",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    text: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke",
  },
  {
    text: "Life is short, and it is up to you to make it sweet.",
    author: "Sarah Louise Delany",
  },
  {
    text: "The future belongs to those who prepare for it today.",
    author: "Malcolm X",
  },
];

// Assignment Seven

function maskString() {
  const inputString = maskedStringInput.value;
  if (inputString.length <= 2) {
    maskedStringResult.style.color = "red";
    maskedStringResult.textContent = "Please, Enter a word with 3 letters";
    return;
  }
  const firstChar = inputString[0];
  const lastChar = inputString[inputString.length - 1];
  const maskedChars = "*".repeat(inputString.length - 2);
  const maskedString = firstChar + maskedChars + lastChar;
  maskedStringResult.style.color = "black";
  maskedStringResult.innerHTML = maskedString;
}

generateButton.addEventListener("click", () => {
  const rows = Number(rowsInput.value);
  const columns = Number(columnsInput.value);

  if (rows >= 1 && rows <= 10 && columns >= 1 && columns <= 10) {
    generateMultiplicationTable(rows, columns);
  } else {
    tableDiv.innerHTML =
      "<p>Please enter valid values for rows and columns (1-10).</p>";
  }
});

function generateMultiplicationTable(rows, columns) {
  const table = document.createElement("table");

  for (let i = 1; i <= rows; i++) {
    const row = document.createElement("tr");
    for (let j = 1; j <= columns; j++) {
      const cell = document.createElement("td");
      cell.textContent = `${i} * ${j} = ${i * j}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  tableDiv.innerHTML = "";
  tableDiv.appendChild(table);
}

doubleButton.addEventListener("click", () => {
  const numToDouble = parseInt(numInput.value);

  if (numToDouble <= 0 || numToDouble >= 10) {
    resultElement.textContent = "Please enter a number between 1 - 9.";
  } else if (!isNaN(numToDouble)) {
    const modifiedArray = double(predefinedArray, numToDouble);
    resultElement.textContent = `Modified array: ${modifiedArray}`;
  } else {
    resultElement.textContent = "Please enter a number between 1 - 9.";
  }
});

function double(myArray, num) {
  if (Array.isArray(myArray)) {
    const modifiedArray = [...myArray];
    for (let i = 0; i < modifiedArray.length; i++) {
      if (modifiedArray[i] === num) {
        modifiedArray[i] *= 2;
      }
    }
    return modifiedArray;
  } else {
    console.log("Invalid input. Please provide a valid array.");
    return [];
  }
}

// Assignment Eight

function makeTriangle(getStart, getEnd, getChar) {
  let startPattern = -1;
  triangleResult.innerHTML = "";
  for (let x = 1; x <= getEnd; x++) {
    const pElement = document.createElement("p");
    let rowContent = "";
    for (let y = 1; y <= x; y++) {
      if (x >= getStart) {
        rowContent += getChar + " ";
      } else {
        rowContent += x + " ";
      }
    }
    pElement.textContent = rowContent.trim();
    triangleResult.appendChild(pElement);

    if (x >= getStart) {
      startPattern = 0;
    } else {
      startPattern = 1;
    }
  }
}

function generateTriangle() {
  const triangleChar = document.getElementById("triangle-char-value").value;
  const triangleStart = Number(
    document.getElementById("triangle-start-value").value
  );
  const triangleEnd = Number(
    document.getElementById("triangle-end-value").value
  );

  if (
    isNaN(triangleStart) ||
    isNaN(triangleEnd) ||
    triangleChar === "" ||
    triangleStart > triangleEnd
  ) {
    triangleResult.innerHTML = "Invalid input. Please enter valid values.";
    return;
  }
  console.log(triangleChar);

  if (
    triangleStart > 20 ||
    triangleEnd > 20 ||
    triangleStart < 0 ||
    triangleEnd < 0
  ) {
    triangleResult.innerHTML =
      "Invalid input. Please enter valid start and end values.";
    return;
  }

  makeTriangle(triangleStart, triangleEnd, triangleChar);
}

function coloredLetters() {
  const numOfRows = parseInt(document.getElementById("num-of-rows").value);
  if (numOfRows < 6 || numOfRows % 3 !== 0) {
    alert("Please enter a number that is divisible by 3 and at least 6.");
    return;
  }
  if (isNaN(numOfRows) || numOfRows > 30) {
    alert("Invalid number of rows. Please enter a number upto 30");
    return;
  }
  const color1 = document.getElementById("color1").value;
  const color2 = document.getElementById("color2").value;
  createColoredLetters(numOfRows, color1, color2);
}

function createColoredLetters(numOfRows, color1, color2) {
  const coloredLetters = document.getElementById("colored-letters-result");
  const color1Rows = numOfRows / 3;
  coloredLetters.innerHTML = "";
  for (let i = 0; i < numOfRows; i++) {
    const row = document.createElement("div");
    const currentColor = i < color1Rows ? color1 : color2;
    const charToPrint = currentColor.charAt(0).toUpperCase();
    row.textContent = charToPrint.repeat(numOfRows * 2);
    row.style.color = currentColor;
    coloredLetters.appendChild(row);
  }
}

// Assignment Nine

addBookButton.addEventListener("click", () => {
  const bookTitle = bookTitleInput.value.trim();
  if (bookTitle !== "") {
    availableBooks.push(bookTitle);
    updateAvailableBooksList();
    bookTitleInput.value = "";
  } else {
    alert("Enter a Book title");
  }
});
searchBookInput.addEventListener("input", () => {
  updateAvailableBooksList();
});
function updateAvailableBooksList() {
  const searchQuery = searchBookInput.value.toLowerCase();
  availableBooksList.innerHTML = "";
  availableBooks.forEach((bookTitle) => {
    const lowerCaseTitle = bookTitle.toLowerCase();
    if (lowerCaseTitle.includes(searchQuery)) {
      const listItem = document.createElement("li");
      listItem.textContent = bookTitle;
      availableBooksList.appendChild(listItem);
    }
  });
}
updateAvailableBooksList();

// Assignment Ten

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayRandomQuote() {
  const randomQuote = getRandomQuote();
  quoteText.textContent = randomQuote.text;
  quoteAuthor.textContent = `- ${randomQuote.author}`;
}

newQuoteButton.addEventListener("click", displayRandomQuote);
displayRandomQuote();
