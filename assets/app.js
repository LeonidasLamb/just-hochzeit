/* ═══════════════════════════════════════════════════════════════
   HOCHZEITSGESCHENK, getarnt als Charaktertest
   Quiz · Gutachten · Auflösung · Elfmeter · Danke
   ═══════════════════════════════════════════════════════════════ */

/* ╔══════════════════════════════════════════════════════════╗
   ║  1. HIER ALLES ANPASSEN                                  ║
   ╚══════════════════════════════════════════════════════════╝ */
const CONFIG = {

  // Name deines Freundes
  freundName: "Justin",

  // Deine WhatsApp-Nummer: Ländervorwahl ohne + und ohne 0
  whatsappNummer: "491754421584",
  whatsappText:   "Alter. Ich hab gerade die Reise UND das All-Inclusive-Paket gewonnen 🎉",

  // Dein Name als Gutachter, Ansprechpartner und Absender
  gutachter:  "Dr. Collet",
  deinName:   "Leon",
  deineRolle: "alias Dr. Collet. Gutachter, Reiseberater, bester Kumpel.",

  // ── BILDER ───────────────────────────────────────────────
  // Einfach die drei Dateien in diesen Ordner legen, nach Motiv benannt.
  // Fehlt eine, wird sie automatisch ausgeblendet, nichts geht kaputt.
  bildUmarmung: "assets/bilder/umarmung.png",  // Startseite, über deinem Brief
  bildPool:     "assets/bilder/pool.png",      // Charaktertest, als Archivaufnahme
  bildLeon:     "assets/bilder/leon.png",

  // ── DAS FLUGTICKET auf der Gewinnseite ───────────────────
  ticket: {
    airline:     "COLLET AIR",
    klasse:      "FIRST CLASS",
    flugnummer:  "CL 001",
    sitzplatz:   "1",
    datum:       "[ legen wir zusammen fest ]",
    abflugCode:  "DE",            // z.B. FRA, DUS, STR
    abflugOrt:   "Deutschland",
  },

  // ⚠️ Falls die Reise schon gebucht ist: "mallorca" oder "irland".
  //    Der Test läuft normal durch, das Ergebnis steht aber fest.
  //    null = ehrliche Auswertung nach Punkten
  ergebnisFestlegen: null,
};

/* ╔══════════════════════════════════════════════════════════╗
   ║  2. DEIN PERSÖNLICHER TEXT AUF DER LETZTEN SEITE          ║
   ╚══════════════════════════════════════════════════════════╝ */
const DANKE_TEXT = [
  "Bevor du gleich weiterklickst, kurz etwas Ernstes.",
  "Du bist einer von ganz wenigen, die wirklich alles über mich wissen. "
  + "Bei dir muss ich nichts erklären und habe nie ein schlechtes Gewissen, "
  + "wenn mal Wochen dazwischen liegen.",
  "Ob wir uns im Jahr einmal sehen oder vierzig Mal: Es ist immer gut. "
  + "Ich kann mich auf dich verlassen, und du dich auf mich. Das war immer so "
  + "und das bleibt auch so.",
  "Danke für die letzten Jahre. Für jede Runde FIFA, jede Nacht in Fortnite "
  + "und für jedes Mal, wo du einfach da warst, ohne dass ich fragen musste.",
  "Ich freu mich auf alles, was noch kommt. Auf viele weitere Abende, viele "
  + "weitere Jahre und darauf, dass sich daran nichts ändert.",
  "Herzlichen Glückwunsch zu deiner Hochzeit. Und jetzt klick weiter, "
  + "ich hab da noch was für dich.",
];

/* ╔══════════════════════════════════════════════════════════╗
   ║  3. DIE BEIDEN ZIELE                                      ║
   ║     typ + gutachten sieht er VOR der Auflösung             ║
   ╚══════════════════════════════════════════════════════════╝ */
