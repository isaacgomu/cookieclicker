const punchBtn = document.getElementById("punchBtn");
const luffyBtn = document.getElementById("luffyBtn");
const hitsSpan = document.getElementById("hitsSpan");
const hpsSpan = document.getElementById("hpsSpan");
const zoroBtn = document.getElementById("zoroBtn");
const luffysSpan = document.getElementById("luffysSpan");
const zorosSpan = document.getElementById("zorosSpan");
const resetBtn = document.getElementById("resetBtn");
const Enemy = document.getElementById("enemyimage");
const disable = (btn) => {
  btn.disabled = true;
  updatePage();
  updateStorage();
};
const enable = (btn) => {
  btn.disabled = false;
  updatePage();
  updateStorage();
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
  stats.hps += 100;
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

function Reset() {
  stats.hitCount = 0;
  stats.hps = 0;
  stats.luffys = 0;
  stats.zoros = 0;
  updatePage();
  updateStorage();
}

function punchsound() {
  let audio = new Audio("./assets/luffypunch.mp3");
  audio.play();
}

punchBtn.addEventListener("click", function () {
  hitEnemy();
  punchsound();
});
luffyBtn.addEventListener("click", buyLuffy);
zoroBtn.addEventListener("click", buyZoro);
resetBtn.addEventListener("click", Reset);

setInterval(function () {
  stats.hitCount += stats.hps;
  updatePage();
  updateStorage();
}, 1000);

setInterval(function () {
  if (stats.hitCount <= 9) {
    disable(luffyBtn);
  } else {
    enable(luffyBtn);
  }
  if (stats.hitCount <= 999) {
    disable(zoroBtn);
  } else {
    enable(zoroBtn);
  }
}, 1);

setInterval(function () {
  if (stats.hitCount <= 1000) {
  }
});
