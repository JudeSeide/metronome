function Led() {

    var refreshIntervalId;
    var refreshIntervalId2;

    this.clignoterUn = function(frequence) {
        var ledUn = document.getElementById("ledUn");
        clearInterval(this.refreshIntervalId);
        
        if (frequence === 0) {
            ledUn.style.backgroundColor = "#FFFFFF";

        } else {
                   
            this.refreshIntervalId = setInterval(function() {
            
                ledUn.style.backgroundColor = "red";
                setTimeout(function(){ledUn.style.backgroundColor = "#FFFFFF"}, 144);

            }, frequence);
        }

    };

    this.clignoterDeux = function(frequence) {
        var ledDeux = document.getElementById("ledDeux");
        clearInterval(this.refreshIntervalId2);
        
        if (frequence === 0) {
            ledDeux.style.backgroundColor = "#FFFFFF";

        } else {

            this.refreshIntervalId2 = setInterval(function() {
            
                ledDeux.style.backgroundColor = "blue";
                setTimeout(function(){ledDeux.style.backgroundColor = "#FFFFFF"}, 144);
                
            }, frequence);
        }

    };

}