const ZIELE = {
  mallorca: {
    name:    "Mallorca",
    emoji:   "🏝️",
    code:    "PMI",                  // Flughafen fürs Ticket
    flugziel:"Palma de Mallorca",
    tagline: "Sonne, Meer und keine einzige Regenjacke im Koffer.",

    typ:       "Der Sonnen-Optimierer",
    typEmoji:  "🕶️",
    gutachten: "Dein Organismus bezieht Lebensenergie fast ausschließlich aus "
             + "direkter Sonneneinstrahlung. Unterhalb von 25 Grad ist deine "
             + "Leistungsfähigkeit laut Erhebung stark eingeschränkt.",
  },
  irland: {
    name:    "Irland",
    emoji:   "🍀",
    code:    "DUB",                  // Flughafen fürs Ticket
    flugziel:"Dublin, Irland",
    tagline: "Grüne Klippen, dunkles Bier und Kamin­feuer am Abend.",

    typ:       "Der Wetterfeste",
    typEmoji:  "🧭",
    gutachten: "Du bevorzugst Wind, Weite und alles, was man zu Fuß erreichen "
             + "kann. Dein Typ gilt als bemerkenswert widerstandsfähig gegen "
             + "Regen, Kälte und oberflächlichen Smalltalk.",
  },
};

/* ╔══════════════════════════════════════════════════════════╗
   ║  4. DIE FRAGEN, immer genau 2 Optionen                    ║
   ║     m = Punkte für Mallorca · i = Punkte für Irland        ║
   ╚══════════════════════════════════════════════════════════╝ */
const FRAGEN = [
  {
    kategorie: "Thermoregulation",
    frage: "Sag mal ganz spontan: lieber warm oder lieber kalt?",
    optionen: [
      { emoji:"☀️", label:"Warm, je heißer desto besser",   m:3, i:0 },
      { emoji:"🧥", label:"Frisch, da fühl ich mich wohler", m:0, i:3 },
    ],
  },
  {
    kategorie: "Flüssigkeitspräferenz",
    frage: "Es ist 20 Uhr. Was steht vor dir?",
    optionen: [
      { emoji:"🍺", label:"Ein kaltes Bier",  m:3, i:0 },
      { emoji:"🥃", label:"Ein guter Whisky", m:0, i:3 },
    ],
  },
  {
    kategorie: "Freizeitverhalten",
    frage: "Der Abend gehört ganz dir. Was machst du?",
    optionen: [
      { emoji:"⚽", label:"Fußball spielen",                    m:2, i:0 },
      { emoji:"🎮", label:"Zocken. FIFA, Fortnite, du weißt schon.", m:0, i:2 },
    ],
  },
  {
    // Reine Spaßfrage, zählt bewusst null Punkte
    kategorie: "Aufmerksamkeitsspanne",
    frage: "Du suchst dein Handy. Wie oft hältst du es dabei schon in der Hand?",
    optionen: [
      { emoji:"😇", label:"Ist mir noch nie passiert", m:0, i:0, key:"leugnet" },
      { emoji:"🙈", label:"Dazu sag ich jetzt nichts", m:0, i:0, key:"gesteht" },
    ],
  },
  {
    kategorie: "Habitat-Analyse",
    frage: "Strand oder Natur?",
    optionen: [
      { emoji:"🏖️", label:"Strand, Handtuch, fertig", m:3, i:0 },
      { emoji:"🏞️", label:"Natur, am liebsten weit",  m:0, i:3 },
    ],
  },
  {
    kategorie: "Nahrungsaufnahme",
    frage: "Der Teller ist voll. Womit?",
    optionen: [
      { emoji:"🥘", label:"Paella und Tapas", m:3, i:0 },
      { emoji:"🍟", label:"Fish and Chips",   m:0, i:3 },
    ],
  },
  {
    kategorie: "Akustische Reize",
    frage: "Musik läuft. Was hörst du am liebsten?",
    optionen: [
      { emoji:"🎉", label:"Party-Playlist zum Mitgrölen", m:3, i:0 },
      { emoji:"🎸", label:"Live-Musik in der Kneipe",     m:0, i:3 },
    ],
  },
  {
    kategorie: "Aktivitätsindex",
    frage: "Wie sieht dein perfekter Urlaubstag aus?",
    optionen: [
      { emoji:"🛋️", label:"Liegestuhl. Den ganzen Tag.",  m:3, i:0 },
      { emoji:"🚗", label:"Roadtrip, jeden Tag woanders", m:0, i:3 },
    ],
  },
  {
    kategorie: "Visuelle Präferenz",
    frage: "Was würdest du lieber aus dem Fenster sehen?",
    optionen: [
      { emoji:"🌴", label:"Palmen", m:3, i:0 },
      { emoji:"🐑", label:"Schafe", m:0, i:3 },
    ],
  },
  {
    kategorie: "Kontrollfrage",
    frage: "Hand aufs Herz: womit kann man dich eher locken?",
    optionen: [
      { emoji:"😎", label:"30 Grad und Pool",       m:4, i:0 },
      { emoji:"🍻", label:"Pub-Tour mit den Jungs", m:0, i:4 },
    ],
  },
];

