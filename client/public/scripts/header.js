const header = document.querySelector("header");

const headerSearch = document.createElement("div");
headerSearch.className = "header-search";

const searchField = document.createElement("input");
searchField.type = "text";
searchField.placeholder = "Search for boss by name";
searchField.id = "search-field";

// const searchBtn = document.createElement("i");
// searchBtn.classList.add("fa-solid");
// searchBtn.classList.add("fa-magnifying-glass");
// // searchBtn.classList.add("search-icon");

const searchBtn = document.createElement("button");
searchBtn.classList.add("search-btn");
searchBtn.textContent = "Search";

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
    console.log(response);
    const data = await response.json();
    // Handle the search results
    console.log(data);
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
