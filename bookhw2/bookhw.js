
const book = books[i];

const rowDiv = document.createElement(div);
rowDiv.className = "row";

// this creates the image div
const imageDiv = document.createElement("div");
imageDiv.className = "col-3";

// creates the img element and adds its attributes
const image = document.createElement("img");
image.src = book.coverImage;
image.alt = book.name;
image.className = "img-fluid h-100";

// put image inside the image div
imageDiv.appendChild(image);