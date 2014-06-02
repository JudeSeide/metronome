function Horloge () {
    var instance;
    

    this.getFrequenceUn = function() {
        return this.f_un;
    };

    this.getFrequenceDeux = function() {
        return this.f_deux;
    };

    this.calculerFrequenceUn = function(tempo){    
        this.f_un = (60 / tempo) * 1000;
    };
    
    this.calculerFrequencDeux = function(mesure, tempo) {
        this.f_deux = ((mesure * 60) / tempo) * 1000;
    };
    
}

    Horloge.createInstance = function() {
        var hor = new Horloge();

        hor.f_un = 0;
        hor.f_deux = 0;
        
        return hor;
    };

    
    Horloge.getInstance = function() {
        if (!Horloge.instance) {
            Horloge.instance = new Horloge.createInstance();
        }

        return Horloge.instance;
    };
    
    
