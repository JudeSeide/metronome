function CommandeStart() {
 
    this.execute = function() {
        var leMetronome = Metronome.getInstance();
        var dao = new MetronomeDAOImpl(leMetronome);
        dao.loadMetronome();
        
        leMetronome.setStarted(true);
    };
 
}
 
CommandeStart.prototype = new Commande();
