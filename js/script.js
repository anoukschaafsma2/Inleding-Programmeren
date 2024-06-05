const spelenButton = document.querySelector ('.spelen');
const etengevenButton = document.getElementById ('etengeven');
const aaienButton = document.getElementById ('aaien');
const springenButton = document.getElementById ('springen');
const staandeKat = document.querySelector ('.staandeKat');
const purAudio = document.getElementById ('Purringcat');
const eatAudio = document.getElementById ('Eatingcat');

function purring () {
  purAudio.play ();
}

function voerUit (actie) {
  eatAudio.pause ();
  eatAudio.currentTime = 0;
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

function springen () {
    staandeKat.style.animation = 'springen 700ms ease-in-out';
    setTimeout (() => {
      staandeKat.style.animation = '';
    }, 700);
  }

document.querySelectorAll ('.background-button').forEach (button => {
  button.addEventListener ('click', function () {
    const background = this.getAttribute ('data-bg');
    if (background === 'none') {
      document.body.style.backgroundImage = '';
    } else {
      document.body.style.backgroundImage = `url(${background})`;
    }
  });
});

spelenButton.addEventListener ('click', () => voerUit ('spelen'));
etengevenButton.addEventListener ('click', () => voerUit ('etengeven'));
aaienButton.addEventListener ('mouseover', () => voerUit ('aaien'));
springenButton.addEventListener ('dblclick', springen);
