window.onload = init;

function init() {
    var sound = new howl({
        src: ["../Asserts 2.0/Audio/sonido.mp3", ]

    });


    //referencias
    var playmusic = documen.getElementBYid("playmusic");
    var pausemusic = document.getElementById("pausemusic");
    var stopmusic = document.getElementById("stopmusic");



    //eventos
    playmusic.addElentListener("click", function() {
        sound.play();

        playmusic.className = "hidden";
        pausemusic.className = "";
        stopmusic.className = "";

    });

    pausemusic.addEventListener("click", function() {
        sound.play();

        playmusic.className = "";
        pausemusic.className = "hidden";
        stopmusic.className = "hidden";

    });



    stopmusic.addEventListener("click", function() {
        sound.play();

        playmusic.className = "";
        pausemusic.className = "hidden";
        stopmusic.className = "hidden";

    });

}

gsap.from("#logo", { duration: 3, x: 400, opacity: 0, scale: 0.5 });