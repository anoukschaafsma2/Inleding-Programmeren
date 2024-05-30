const spelenButton = document.querySelector('.spelen');
const etengevenButton = document.getElementById('etengeven');
const aaienButton = document.getElementById('aaien');
const springenButton = document.getElementById('springen');
const staandeKat = document.querySelector('.staandeKat');
const purAudio = document.getElementById('Purringcat');
const naamInput = document.querySelector("#name");

spelenButton.addEventListener('click', () => voerUit('spelen'));
etengevenButton.addEventListener('click', () => voerUit('etengeven'));
aaienButton.addEventListener('click', () => voerUit('aaien'));
springenButton.addEventListener('click', springen);

function groet() {
    textElement.textContent = "Hallo, ik ben" + " " + naamInput.value;
}
 

function voerUit(actie) {
    if (actie === 'spelen') {
        staandeKat.src = 'images/speelt.png';
    } else if (actie === 'etengeven') {
        staandeKat.src = 'images/staand.png';
    } else if (actie === 'springen') {
        staandeKat.src = 'images/spelen.png';
    }
}

purAudio.play();

document.querySelectorAll('.background-button').forEach(button => {
    button.addEventListener('click', function () {
        const background = this.getAttribute('data-bg');
        document.body.style.backgroundImage = background === 'none' ? '' : `url(${background})`;
    });
});

function springen() {
    staandeKat.style.animation = 'springen 1s ease-in-out';
    setTimeout(() => {
        staandeKat.style.animation = '';
    }, 1000);
}
