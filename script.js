const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".game-card");

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const title = card.innerText.toLowerCase();

    if(title.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

function randomGame() {
  const games = Array.from(cards);
  const random = games[Math.floor(Math.random() * games.length)];

  window.location.href = random.href;
}