/* ╔══════════════════════════════════════════════════════════╗
   ║  5. NEBENBEFUND im Gutachten (der Verpeilt-Gag)           ║
   ╚══════════════════════════════════════════════════════════╝ */
const BEFUNDE = {
  leugnet: "<strong>Nebenbefund:</strong> Die Selbsteinschätzung des Probanden "
         + "weicht erheblich von der Aktenlage ab. Zerstreuungsneigung: stark "
         + "ausgeprägt. Therapie nicht erforderlich, laut Gutachten sogar liebenswert.",
  gesteht: "<strong>Nebenbefund:</strong> Zerstreuungsneigung bestätigt und vom "
         + "Probanden eingeräumt. Therapie nicht erforderlich, laut Gutachten "
         + "sogar liebenswert.",
};

/* ═══════════════════════════════════════════════════════════════
   AB HIER MUSST DU NICHTS MEHR ÄNDERN
   ═══════════════════════════════════════════════════════════════ */

const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const state = {
  frageIndex: 0,
  antworten: [],
  punkte: { m:0, i:0 },
  ziel: null,
  schuesse: 0,
};

function zeigeScreen(id){
  $$(".screen").forEach(s => s.classList.remove("is-active"));
  $("#screen-" + id).classList.add("is-active");
  window.scrollTo({ top:0, behavior:"instant" });
}

function vibrieren(ms){
  if (navigator.vibrate) { try { navigator.vibrate(ms); } catch(e){} }
}

/* Bild laden, und bei fehlender Datei den ganzen Block ausblenden */
function ladeBild(imgSel, wrapSel, pfad){
  const img = $(imgSel), wrap = wrapSel ? $(wrapSel) : null;
  if (!img) return;
  img.addEventListener("load", () => {
    img.classList.add("is-loaded");
    if (wrap) wrap.hidden = false;
  });
  img.addEventListener("error", () => {
    if (wrap) wrap.hidden = true; else img.remove();
  });
  img.src = pfad;
}

/* ═══════════ INTRO ═══════════ */
(function initIntro(){
  const jahr = new Date().getFullYear();
  $("#intro-proband").innerHTML = CONFIG.freundName
    ? "Proband: <strong>" + CONFIG.freundName + "</strong>, Erhebung " + jahr
    : "Erhebung " + jahr + ", Teilnahme freiwillig";

  $("#intro-anzahl").textContent = FRAGEN.length;
  ladeBild("#foto-start", "#akte-start", CONFIG.bildPool);

  $("#btn-start").addEventListener("click", () => {
    zeigeScreen("quiz");
    renderFrage();
  });
})();

/* ═══════════ QUIZ ═══════════ */
function renderFrage(){
  const f = FRAGEN[state.frageIndex];
  const nr = state.frageIndex + 1;

  $("#q-counter").textContent = "Modul " + nr + " von " + FRAGEN.length;
  $("#q-percent").textContent = Math.round((state.frageIndex / FRAGEN.length) * 100) + " %";
  $("#progress-bar").style.width = ((state.frageIndex / FRAGEN.length) * 100) + "%";

  $("#q-category").textContent = f.kategorie;
  $("#q-text").textContent     = f.frage;

  const box = $("#q-options");
  box.innerHTML = "";
  f.optionen.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.type = "button";
    btn.innerHTML =
      '<span class="option__emoji">' + opt.emoji + '</span>' +
      '<span class="option__label">' + opt.label + '</span>';
    btn.addEventListener("click", () => waehle(btn, opt, f));
    box.appendChild(btn);
  });

  $("#btn-back").hidden = state.frageIndex === 0;
}

