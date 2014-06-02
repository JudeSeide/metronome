function Metronome () {
    var instance;
    var tabObserveurs = new Array();

    this.attach = function(observeur) {
        tabObserveurs.push(observeur);
    }; 

    this.detach = function(observeur) {

        var i = tabObserveurs.indexOf(observeur);
        if (i !== -1) {
            tabObserveurs.splice(i, 1);
        }
    };

    this.notifier = function(type) {
        for (var i = 0; i < tabObserveurs.length; i++) {
            if(type === 1){
                tabObserveurs[i].updateStart();
            }else if(type === 2){
                tabObserveurs[i].updateVolume();
            }else if(type === 3){
                tabObserveurs[i].updateTempo();
            }else if(type === 4){
                tabObserveurs[i].updateMesure();
            }else if(type === 5){
                tabObserveurs[i].updateLang();
            }
        }
    };

    this.isStarted = function(){
        return this.start;
    };
    
    this.getVolume = function() {
        return this.volume;
    };

    this.getTempo = function() {
        return this.tempo;
    };

    this.getMesure = function() {
        return this.mesure;
    };
    
    this.getLang = function(){
        return this.lang;
    };

    this.setStarted = function(start){
        this.start = start;
        this.notifier(1);
    };
    
    this.setVolume = function(volume) {
        this.volume = volume;
        this.notifier(2);
    };

    this.setTempo = function(tempo) {
        this.tempo = tempo;        
        var horloge = Horloge.getInstance();
        horloge.calculerFrequenceUn(this.tempo);
        horloge.calculerFrequencDeux(this.mesure, this.tempo);
        this.notifier(3);
    };

    this.setMesure = function(mesure){
        this.mesure = mesure;
        var horloge = Horloge.getInstance();
        horloge.calculerFrequencDeux(this.mesure, this.tempo);
        this.notifier(4);
    };
    
    this.setLang = function(lang){
        this.lang = lang;
        this.notifier(5);
    };       
}

    Metronome.createInstance = function() {
        var metro = new Metronome();
        
        metro.volume = 0;
        metro.tempo = 40;
        metro.mesure = 2;
        metro.start = false;
        metro.lang = "eng";
        
        var horloge = Horloge.getInstance();
        horloge.calculerFrequenceUn(metro.tempo);
        horloge.calculerFrequencDeux(metro.mesure, metro.tempo);
        
        metro.prototype = new Sujet();
        
        return metro;
    };

    
    Metronome.getInstance = function() {
        if (!Metronome.instance) {
            Metronome.instance = new Metronome.createInstance();
        }

        return Metronome.instance;
    };
    
    
