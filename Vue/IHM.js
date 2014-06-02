function IHM() {

    var instance;

    this.updateTempo = function() {
        var horloge = Horloge.getInstance();
        var f_un = horloge.getFrequenceUn();
        var f_deux = horloge.getFrequenceDeux();

        this.ledUn.clignoterUn(f_un);
        this.ledDeux.clignoterDeux(f_deux);

        var metronome = Metronome.getInstance();
        var tempo = metronome.getTempo();
        var ecran = Ecran.getInstance();
        ecran.afficherTempo(tempo);

        var son = HautParleur.getInstance();
        son.sonner(f_un);
    };

    this.updateMesure = function() {
        var horloge = Horloge.getInstance();
        var f_deux = horloge.getFrequenceDeux();

        this.ledDeux.clignoterDeux(f_deux);

        var metronome = Metronome.getInstance();
        var mesure = metronome.getMesure();
        var ecran = Ecran.getInstance();
        ecran.afficherMesure(mesure);
    };

    this.updateStart = function() {
        var metronome = Metronome.getInstance();
        var started = metronome.isStarted();

        var ecran = Ecran.getInstance();
        var son = HautParleur.getInstance();

        if (started === false) {
            ecran.afficherTempo("");
            ecran.afficherMesure("");
            this.ledUn.clignoterUn(0);
            this.ledDeux.clignoterDeux(0);
            son.sonner(0);
        } else {
            var horloge = Horloge.getInstance();
            var f_un = horloge.getFrequenceUn();
            var f_deux = horloge.getFrequenceDeux();

            this.ledUn.clignoterUn(f_un);
            this.ledDeux.clignoterDeux(f_deux);

            var tempo = metronome.getTempo();
            var mesure = metronome.getMesure();
            ecran.afficherMesure(mesure);
            ecran.afficherTempo(tempo);

            var volume = metronome.getVolume();
            son.sonner(f_un);
            son.reglerVolume(volume);
        }

    };

    this.updateVolume = function() {
        var metronome = Metronome.getInstance();
        var son = HautParleur.getInstance();
        var volume = metronome.getVolume();

        son.reglerVolume(volume);
    };

    this.updateLang = function() {
        var metronome = Metronome.getInstance();
        var lang = metronome.getLang();

        if (lang === "eng") {
            $('#mesure').html("Measure");

        } else if (lang === "fr") {
            $('#mesure').html("Mesure");
        }
    };

    this.charger = function() {

        $(document).ready(function() {



            //---- Volume
            $(function() {
                var slider = $('#volumeSlider'),
                        tooltip = $('#volumeTooltip');

                tooltip.hide();

                slider.slider({
                    //Config
                    range: "min",
                    min: 1,
                    value: 0,
                    start: function(event, ui) {
                        tooltip.fadeIn('fast');
                    },
                    //Slider Event
                    slide: function(event, ui) { //When the slider is sliding
                        var cVolume = new CommandeMoletteVolume(ui.value);
                        cVolume.execute();

                        var value = slider.slider('value'),
                                volume = $('.volume');

                        tooltip.css('left', value).text(ui.value);  //Adjust the tooltip accordingly

                        if (value <= 5) {
                            volume.css('background-position', '0 0');
                        }
                        else if (value <= 25) {
                            volume.css('background-position', '0 -25px');
                        }
                        else if (value <= 75) {
                            volume.css('background-position', '0 -50px');
                        }
                        else {
                            volume.css('background-position', '0 -75px');
                        };

                    },
                    stop: function(event, ui) {
                        tooltip.fadeOut('fast');
                    }
                });

            });

            // ------ Tempo
            $(function() {
                var slider = $('#tempoSlider'),
                        tooltip = $('#tempoTooltip');

                tooltip.hide();

                slider.slider({
                    //Config
                    range: "min",
                    min: 40,
                    max: 208,
                    value: 40,
                    start: function(event, ui) {
                        tooltip.fadeIn('fast');
                    },
                    //Slider Event
                    slide: function(event, ui) { //When the slider is sliding
                        var molette = new CommandeMoletteTempo(ui.value);
                        molette.execute();

                        var value = slider.slider('value'),
                                tempo = $('.tempo');

                        tooltip.css('left', value).text(ui.value);  //Adjust the tooltip accordingly

                        if (value <= 5) {
                            tempo.css('background-position', '0 0');
                        }
                        else if (value <= 25) {
                            tempo.css('background-position', '0 -25px');
                        }
                        else if (value <= 75) {
                            tempo.css('background-position', '0 -50px');
                        }
                        else {
                            tempo.css('background-position', '0 -75px');
                        }
                        ;

                    },
                    stop: function(event, ui) {
                        tooltip.fadeOut('fast');
                    }
                });

            });

            //----- Mesure 
            $("#mesureHaut").click(function(e) {
                var cmdInc = new CommandeInc();
                cmdInc.execute();
            });

            $("#mesureBas").click(function(e) {
                var cmdDec = new CommandeDec();
                cmdDec.execute();
            });

            //----- Start/Stop
            $("#start").click(function(e) {
                var cmdStart = new CommandeStart();
                cmdStart.execute();
            });

            $("#stop").click(function(e) {
                var cmdStop = new CommandeStop();
                cmdStop.execute();
            });

            //------Langue
            $("#languefr").click(function(e) {
                var cmdfr = new CommandeLang("fr");
                cmdfr.execute();
            });

            $("#langueen").click(function(e) {
                var cmdeng = new CommandeLang("eng");
                cmdeng.execute();
            });

        });


    };


}

IHM.createInstance = function() {
    var ihm = new IHM();
    ihm.ledUn = new Led();
    ihm.ledDeux = new Led();
    ihm.charger();
    ihm.prototype = new Observeur();
    return ihm;
};


IHM.getInstance = function() {
    if (!IHM.instance) {
        IHM.instance = IHM.createInstance();
    }

    return IHM.instance;
};
