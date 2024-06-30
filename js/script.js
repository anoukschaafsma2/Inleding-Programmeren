const spelenButton = document.querySelector ('.spelen');
const etengevenButton = document.getElementById ('etengeven');
const aaienButton = document.getElementById ('aaien');
const springenButton = document.getElementById ('springen');
const staandeKat = document.querySelector ('.staandeKat');
const purAudio = document.getElementById ('Purringcat');
const eatAudio = document.getElementById ('Eatingcat');
const bankAchtergrond = document.getElementById ('bank');
const plantAchtergrond = document.getElementById ('plant');
const boekAchtergrond = document.getElementById ('boek');
const geenAchtergrond = document.getElementById ('geen');

//deze functie laat de purAudio afspelen doormiddel van 'play'
function purring () {
  purAudio.play ();
}

function voerUit (actie) { //deze functie voert verschillende acties uit op basis van de waarde van de 'actie' parameter
  eatAudio.pause (); //pauzeert de audio
  eatAudio.currentTime = 0; // Zet de afspeeltijd van het eetgeluid terug naar 0
  if (actie === 'spelen') {
    staandeKat.src = 'images/speelt.png';
  } else if (actie === 'etengeven') {
    staandeKat.src = 'images/eten.png';
    eatAudio.play ();
  } else if (actie === 'aaien') {
    staandeKat.src = 'images/spelen.png';
    purring ();
  } else if (actie === 'springen') {
    staandeKat.src = 'images/staand.png';
    springen ();
  }
}

function kiesAchtergrond (backround) { //deze functie stelt verschillende achtergronden in op basis van de waarde van de 'backround' parameter
  if (backround === 'none') {
    document.body.style.backgroundImage = 'none';
  } else if (backround === 'bank') {
    document.body.style.backgroundImage = "url('images/woonkamer1.jpg')";
  } else if (backround === 'plant') {
    document.body.style.backgroundImage = "url('images/woonkamer2.jpg')";
  } else if (backround === 'boek') {
    document.body.style.backgroundImage = "url('images/woonkamer3.jpg')";
  }
}

// Functie om de spring-animatie uit te voeren doormiddel van css
function springen () {
  staandeKat.style.animation = 'springen 700ms ease-in-out';
  setTimeout (() => {
    staandeKat.style.animation = '';
  }, 700);
}


spelenButton.addEventListener ('click', () => voerUit ('spelen'));
etengevenButton.addEventListener ('click', () => voerUit ('etengeven'));
aaienButton.addEventListener ('mouseover', () => voerUit ('aaien'));
springenButton.addEventListener ('dblclick', springen);('springen');
bankAchtergrond.addEventListener ('click', () => kiesAchtergrond ('bank'));
plantAchtergrond.addEventListener ('click', () => kiesAchtergrond ('plant'));
boekAchtergrond.addEventListener ('click', () => kiesAchtergrond ('boek'));
geenAchtergrond.addEventListener ('dblclick', () => kiesAchtergrond ('none'));
