function CommandeMoletteVolume(v) {

    var valeur;

    this.CommandeMoletteVolume = function() {
        this.valeur = v;
    };

    this.execute = function() {
        var leMetronome = Metronome.getInstance();
        var started = leMetronome.isStarted();

        if (started === true) {
            if (this.valeur >= 0 && this.valeur <= 100) {
                leMetronome.setVolume(this.valeur);
            }
        }

    };

    this.CommandeMoletteVolume();

}

CommandeMoletteVolume.prototype = new Commande();