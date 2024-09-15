const verses = [
   
    "Befiehl dem Herrn deinen Weg, und vertraue auf ihn, so wird er es vollbringen. - Psalmen‬ ‭37‬:‭5‬",
    "Der Gerechte aber wird aus Glauben leben; doch: Wenn er feige zurückweicht, so wird meine Seele kein Wohlgefallen an ihm haben. Wir aber gehören nicht zu denen, die feige zurückweichen zum Verderben, sondern zu denen, die glauben zur Errettung der Seele. - Hebräerbrief‬ ‭10‬:‭38‬-‭39‬",
    "Bevor du reagierst, nimm dir einen Moment, um dich zu beruhigen. Handle nicht impulsiv aus deinen Emotionen heraus.\n\n>Geduld zu haben ist besser, als ein Held zu sein; und sich selbst beherrschen ist besser, als Städte zu erobern!< - Sprüche 16:32"
];

function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
}

function showVerse() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('verse').style.display = 'block';
    document.getElementById('verse').innerText = getRandomVerse();
}

// Ladeanimation 3 Sekunden anzeigen, dann Vers zeigen
setTimeout(showVerse, 3000);

// Blinkende Punkte
let dotIndex = 0;
const dots = ["", ".", "..", "..."];
setInterval(() => {
    document.getElementById('dots').innerText = dots[dotIndex];
    dotIndex = (dotIndex + 1) % dots.length;
}, 500);

