const punchBtn = document.getElementById("punchBtn");
const hitsSpan = document.getElementById("hitsSpan");
const tracksSpan = document.getElementById("tracksSpan");
const hpsSpan = document.getElementById("hpsSpan");
const luffyBtn = document.getElementById("luffyBtn");
const zoroBtn = document.getElementById("zoroBtn");
const namiBtn = document.getElementById("namiBtn");
const usoppBtn = document.getElementById("usoppBtn");
const sanjiBtn = document.getElementById("sanjiBtn");
const chopperBtn = document.getElementById("chopperBtn");
const robinBtn = document.getElementById("robinBtn");
const frankyBtn = document.getElementById("frankyBtn");
const brookBtn = document.getElementById("brookBtn");
const jimbeiBtn = document.getElementById("jimbeiBtn");
const luffysSpan = document.getElementById("luffysSpan");
const zorosSpan = document.getElementById("zorosSpan");
const namisSpan = document.getElementById("namisSpan");
const usoppsSpan = document.getElementById("usoppsSpan");
const sanjisSpan = document.getElementById("sanjisSpan");
const choppersSpan = document.getElementById("choppersSpan");
const robinsSpan = document.getElementById("robinsSpan");
const frankysSpan = document.getElementById("frankysSpan");
const brooksSpan = document.getElementById("brooksSpan");
const jimbeisSpan = document.getElementById("jimbeisSpan");
const resetBtn = document.getElementById("resetBtn");
const Enemy = document.getElementById("enemyimage");
const luffyCost = document.getElementById("luffyCost");
const zoroCost = document.getElementById("zoroCost");
const namiCost = document.getElementById("namiCost");
const usoppCost = document.getElementById("usoppCost");
const sanjiCost = document.getElementById("sanjiCost");
const chopperCost = document.getElementById("chopperCost");
const robinCost = document.getElementById("robinCost");
const frankyCost = document.getElementById("frankyCost");
const brookCost = document.getElementById("brookCost");
const jimbeiCost = document.getElementById("jimbeiCost");
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
  hitTrack: 0,
  hps: 0,
  luffys: 0,
  zoros: 0,
  namis: 0,
  ussops: 0,
  sanjis: 0,
  choppers: 0,
  robins: 0,
  frankys: 0,
  brooks: 0,
  jimbeis: 0,
  luffyCost: 15,
  zoroCost: 100,
  namiCost: 1100,
  usoppCost: 12000,
  sanjiCost: 130000,
  chopperCost: 1400000,
  robinCost: 20000000,
  frankyCost: 330000000,
  brookCost: 5100000000,
  jimbeiCost: 75000000000,
};

const storageStats = JSON.parse(localStorage.getItem("stats"));

if (storageStats !== null) {
  stats.hitCount = storageStats.hitCount;
  stats.hitTrack = storageStats.hitTrack;
  stats.hps = storageStats.hps;
  stats.luffys = storageStats.luffys;
  stats.zoros = storageStats.zoros;
  stats.namis = storageStats.namis;
  stats.usopps = storageStats.usopps;
  stats.sanjis = storageStats.sanjis;
  stats.choppers = storageStats.choppers;
  stats.robins = storageStats.robins;
  stats.frankys = storageStats.frankys;
  stats.brooks = storageStats.brooks;
  stats.jimbeis = storageStats.jimbeis;
  stats.luffyCost = storageStats.luffyCost;
  stats.zoroCost = storageStats.zoroCost;
  stats.namiCost = storageStats.namiCost;
  stats.usoppCost = storageStats.usoppCost;
  stats.sanjiCost = storageStats.sanjiCost;
  stats.chopperCost = storageStats.chopperCost;
  stats.robinCost = storageStats.robinCost;
  stats.frankyCost = storageStats.frankyCost;
  stats.brookCost = storageStats.brookCost;
  stats.jimbeiCost = storageStats.jimbeiCost;
}

function hitEnemy() {
  stats.hitCount++;
  stats.hitTrack++;
  updatePage();
  updateStorage();
}
function buyLuffy() {
  stats.hps += 1;
  stats.hitCount -= stats.luffyCost;
  stats.hitCount = Math.round(stats.hitCount);
  stats.hitTrack = Math.round(stats.hitTrack);
  stats.luffys += 1;
  stats.luffyCost = Math.round(stats.luffyCost * 1.15);
  updatePage();
  updateStorage();
}

function buyZoro() {
  stats.hps += 10;
  stats.hitCount -= stats.zoroCost;
  stats.hitCount = Math.round(stats.hitCount);
  stats.hitTrack = Math.round(stats.hitTrack);
  stats.zoros += 1;
  stats.zoroCost = Math.round(stats.zoroCost * 1.15);
  updatePage();
  updateStorage();
}

