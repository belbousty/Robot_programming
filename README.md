# Projet Génération Procédurale

- [Sujet du projet](https://www.labri.fr/perso/renault/working/teaching/projets/2021-22-S6-Js-Robot.php)

- [Page sur thor](https://thor.enseirb-matmeca.fr/ruby/projects/projetss6-robot)

# Makefile :

- make project :Lance la page HTML du projet avec Parcel.

- make test : lance les tests des différentes fonctions avec jest.

# Fonctionnement de la page HTML :

- Button square : permet d'exécuter le programme instruction par instruction; chaque clique exécute une instruction et l'enlève de la pile d'appel.

- Button play : permet d'executer le programme directement.

- Le programme s'arrête directement si il n'existe plus de rockets.

- Si le robot sort du puzzle, un message d'alert est renvoyé "Your robot is out :("