# 🤍 Hochzeitsgeschenk für Justin

QR-Code scannen → dein persönlicher Brief → was aussieht wie ein harmloser
Persönlichkeitstest → Auflösung: eine Reise → Elfmeterschießen → Mystery Box
mit All-Inclusive → WhatsApp.

**Ab dem Test verrät nichts mehr, dass eine Reise kommt**, auch nicht der
Tab-Titel oder das Symbol. Und es wird nie sichtbar, dass es ein zweites
Reiseziel gab.

---

## Der Ordner

```
hochzeitsgeschenk/
├── index.html              ← die Seite selbst, muss hier oben bleiben
├── assets/
│   ├── app.js              ← Fragen, Punkte, Texte, Ablauf
│   ├── styles.css          ← das komplette Design
│   └── bilder/
│       ├── umarmung.png    ← Startseite, über deinem Brief
│       ├── pool.png        ← im Test, als „Archivaufnahme"
│       └── leon.png        ← am Ende, als Ansprechpartner
├── README.md               ← diese Anleitung, geht nicht online
└── .vercelignore           ← sagt Vercel, was es weglassen soll
```

**Anfassen musst du eigentlich nur `assets/app.js`.** Ganz oben stehen dort
alle Einstellungen, darunter die Fragen und dein Brief.

### Bilder austauschen

Neues Bild einfach unter demselben Namen nach `assets/bilder/` legen, fertig.
Heißt deine Datei anders oder ist es ein `.jpg`, trag den Namen oben in
`assets/app.js` bei `bildUmarmung`, `bildPool` oder `bildLeon` ein.

Fehlt ein Bild, wird die Stelle still ausgeblendet. Die Seite sieht dann
zwar leerer aus, geht aber nicht kaputt. Hochkant-Bilder sind kein Problem,
sie werden automatisch passend beschnitten.

## Der Ablauf

| # | Screen | Was er sieht |
|---|---|---|
| 1 | **Brief** | Umarmungsfoto, dein persönlicher Text, Button „Jetzt weiter zum Geschenk" |
| 2 | Intro | „Institut für angewandte Lebensfreude", Poolfoto, „Proband: Justin" |
| 3 | Quiz | 10 Module, je 2 Antworten |
| 4 | Auswertung | Fake-Ladebalken, „Dr. Kollett sichtet die Ergebnisse" |
| 5 | **Gutachten** | Persönlichkeitstyp, Übereinstimmung in Prozent, Nebenbefund zur Verpeiltheit, Unterschrift von Dr. Kollett |
| 6 | **Auflösung** | „Dr. Kollett verordnet dir: **Mallorca**", Konfetti |
| 7 | Elfmeter | Bonus-Banner, Tor, Torwart, drei Ecken |
| 8 | Gewinn | All-Inclusive-Paket, dein Foto, WhatsApp-Button. **Ende.** |

Der Brief steht bewusst am Anfang: Am Ende geht er über den WhatsApp-Button
weg und käme nie wieder zurück.

Ab Screen 2 verrät nichts mehr, dass eine Reise kommt. Auch nicht, dass es
ein zweites Reiseziel gab.

## 1. Was du anpassen kannst

Ganz oben in **`app.js`** im Block `CONFIG`:

| Einstellung | Bedeutung |
|---|---|
| `freundName` | steht als „Proband" im Intro und als Anrede im Brief |
| `whatsappNummer` | aktuell `491754421584` |
| `whatsappText` | die Nachricht, die in seinem WhatsApp vorausgefüllt ist |
| `gutachter` | aktuell „Dr. Kollett" |
| `deinName` | dein Name unter dem Brief |
| `ergebnisFestlegen` | siehe unten |

### Dein Brief auf der Startseite

Steht direkt darunter in `DANKE_TEXT`, ein Absatz pro Zeile. Lies ihn
auf jeden Fall nochmal durch und schreib ihn um, wie du es sagen würdest.

### Wenn die Reise schon gebucht ist

```js
ergebnisFestlegen: "mallorca",   // oder "irland"
```

Der Test läuft normal durch, das Ergebnis steht aber fest. `null` wertet
ehrlich nach Punkten aus (aktuelle Einstellung).

---

## 2. Die Fragen

Im Array `FRAGEN`. `m` sind Punkte für Mallorca, `i` für Irland.
Mehr Punkte gewinnt. Er sieht diese Konten nie, nur eine Übereinstimmung
in Prozent.

**Beide Ziele sind wirklich erreichbar.** Maximal sind 27 Punkte pro Seite
drin, ab 14 Punkten gewinnt eine Seite. Von den 512 möglichen Antwort-
kombinationen führen exakt 256 nach Mallorca und 256 nach Irland, einen
Gleichstand kann es rechnerisch nicht geben.

| Modul | Mallorca | Irland |
|---|---|---|
| Thermoregulation | Warm (3) | Frisch (3) |
| Flüssigkeitspräferenz | Bier (3) | Whisky (3) |
| Freizeitverhalten | Fußball spielen (2) | Zocken, FIFA und Fortnite (2) |
| Aufmerksamkeitsspanne | 0 | 0 |
| Habitat-Analyse | Strand (3) | Natur (3) |
| Nahrungsaufnahme | Paella und Tapas (3) | Fish and Chips (3) |
| Akustische Reize | Party-Playlist (3) | Live-Musik in der Kneipe (3) |
| Aktivitätsindex | Liegestuhl (3) | Roadtrip (3) |
| Visuelle Präferenz | Palmen (3) | Schafe (3) |
| Kontrollfrage | Pool bei 30 Grad (4) | Pub-Tour (4) |

**Modul „Aufmerksamkeitsspanne"** („Du suchst dein Handy, wie oft hältst du
es dabei schon in der Hand?") zählt bewusst null Punkte. Es steuert nur,
welcher Nebenbefund im Gutachten steht. Egal was er antwortet, verpeilt ist
er laut Gutachten trotzdem. Die beiden Texte stehen in `BEFUNDE`.

---

## 3. Das Elfmeterschießen

Er tippt eine der drei Ecken an. Der Ausgang steht fest, nur die Flugbahn
richtet sich nach seiner Wahl:

1. **Schuss 1** → der Keeper springt in genau die Ecke und hält.
2. **Schuss 2** → Pfosten oder Latte.
3. Pop-up: **„Der Torwart war zu früh von der Linie. Wiederholung!"**
4. **Schuss 3** → der Keeper ist dran („Er ist dran…!") und lässt den Ball
   durch die Hände rutschen. **TOOOR**, Mystery Box, All-Inclusive.

Steht in `app.js` in `schiesse()`, `gehaltenReaktion()`, `aluminium()` und `tor()`.

---

## 4. Lokal ansehen

Doppelklick auf `index.html`.

## 5. Bei Vercel live bringen

```bash
npx vercel --prod
```

Beim ersten Mal Login, danach alles mit Enter bestätigen. Am Ende bekommst
du eine URL wie `https://dein-projekt.vercel.app` für den QR-Code.

> Wichtig: Die Bilder müssen im Ordner liegen, bevor du deployst.
> Änderungen werden erst live, wenn du `vercel --prod` nochmal ausführst.
> Siehst du danach die alte Version, zähl in `index.html` die `?v=7`
> hinter `styles.css` und `app.js` auf `?v=8` hoch.
