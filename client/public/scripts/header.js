// import { renderBosses } from "./bosses.js";

const renderBosses = (data) => {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = "";
  mainContent.style.background = "#011225";
  if (data && data.length > 0) {
    data.map((boss) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.backgroundImage = "url(" + boss.gif_url + ")";
      card.style.backgroundSize = "cover";

      const name = document.createElement("h2");
      name.textContent = boss.name;
      card.appendChild(name);

      const area = document.createElement("h3");
      area.textContent = boss.area;
      card.appendChild(area);

      const link = document.createElement("a");
      link.textContent = "Read More";
      link.setAttribute("role", "button");
      link.href = `/bosses/${boss.id}`;
      card.appendChild(link);

      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Bosses Exist!!";
    mainContent.appendChild(message);
  }
};

const header = document.querySelector("header");

const headerSearch = document.createElement("div");
headerSearch.className = "header-search";

const searchField = document.createElement("input");
searchField.type = "text";
searchField.placeholder = "Search for boss by name";
searchField.id = "search-field";

const searchBtn = document.createElement("i");
searchBtn.classList.add("fa-solid");
searchBtn.classList.add("fa-magnifying-glass");
searchBtn.classList.add("search-btn");

headerSearch.appendChild(searchField);
headerSearch.appendChild(searchBtn);

searchBtn.addEventListener("click", async function handleSearch(event) {
  const searchQuery = searchField.value;
  console.log(JSON.stringify({ searchQuery }));
  try {
    const response = await fetch("/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchQuery }),
    });
    const data = await response.json();
    renderBosses(data);
  } catch (error) {
    console.error(error);
  }
});

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

header.appendChild(headerSearch);
header.appendChild(headerCard);