function buyNami() {
  stats.hps += 80;
  stats.hitCount -= stats.namiCost;
  stats.hitCount = Math.round(stats.hitCount);
  stats.hitTrack = Math.round(stats.hitTrack);
  stats.namis += 1;
  stats.namiCost = Math.round(stats.namiCost * 1.15);
  updatePage();
  updateStorage();
}

function buyUsopp() {
  stats.hps += 470;
  stats.hitCount -= stats.usoppCost;
  stats.hitCount = Math.round(stats.hitCount);
  stats.hitTrack = Math.round(stats.hitTrack);
  stats.usopps += 1;
  stats.usoppCost = Math.round(stats.usoppCost * 1.15);
  updatePage();
  updateStorage();
}

function buySanji() {
  stats.hps += 2600;
  stats.hitCount -= stats.sanjiCost;
  stats.hitCount = Math.round(stats.hitCount);
  stats.hitTrack = Math.round(stats.hitTrack);
  stats.sanjis += 1;
  stats.sanjiCost = Math.round(stats.sanjiCost * 1.15);
  updatePage();
  updateStorage();
}

function buyChopper() {
  stats.hps += 14000;
  stats.hitCount -= stats.chopperCost;
  stats.hitCount = Math.round(stats.hitCount);
  stats.hitTrack = Math.round(stats.hitTrack);
  stats.choppers += 1;
  stats.chopperCost = Math.round(stats.chopperCost * 1.15);
  updatePage();
  updateStorage();
}
function buyRobin() {
  stats.hps += 78000;
  stats.hitCount -= stats.robinCost;
  stats.hitCount = Math.round(stats.hitCount);
  stats.hitTrack = Math.round(stats.hitTrack);
  stats.robins += 1;
  stats.robinCost = Math.round(stats.robinCost * 1.15);
  updatePage();
  updateStorage();
}
function buyFranky() {
  stats.hps += 440000;
  stats.hitCount -= stats.frankyCost;
  stats.hitCount = Math.round(stats.hitCount);
  stats.hitTrack = Math.round(stats.hitTrack);
  stats.frankys += 1;
  stats.frankyCost = Math.round(stats.frankyCost * 1.15);
  updatePage();
  updateStorage();
}
function buyBrook() {
  stats.hps += 260000000;
  stats.hitCount -= stats.brookCost;
  stats.hitCount = Math.round(stats.hitCount);
  stats.hitTrack = Math.round(stats.hitTrack);
  stats.brooks += 1;
  stats.brookCost = Math.round(stats.brookCost * 1.15);
  updatePage();
  updateStorage();
}
function buyJimbei() {
  stats.hps += 16000000;
  stats.hitCount -= stats.jimbeiCost;
  stats.hitCount = Math.round(stats.hitCount);
  stats.hitTrack = Math.round(stats.hitTrack);
  stats.jimbeis += 1;
  stats.jimbeiCost = Math.round(stats.jimbeiCost * 1.15);
  updatePage();
  updateStorage();
}

function updatePage() {
  hitsSpan.textContent = stats.hitCount;
  tracksSpan.textContent = stats.hitTrack;
  hpsSpan.textContent = stats.hps;
  luffysSpan.textContent = stats.luffys;
  zorosSpan.textContent = stats.zoros;
  namisSpan.textContent = stats.namis;
  usoppsSpan.textContent = stats.usopps;
  sanjisSpan.textContent = stats.sanjis;
  choppersSpan.textContent = stats.choppers;
  robinsSpan.textContent = stats.robins;
  frankysSpan.textContent = stats.frankys;
  brooksSpan.textContent = stats.brooks;
  jimbeisSpan.textContent = stats.jimbeis;
  luffyCost.textContent = stats.luffyCost;
  zoroCost.textContent = stats.zoroCost;
  namiCost.textContent = stats.namiCost;
  usoppCost.textContent = stats.usoppCost;
  sanjiCost.textContent = stats.sanjiCost;
  chopperCost.textContent = stats.chopperCost;
  robinCost.textContent = stats.robinCost;
  frankyCost.textContent = stats.frankyCost;
  brookCost.textContent = stats.brookCost;
  jimbeiCost.textContent = stats.jimbeiCost;
}

function updateStorage() {
  localStorage.setItem("stats", JSON.stringify(stats));
}

