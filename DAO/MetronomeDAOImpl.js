function MetronomeDAOImpl(v){
    
    var leMetronome;
    
    this.MetronomeDAOImpl = function(){
        this.leMetronome = v;
    };

    this.saveMetronome = function(){           
        localStorage.setItem("leMetronome",JSON.stringify(this.leMetronome));

    };

    this.loadMetronome = function(){
        var ihm = IHM.getInstance();
       
        if(localStorage.getItem("leMetronome") !== null){

            vMetro = JSON.parse(localStorage.getItem("leMetronome"));
            
            this.leMetronome.setVolume(vMetro.volume);
            this.leMetronome.setTempo(vMetro.tempo);
            this.leMetronome.setMesure(vMetro.mesure);
           
            $('#reglageTempo').slider("value", vMetro.tempo);
           
            volume = $('.volume');
           
            if(vMetro.volume <= 5) volume.css('background-position', '0 0');
            else if (vMetro.volume <= 25) volume.css('background-position', '0 -25px');
            else if (vMetro.volume <= 75) volume.css('background-position', '0 -50px');
            else volume.css('background-position', '0 -75px');
           
            $('.slider').slider("value", vMetro.volume);
        }
       
        this.leMetronome.attach(ihm);
    };

    
    this.MetronomeDAOImpl();
    
}

MetronomeDAOImpl.prototype = new MetronomeDAO();
