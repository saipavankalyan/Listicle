const header = document.querySelector("header");

const headerCard = document.createElement("div");
headerCard.className = "header-card";

const headerTitle = document.createElement("h1");
headerTitle.textContent = "HOLLOW KNIGHT";

const headerCaption = document.createElement("h3");
headerCaption.textContent =
  "For those who are tired of being repeatedly defeated by the bosses 💀";

const allBossesBtn = document.createElement("button");
allBossesBtn.classList.add("home-btn");
allBossesBtn.classList.add("contrast");
allBossesBtn.classList.add("inline");
allBossesBtn.textContent = "All Bosses";

allBossesBtn.addEventListener("click", function handleClick(event) {
  window.location = "/";
});

headerCard.appendChild(headerTitle);
headerCard.appendChild(headerCaption);
headerCard.appendChild(allBossesBtn);

header.appendChild(headerCard);
