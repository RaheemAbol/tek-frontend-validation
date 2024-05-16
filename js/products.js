import data from "./data.js";

function generateProductCards(data) {
  const productGrid = document.getElementById("productGrid");

  data.forEach((item) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <div class="image-container">
                <img src="${item.img}" alt="${item.trim}">
            </div>
            <div class="details">
                <h3>${item.make} ${item.model} - <i>${item.trim}</i></h3>
            </div>
        `;
    productGrid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generateProductCards(data);
});