function waehle(btn, opt, frage){
  const box = btn.closest(".options");
  if (box.classList.contains("is-locked")) return;
  box.classList.add("is-locked");
  btn.classList.add("is-picked");
  vibrieren(12);

  state.antworten[state.frageIndex] = {
    frage: frage.frage, kategorie: frage.kategorie,
    gewaehlt: opt.label, emoji: opt.emoji,
    m: opt.m, i: opt.i, key: opt.key || null,
  };

  setTimeout(() => {
    const card = $("#quiz-card");
    card.classList.add("is-leaving");
    setTimeout(() => {
      card.classList.remove("is-leaving");
      $("#q-options").classList.remove("is-locked");
      state.frageIndex++;
      if (state.frageIndex < FRAGEN.length) {
        renderFrage();
      } else {
        $("#progress-bar").style.width = "100%";
        $("#q-percent").textContent = "100 %";
        starteBerechnung();
      }
    }, 210);
  }, 260);
}

$("#btn-back").addEventListener("click", () => {
  if (state.frageIndex > 0) {
    state.frageIndex--;
    state.antworten.pop();
    renderFrage();
  }
});

/* ═══════════ AUSWERTUNG ═══════════ */
function starteBerechnung(){
  zeigeScreen("calc");
  const steps = $$("#calc-steps li");
  steps.forEach(s => s.classList.remove("is-done"));
  steps.forEach((li, idx) => {
    setTimeout(() => li.classList.add("is-done"), 420 + idx * 520);
  });
  setTimeout(zeigeGutachten, 420 + steps.length * 520 + 500);
}

function berechneZiel(){
  state.punkte = state.antworten.reduce(
    (acc, a) => ({ m: acc.m + a.m, i: acc.i + a.i }),
    { m:0, i:0 }
  );

  if (CONFIG.ergebnisFestlegen === "mallorca" || CONFIG.ergebnisFestlegen === "irland") {
    return CONFIG.ergebnisFestlegen;
  }
  if (state.punkte.m === state.punkte.i) {
    const letzte = state.antworten[state.antworten.length - 1];
    return letzte && letzte.i > letzte.m ? "irland" : "mallorca";
  }
  return state.punkte.m > state.punkte.i ? "mallorca" : "irland";
}

/* Stufe 1: das harmlose Gutachten, ohne jeden Hinweis auf eine Reise
   und ohne erkennbare Alternative. */
function zeigeGutachten(){
  const key  = berechneZiel();
  state.ziel = key;
  const ziel = ZIELE[key];

  $("#profile-emoji").textContent = ziel.typEmoji;
  $("#profile-type").textContent  = ziel.typ;
  $("#profile-text").textContent  = ziel.gutachten;

  const gesamt  = state.punkte.m + state.punkte.i || 1;
  const anteil  = Math.max(state.punkte.m, state.punkte.i) / gesamt;
  const prozent = Math.round(70 + (anteil - 0.5) * 60);
  setTimeout(() => { $("#match-fill").style.width = prozent + "%"; }, 320);
  $("#match-value").textContent = prozent + " %";

  const gag = state.antworten.find(a => a.key);
  $("#befund").innerHTML = BEFUNDE[gag ? gag.key : "gesteht"];

  $(".signatur").innerHTML =
    "gez. " + CONFIG.gutachter + "<br><span>Institut für angewandte Lebensfreude</span>";

  baueWarumBox();
  zeigeScreen("profile");
  vibrieren(25);
}

/* Stufe 2: die Auflösung */
function zeigeErgebnis(){
  if (!state.ziel) return;              // Sicherheitsnetz gegen Doppelklicks
  const ziel = ZIELE[state.ziel];

  $("#result-emoji").textContent       = ziel.emoji;
  $("#result-destination").textContent = ziel.name;
  $("#result-tagline").textContent     = ziel.tagline;
  $("#final-destination").textContent  = ziel.name;
  baueTicket(ziel);

  zeigeScreen("result");
  konfetti(150);
  vibrieren([30, 60, 30]);

  setTimeout(() => {
    $("#bonus-bar").classList.add("is-in");
    vibrieren(25);
  }, 2000);
}

$("#btn-to-reveal").addEventListener("click", zeigeErgebnis);

