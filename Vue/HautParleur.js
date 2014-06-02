function HautParleur() {

    var instance;
    var refreshIntervalId;
    var elementAudio = document.createElement('audio');
    elementAudio.setAttribute('src', 'mp3/audio.mp3');

    this.sonner = function(frequence) {
        clearInterval(this.refreshIntervalId);

        if (frequence !== 0){
                                 
            this.refreshIntervalId = setInterval(function() {

                elementAudio.play();
            }, frequence);
        }

    };

    this.reglerVolume = function(volume) {
        elementAudio.volume = volume / 100;
    };

}

HautParleur.createInstance = function() {
    var hp = new HautParleur();
    return hp;
};


HautParleur.getInstance = function() {
    if (!HautParleur.instance) {
        HautParleur.instance = HautParleur.createInstance();
    }

    return HautParleur.instance;
};
