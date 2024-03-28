const punchBtn = document.getElementById("punchBtn");
const luffyBtn = document.getElementById("luffyBtn");
const hitsSpan = document.getElementById("hitsSpan");
const hpsSpan = document.getElementById("hpsSpan");
const zoroBtn = document.getElementById("zoroBtn");
const luffysSpan = document.getElementById("luffysSpan");
const zorosSpan = document.getElementById("zorosSpan");
const disable = (e) => {
  e.disabled = true;
};

const stats = {
  hitCount: 0,
  hps: 0,
  luffys: 0,
  zoros: 0,
};

const storageStats = JSON.parse(localStorage.getItem("stats"));

if (storageStats !== null) {
  stats.hitCount = storageStats.hitCount;
  stats.hps = storageStats.hps;
  stats.luffys = storageStats.luffys;
  stats.zoros = storageStats.zoros;
}

function hitEnemy() {
  stats.hitCount++;
  updatePage();
  updateStorage();
}

function buyLuffy() {
  stats.hps++;
  stats.hitCount -= 10;
  stats.luffys++;
  updatePage();
  updateStorage();
}

function buyZoro() {
  stats.hps += 10;
  stats.hitCount -= 1000;
  stats.zoros++;
  updatePage();
  updateStorage();
}

function updatePage() {
  hitsSpan.textContent = stats.hitCount;
  hpsSpan.textContent = stats.hps;
  luffysSpan.textContent = stats.luffys;
  zorosSpan.textContent = stats.zoros;
}

function updateStorage() {
  localStorage.setItem("stats", JSON.stringify(stats));
}

punchBtn.addEventListener("click", hitEnemy);
luffyBtn.addEventListener("click", buyLuffy);
zoroBtn.addEventListener("click", buyZoro);

setInterval(function () {
  stats.hitCount += stats.hps;
  updatePage();
  updateStorage();
}, 1000);

if (stats.hitsSpan < 10) {
  disable(luffyBtn);
} else {
  enable(luffyBtn);
}
