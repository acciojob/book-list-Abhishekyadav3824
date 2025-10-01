//your JS code here. If required.
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const submitBtn = document.getElementById("submit");
const bookList = document.getElementById("book-list");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Get values
  let name = title.value.trim();
  let atr = author.value.trim();
  let isb = isbn.value.trim();

  if (name === "" || atr === "" || isb === "") return;

  // Create row
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${atr}</td>
    <td>${isb}</td>
    <td><button class="delete">X</button></td>
  `;

  bookList.appendChild(row);

  // Clear inputs
  title.value = "";
  author.value = "";
  isbn.value = "";
});

// Event delegation for delete buttons
bookList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
