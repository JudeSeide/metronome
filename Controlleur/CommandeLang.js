function CommandeLang(v) {

    var valeur;

    this.CommandeLang = function() {
        this.valeur = v;
    };

    this.execute = function() {
        var leMetronome = Metronome.getInstance();
        var started = leMetronome.isStarted();

        if (started === true) {
            leMetronome.setLang(this.valeur);           
        }

    };

    this.CommandeLang();

}

CommandeLang.prototype = new Commande();
