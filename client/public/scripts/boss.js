const renderBoss = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch("/bosses");
  const data = await response.json();

  const bossContent = document.getElementById("boss-content");
  let boss;

  boss = data.find((boss) => boss.id === requestedID);

  if (boss) {
    // console.log(boss);
    document.getElementById("title").textContent = boss.name;
    document.getElementById("health").textContent = `Health: ${boss.health}`;
    document.getElementById("location").textContent = boss.area;
    document.getElementById("description").textContent = boss.story;
    document.getElementById("image").src = boss.gif_url;
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Bosses Available!";
    giftContent.appendChild(message);
  }
};

renderBoss();
