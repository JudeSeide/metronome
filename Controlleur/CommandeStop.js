function CommandeStop() {
 
    this.execute = function() {
        var leMetronome = Metronome.getInstance();
        var dao = new MetronomeDAOImpl(leMetronome);
        dao.saveMetronome();
        leMetronome.setStarted(false);
    };
    
}
 
CommandeStop.prototype = new Commande();
