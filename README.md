# P12_azuara_kevin

## Initialiser le projet

Faire un git clone du projet afin de récupérer le dossier de travail

Faire la commande : cd P12-FRONT-END + npm install pour installer les packages

## Lancer le projet

Rentrer la commande npm start 
## Afficher les données d'un utilisateur

Pour afficher les données d'un utilisateur ,nous récupérons les données de l'url pour obtenir l'id de l'utilisateur

Si l'id n'existe pas un écran d'erreur s'affiche sinon lorsque l'id est présent , les données sont chargées dans un provider (context)

## Utiliser le mockup 

Pour pouvoir faire des tests de data à recevoir , un mockup est existant et activable depuis la variable d'environnement : REACT_APP_USE_MOCK.

Si REACT_APP_USE_MOCK==="true" on l'utilise sinon on se base sur les appels au backend.