/* ═══════════ BOARDING PASS auf der Gewinnseite ═══════════ */
function baueTicket(ziel){
  const t = CONFIG.ticket;

  $("#ticket-airline").textContent   = t.airline;
  $("#ticket-klasse").textContent    = t.klasse;
  $("#ticket-von-code").textContent  = t.abflugCode;
  $("#ticket-von-ort").textContent   = t.abflugOrt;
  $("#ticket-nach-code").textContent = ziel.code;
  $("#ticket-nach-ort").textContent  = ziel.flugziel;
  $("#ticket-passagier").textContent = CONFIG.freundName || "Passagier";
  $("#ticket-flug").textContent      = t.flugnummer;
  $("#ticket-datum").textContent     = t.datum;
  $("#ticket-sitz").textContent      = t.sitzplatz;

  // Barcode aus unterschiedlich breiten Strichen
  const code = $("#ticket-barcode");
  if (!code.childElementCount){
    let html = "";
    for (let n = 0; n < 46; n++){
      html += "<i style='width:" + (1 + Math.floor(Math.random() * 3)) + "px'></i>";
    }
    code.innerHTML = html;
  }
}

function baueWarumBox(){
  const zielKey = state.ziel;
  const relevant = state.antworten.filter(a =>
    zielKey === "mallorca" ? a.m > a.i : a.i > a.m
  );
  const liste = relevant
    .map(a => "<li><span class='why-emo'>" + a.emoji + "</span><b>" + a.gewaehlt +
              "</b> <span>(" + a.kategorie + ")</span></li>")
    .join("");

  $("#why-box").innerHTML =
    "<p>Ausschlaggebend waren diese Angaben:</p><ul>" + liste + "</ul>";
}

$("#btn-why").addEventListener("click", (e) => {
  const box = $("#why-box");
  box.hidden = !box.hidden;
  e.target.textContent = box.hidden ? "Wie kommt das zustande? ▾" : "Verstecken ▴";
});

$("#btn-to-penalty").addEventListener("click", () => {
  $("#bonus-bar").classList.remove("is-in");
  zeigeScreen("penalty");
});

/* ═══════════════════════════════════════════════════════════════
   ELFMETERSCHIESSEN
   Schuss 1 gehalten · Schuss 2 Aluminium · Schuss 3 Patzer und Tor
   ═══════════════════════════════════════════════════════════════ */
const ECKEN = {
  links:  { x:-0.30, y:-0.62 },
  mitte:  { x: 0.00, y:-0.68 },
  rechts: { x: 0.30, y:-0.62 },
};

const ball   = $("#ball");
const keeper = $("#keeper");
const pitch  = $("#pitch");
let schussLaeuft = false;

function setzeBallZurueck(){
  ball.style.transition = "none";
  ball.style.transform  = "translate(-50%, 0) scale(1)";
  ball.offsetHeight;
  ball.style.transition = "";
  keeper.className = "keeper";
}

function zieleAktiv(an){
  $$(".target").forEach(t => { t.disabled = !an; });
  pitch.classList.toggle("is-ready", an);
}

function schiesse(ecke){
  if (schussLaeuft) return;
  schussLaeuft = true;
  zieleAktiv(false);
  $("#penalty-status").textContent = "";
  $("#penalty-status").className   = "status-line";
  vibrieren(18);

  state.schuesse++;
  const trifft   = state.schuesse >= 3;
  const gehalten = state.schuesse === 1;

  const b = pitch.getBoundingClientRect();
  const ziel = ECKEN[ecke];
  keeper.style.setProperty("--sprung", (b.width * 0.30) + "px");

  const faktor = (!trifft && !gehalten) ? 1.42 : 1;
  const zx = ziel.x * b.width  * faktor;
  const zy = ziel.y * b.height * (ecke === "mitte" && !trifft && !gehalten ? 1.34 : 1);
  ball.style.transform = "translate(calc(-50% + " + zx + "px), " + zy + "px) scale(.55)";

  // Der Keeper springt fast immer richtig. Beim dritten Schuss patzt er nur.
  const sprung = (gehalten || trifft) ? ecke : gegenEcke(ecke);
  setTimeout(() => keeper.classList.add("springt-" + sprung), 120);

  setTimeout(() => {
    if (trifft)        tor(ecke);
    else if (gehalten) gehaltenReaktion(ecke);
    else               aluminium(ecke);
  }, 620);
}

function gegenEcke(ecke){
  if (ecke === "links")  return "rechts";
  if (ecke === "rechts") return "links";
  return Math.random() < 0.5 ? "links" : "rechts";
}

