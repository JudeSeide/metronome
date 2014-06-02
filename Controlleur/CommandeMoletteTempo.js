function CommandeMoletteTempo(v) {

    var valeur;

    this.CommandeMoletteTempo = function() {
        this.valeur = v;
    }

    this.execute = function() {
        var leMetronome = Metronome.getInstance();
        var started = leMetronome.isStarted();
        
        if (started === true) {
            if (this.valeur >= 40 && this.valeur <= 208) {
                leMetronome.setTempo(this.valeur);

            }
        }

    };

    this.CommandeMoletteTempo();
}

CommandeMoletteTempo.prototype = new Commande();