function Reset() {
  stats.hitCount = 0;
  stats.hitTrack = 0;
  stats.hps = 0;
  stats.luffys = 0;
  stats.zoros = 0;
  stats.namis = 0;
  stats.usopps = 0;
  stats.sanjis = 0;
  stats.choppers = 0;
  stats.robins = 0;
  stats.frankys = 0;
  stats.brooks = 0;
  stats.jimbeis = 0;
  stats.luffyCost = 15;
  stats.zoroCost = 100;
  stats.namiCost = 1100;
  stats.usoppCost = 12000;
  stats.sanjiCost = 130000;
  stats.chopperCost = 1400000;
  stats.robinCost = 20000000;
  stats.frankyCost = 330000000;
  stats.brookCost = 5100000000;
  stats.jimbeiCost = 75000000000;
  updatePage();
  updateStorage();
}
function punchsound() {
  let audio = new Audio("./assets/luffypunch.mp3");
  audio.play();
}

function punchCursor() {
  const punchCursorImage = new Image();
  punchCursorImage.src = "./assets/luffyfist.png";
  punchCursorImage.style.position = "absolute";
  punchCursorImage.style.left = `${event.clientX - 55}px`;
  punchCursorImage.style.top = `${event.clientY - 55}px`;
  punchCursorImage.style.background = "none";
  punchCursorImage.style.pointerEvents = "none";
  document.body.appendChild(punchCursorImage);

  setTimeout(function removepunchCursor() {
    document.body.removeChild(punchCursorImage);
  }, 500);
}
punchBtn.addEventListener("click", function () {
  hitEnemy();
  punchsound();
  punchCursor();
});

setInterval(function () {
  if (stats.hitTrack >= 1000000000000) {
    punchBtn.querySelector("img").src = "./assets/kaido.png";
  } else if (stats.hitTrack >= 100000000000) {
    punchBtn.querySelector("img").src = "./assets/bigmom.png";
  } else if (stats.hitTrack >= 10000000000) {
    punchBtn.querySelector("img").src = "./assets/katakuri.png";
  } else if (stats.hitTrack >= 1000000000) {
    punchBtn.querySelector("img").src = "./assets/doflamingo.png";
  } else if (stats.hitTrack >= 100000000) {
    punchBtn.querySelector("img").src = "./assets/hodyjones.png";
  } else if (stats.hitTrack >= 10000000) {
    punchBtn.querySelector("img").src = "./assets/akainu.png";
  } else if (stats.hitTrack >= 1000000) {
    punchBtn.querySelector("img").src = "./assets/moria.png";
  } else if (stats.hitTrack >= 100000) {
    punchBtn.querySelector("img").src = "./assets/lucci.png";
  } else if (stats.hitTrack >= 10000) {
    punchBtn.querySelector("img").src = "./assets/enel.png";
  } else if (stats.hitTrack > 1000) {
    punchBtn.querySelector("img").src = "./assets/crocodile.png";
  }
}, 1000);

luffyBtn.addEventListener("click", buyLuffy);
zoroBtn.addEventListener("click", buyZoro);
namiBtn.addEventListener("click", buyNami);
usoppBtn.addEventListener("click", buyUsopp);
sanjiBtn.addEventListener("click", buySanji);
chopperBtn.addEventListener("click", buyChopper);
robinBtn.addEventListener("click", buyRobin);
frankyBtn.addEventListener("click", buyFranky);
brookBtn.addEventListener("click", buyBrook);
jimbeiBtn.addEventListener("click", buyJimbei);
resetBtn.addEventListener("click", Reset);

setInterval(function () {
  stats.hitCount += stats.hps;
  stats.hitTrack += stats.hps;
  updatePage();
  updateStorage();
}, 1000);

setInterval(function () {
  if (stats.hitCount <= stats.luffyCost) {
    disable(luffyBtn);
  } else {
    enable(luffyBtn);
  }
  if (stats.hitCount <= stats.zoroCost) {
    disable(zoroBtn);
  } else {
    enable(zoroBtn);
  }
  if (stats.hitCount <= stats.namiCost) {
    disable(namiBtn);
  } else {
    enable(namiBtn);
  }
  if (stats.hitCount <= stats.usoppCost) {
    disable(usoppBtn);
  } else {
    enable(usoppBtn);
  }
  if (stats.hitCount <= stats.sanjiCost) {
    disable(sanjiBtn);
  } else {
    enable(sanjiBtn);
  }
  if (stats.hitCount <= stats.chopperCost) {
    disable(chopperBtn);
  } else {
    enable(chopperBtn);
  }
  if (stats.hitCount <= stats.robinCost) {
    disable(robinBtn);
  } else {
    enable(robinBtn);
  }
  if (stats.hitCount <= stats.frankyCost) {
    disable(frankyBtn);
  } else {
    enable(frankyBtn);
  }
  if (stats.hitCount <= stats.brookCost) {
    disable(brookBtn);
  } else {
    enable(brookBtn);
  }
  if (stats.hitCount <= stats.jimbeiCost) {
    disable(jimbeiBtn);
  } else {
    enable(jimbeiBtn);
  }
}, 1);
