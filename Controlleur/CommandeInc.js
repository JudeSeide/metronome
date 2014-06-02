function CommandeInc() {


    this.execute = function() {
        var metronome = Metronome.getInstance();
        var started = metronome.isStarted();
        
        if (started === true) {
            var mesure = metronome.getMesure();

            if (mesure < 8) {
                mesure++;
                metronome.setMesure(mesure);
            }
        }

    };

}

CommandeInc.prototype = new Commande();