function gehaltenReaktion(ecke){
  ball.style.transition = "transform .5s cubic-bezier(.3,.9,.4,1)";
  const b = pitch.getBoundingClientRect();
  ball.style.transform =
    "translate(calc(-50% + " + (ECKEN[ecke].x * b.width * 1.7) + "px), " +
    (b.height * -0.12) + "px) scale(.8)";

  const s = $("#penalty-status");
  s.className = "status-line is-loss";
  s.innerHTML = "🧤 <strong>Gehalten!</strong><br>Der stand goldrichtig. Fast so, als hätte er es geahnt.";
  $("#penalty-counter").textContent = "Noch 1 Versuch";
  vibrieren(60);

  setTimeout(() => {
    setzeBallZurueck();
    zieleAktiv(true);
    schussLaeuft = false;
    $("#penalty-hint").textContent = "Nochmal. Diesmal mit Gefühl.";
  }, 1500);
}

function aluminium(ecke){
  ball.style.transition = "transform .55s cubic-bezier(.3,.9,.4,1)";
  const b = pitch.getBoundingClientRect();
  ball.style.transform =
    "translate(calc(-50% + " + (ECKEN[ecke].x * b.width * 1.6) + "px), " +
    (b.height * -0.10) + "px) scale(.8)";

  const wohin = ecke === "mitte" ? "An die Latte!" : "An den Pfosten!";
  const s = $("#penalty-status");
  s.className = "status-line is-loss";
  s.innerHTML = "😩 <strong>" + wohin + "</strong><br>"
              + "<em>Drei Zentimeter vom Ruhm entfernt. Wenn es nicht sein soll, soll es nicht sein…</em>";
  $("#penalty-counter").textContent = "Keine Versuche mehr";
  $("#penalty-hint").textContent = "";
  vibrieren([60, 80, 60]);

  setTimeout(() => { $("#modal-secondchance").hidden = false; }, 1700);
}

function tor(ecke){
  const b = pitch.getBoundingClientRect();
  const s = $("#penalty-status");

  // Akt 1: der Keeper kriegt die Hand dran
  s.className = "status-line";
  s.innerHTML = "🧤 <strong>Er ist dran…!</strong>";
  ball.style.transition = "transform .3s ease-out";
  ball.style.transform =
    "translate(calc(-50% + " + (ECKEN[ecke].x * b.width * 0.86) + "px), " +
    (ECKEN[ecke].y * b.height * 0.86) + "px) scale(.62)";
  vibrieren(45);

  // Akt 2: und lässt ihn durchrutschen
  setTimeout(() => {
    keeper.classList.add("patzt");
    ball.style.transition = "transform 1s cubic-bezier(.3,.7,.4,1)";
    ball.style.transform =
      "translate(calc(-50% + " + (ECKEN[ecke].x * b.width * 1.14) + "px), " +
      (ECKEN[ecke].y * b.height * 1.16) + "px) scale(.4)";
    $("#net").classList.add("is-hit");

    const patzer = ecke === "mitte"
      ? "Durch die Beine. Der sucht den Ball heute noch."
      : "Durch die Hände gerutscht. Der sucht den Ball heute noch.";
    s.className = "status-line is-win";
    s.innerHTML = "⚽ <strong>TOOOR!</strong><br>" + patzer;

    $("#penalty-counter").textContent = "";
    $("#penalty-hint").textContent = "";
    konfetti(120);
    vibrieren([40, 50, 40, 50, 120]);
  }, 850);

  setTimeout(() => { $("#modal-mystery").hidden = false; }, 2900);
}

$("#btn-lastchance").addEventListener("click", () => {
  $("#modal-secondchance").hidden = true;
  setzeBallZurueck();
  zieleAktiv(true);
  schussLaeuft = false;
  const s = $("#penalty-status");
  s.className = "status-line is-win";
  s.innerHTML = "Der Schiri lässt wiederholen. 🤞<br>Sowas gibt es sonst nur im Fernsehen.";
  $("#penalty-counter").textContent = "Allerletzter Versuch";
  $("#penalty-hint").textContent = "Jetzt aber. Kein Druck.";
  vibrieren(30);
});

$$(".target").forEach(t => {
  t.addEventListener("click", () => schiesse(t.dataset.ecke));
});

