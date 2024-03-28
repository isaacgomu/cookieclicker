const punchBtn = document.getElementById("punchBtn");
const luffyBtn = document.getElementById("luffyBtn");
const hitsSpan = document.getElementById("hitsSpan");
const hpsSpan = document.getElementById("hpsSpan");

const stats = {
  hitCount: 0,
  hps: 0,
};

const storageStats = JSON.parse(localStorage.getItem("stats"));

if (storageStats !== null) {
  stats.hitCount = storageStats.hitCount;
  stats.hps = storageStats.hps;
}

function hitEnemy() {
  stats.hitCount++;
  updatePage();
  updateStorage();
}

function buyLuffy() {
  stats.hps++;
  stats.hitCount -= 10;
  updatePage();
  updateStorage();
}

function updatePage() {
  hitsSpan.textContent = stats.hitCount;
  hpsSpan.textContent = stats.hps;
}

function updateStorage() {
  localStorage.setItem("stats", JSON.stringify(stats));
}

punchBtn.addEventListener("click", hitEnemy);
luffyBtn.addEventListener("click", buyLuffy);

setInterval(function () {
  stats.hitCount += stats.hps;
  updatePage();
  updateStorage();
}, 1000);
