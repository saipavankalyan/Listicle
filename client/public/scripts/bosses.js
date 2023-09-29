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

const loadData = async () => {
  const response = await fetch("/bosses");
  const data = await response.json();
  return data;
};

const renderPage = async () => {
  const data = await loadData();
  renderBosses(data);
};

const requestedUrl = window.location.href.split("/").pop();
if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  renderPage();
}

// export default { renderBosses };
