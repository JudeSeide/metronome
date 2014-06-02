function CommandeDec() {


    this.execute = function() {
        var leMetronome = Metronome.getInstance();
        var started = leMetronome.isStarted();
        
        if (started === true) {
            var mesure = leMetronome.getMesure();

            if (mesure > 2) {
                mesure--;
                leMetronome.setMesure(mesure);
            }
        }

    };

}

CommandeDec.prototype = new Commande();