/* ═══════════ MYSTERY BOX ═══════════ */
let boxOffen = false;
$("#mystery-box").addEventListener("click", () => {
  if (boxOffen) return;
  boxOffen = true;
  $("#mystery-box").classList.add("is-opening");
  $("#mystery-hint").textContent = "";
  konfetti(260);
  vibrieren([60, 40, 60, 40, 200]);

  setTimeout(() => {
    $("#modal-mystery").hidden = true;
    zeigeScreen("final");
    konfetti(180);
  }, 900);
});

/* ═══════════ GEWINN-SEITE ═══════════ */
(function initFinale(){
  const nummer = CONFIG.whatsappNummer.replace(/[^0-9]/g, "");
  const link   = "https://wa.me/" + nummer + "?text=" + encodeURIComponent(CONFIG.whatsappText);
  $$(".btn-wa").forEach(a => { a.href = link; });

  $("#agent-name").textContent = CONFIG.deinName;
  $("#agent-role").textContent = CONFIG.deineRolle;

  const img = $("#agent-photo");
  img.addEventListener("load",  () => img.classList.add("is-loaded"));
  img.addEventListener("error", () => img.remove());
  img.src = CONFIG.bildLeon;
})();

/* ═══════════ BRIEF (Startseite) ═══════════ */
(function initBrief(){
  const anrede = CONFIG.freundName ? CONFIG.freundName + "," : "Mein Lieber,";
  $("#brief").innerHTML =
    "<p class='brief__anrede'>" + anrede + "</p>" +
    DANKE_TEXT.map(t => "<p>" + t + "</p>").join("") +
    "<p class='brief__gruss'>Dein " + CONFIG.deinName + "</p>";

  ladeBild("#foto-danke", "#danke-foto", CONFIG.bildUmarmung);

  $("#btn-zum-geschenk").addEventListener("click", () => {
    zeigeScreen("intro");
    vibrieren(15);
  });
})();

/* ═══════════ KONFETTI ═══════════ */
const cCanvas = $("#confetti-canvas");
const cCtx    = cCanvas.getContext("2d");
let teilchen  = [];
let konfettiLaeuft = false;

function passeCanvasAn(){
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  cCanvas.width  = window.innerWidth  * dpr;
  cCanvas.height = window.innerHeight * dpr;
  cCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
passeCanvasAn();
window.addEventListener("resize", passeCanvasAn);

const FARBEN = ["#f5c451","#ff9d4d","#3fc07f","#ff6b9d","#7bc5ff","#ffffff","#e0a020"];

function konfetti(anzahl){
  const w = window.innerWidth;
  for (let n = 0; n < anzahl; n++){
    teilchen.push({
      x: w * 0.5 + (Math.random() - 0.5) * w * 0.85,
      y: -20 - Math.random() * 120,
      vx: (Math.random() - 0.5) * 3.4,
      vy: 2.2 + Math.random() * 3.6,
      g:  0.055 + Math.random() * 0.05,
      b:  4 + Math.random() * 7,
      h:  6 + Math.random() * 9,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.24,
      farbe: FARBEN[Math.floor(Math.random() * FARBEN.length)],
      leben: 1,
    });
  }
  if (!konfettiLaeuft){ konfettiLaeuft = true; requestAnimationFrame(konfettiFrame); }
}

function konfettiFrame(){
  cCtx.clearRect(0, 0, cCanvas.width, cCanvas.height);
  const hoehe = window.innerHeight;

  teilchen = teilchen.filter(p => {
    p.vy += p.g;
    p.vx *= 0.995;
    p.x  += p.vx;
    p.y  += p.vy;
    p.rot += p.vr;
    if (p.y > hoehe * 0.72) p.leben -= 0.016;
    if (p.y > hoehe + 40 || p.leben <= 0) return false;

    cCtx.save();
    cCtx.globalAlpha = Math.max(p.leben, 0);
    cCtx.translate(p.x, p.y);
    cCtx.rotate(p.rot);
    cCtx.fillStyle = p.farbe;
    cCtx.fillRect(-p.b / 2, -p.h / 2, p.b, p.h);
    cCtx.restore();
    return true;
  });

  if (teilchen.length > 0) requestAnimationFrame(konfettiFrame);
  else { konfettiLaeuft = false; cCtx.clearRect(0, 0, cCanvas.width, cCanvas.height); }
}
