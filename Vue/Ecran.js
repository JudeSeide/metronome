function Ecran() {
    
    var instance;
    
    this.afficherTempo = function(valeur){
        $('#getReglageTempo').html(valeur);
    };
    
    this.afficherMesure = function(valeur){
        $('#getReglageMesure').html(valeur);
    };
    
}

Ecran.createInstance = function() {
    var ecran = new Ecran();
    return ecran;
};


Ecran.getInstance = function() {
    if (!Ecran.instance) {
        Ecran.instance = Ecran.createInstance();
    }

    return Ecran.instance;
};