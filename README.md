==================
LIBRAIRIES REQUIS:
==================

JQuery est utilisé pour les glissements du volume et du tempo.
Le reste de l'application est totalement montée en pure javascript.
Le logiciel a été testé et développé sur google chrome version 31.



=============
DESCRIPTION :
=============

Le métronome possède les caractéristiques suivantes :
-Un clavier de commande muni de touches de contrôle;
-Un afficheur du tempo (40 à 208) et du nombre de temps par mesure (2 à 8);
-Une LED n°1 marquant chaque temps par un éclair bref;
-Une LED n°2 marquant le premier temps de chaque mesure par un éclair bref;
-Un haut-parleur émettant un clic sonore à chaque temps.
-Un gestionnaire de langue (français ou anglais)

Le led gris est le led #1
Le led bleu est le led #2

Le DAO utilisé pour le metronome sauvegarde les données dans un format JSON
dans le webstorage de google chrome ou tout autre navigateur supportant le
webstorage (firefox).


=================
NOM DES CLASSES :
=================

Modele\Metronome.js
Modele\Sujet.js
Modele\Horloge.js

Vue\Ecran.js
Vue\HautParleur.js
Vue\IHM.js
Vue\Led.js

Controlleur\Commande.js
Controlleur\CommandeDec.js
Controlleur\CommandeInc.js
Controlleur\CommandeMoletteTempo.js
Controlleur\CommandeStart.js
Controlleur\CommandeStop.js
Controlleur\CommandeVolume.js
Controlleur\Observeur.js
DAO\MetronomDAO.js
DAO\MetronomDAOimpl.js




==============
INSTALLATION :
==============

Ouvrir _index.html_ avec google Chrome ou mozilla firefox.
