const classNameForAction = 'alert';

// create sound
const sound = document.createElement('audio');
sound.src = 'assets/battle.mp3';
sound.type = 'audio/mpeg';


// when User say 'посторонний в доме' or same words.
function startBattle() {

    artyom.say('Не стоило тебе сюда приходить', { onEnd: () => {
        sound.play();
        document.body.classList.add(classNameForAction)
    }})

}

function stopBattle() {
    if (!sound.paused) {
        sound.pause();
        sound.currentTime = 0;
    }
    document.body.classList.remove(classNameForAction)
}


// Create a variable that stores your instance
const artyom = new Artyom();

// Add command (Short code artisan way)
artyom.on([
    'посторонний', 
    'посторонние', 
    'посторонний в доме', 
    'посторонние в доме', 
    'доме', 
    'дома', 
    'в доме',
]).then(startBattle);

// stoping all effects
artyom.on([
    'стоп', 
    'stop', 
]).then(stopBattle);

// Start the commands !
artyom.initialize({
    lang: "ru-RU",
    continuous: true, // Listen forever
    soundex: true,// Use the soundex algorithm to increase accuracy
    debug: true, // Show messages in the console
    // executionKeyword: "посторонний в доме",
    listen: true, // Start to listen commands !
});

/* for debuging */
document.getElementById('debug-start').addEventListener('click', startBattle);
document.getElementById('debug-stop').addEventListener('click', stopBattle);