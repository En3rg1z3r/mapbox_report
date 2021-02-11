# RAPPORT DE LA DEMO DE MAPBOX

Mapbox est une entreprise américaine spécialisée dans la cartographie en ligne. Elle fournit les cartes de sites, services et médias tels que Foursquare, Pinterest, The Financial Times, Etsy, Le Monde et Snapchat. Mapbox développe un ensemble de technologies et d’outils cartographiques, dont la bibliothèque Mapbox.js — basée sur Leaflet, l’éditeur Mapbox Studio — successeur de TileMill, et le langage de feuille de style CartoCSS. Ces projets reposent en très grande partie sur le logiciel libre et sur les données d’OpenStreetMap. -par wikipedia-

# Composants Reacts Utilisés
## ReactMapGl : 
### Le composant React ReactMapGl crée par les developpeurs d'Uber " https://visgl.github.io/react-map-gl/ " permet d'integrer une carte MapBox à l'aide d'un token (clé API) dans un React tree et la parameter avec facilité.

### Parametres ReactMapGl utilisés  :
#### onclick : Ecouteur d'evenement du click : prend une fonction callback en entrée [execution de la fonction callback de la reception des coordonnées à partir de la carte]
#### ref : prend en entrée une reference React [useRef] pour l'etablissement d'un lien entre la carte et la barre de rechereche Geocoder
#### onViewportChange : ecouteur d'evenement du changement de l'etat de la carte , [Execution de la fonction de Rerendering a partir de l'execution useState]
#### mapStyle : Changement de style de carte , Mapbox a un editeur pour customizer la carte a integrer
#### mapboxApiAccessToken : prend en entree la cle de l'API

## Geocoder : 
### Barre de recherche associée avec la carte integrée. https://www.npmjs.com/package/react-map-gl-geocoder, elle est aussi parametrée avec un reference d'une carte , ecouteur d'evenement du changement de l'etat, et un mapboxApiAccessToken
