## Getting started



Pour utiliser **Mapbox**, d'abord on crée un compte chez leur site web [Mapbox Regestration](https://account.mapbox.com/auth/signin/?route-to=%22https://account.mapbox.com/%22)

###### Authentification ou creation d'un compte Mapbox

![Screenshot 2021-02-11 at 11.20.37](/Users/ALILIMJ/Desktop/Screenshot 2021-02-11 at 11.20.37.png)



###### Menu principal

![Screenshot 2021-02-11 at 11.23.19](/Users/ALILIMJ/Desktop/Screenshot 2021-02-11 at 11.23.19.png)



On remaque que cette API nous donne **50000 recharges gratuites** de la carte.

Pour commencer il nous faut une clé unique pour la carte applée **Token** on crée une en appuiyant sur le bouton **Create a token** et on remplit les information (contraintes, restructions...) et on donne un nom à cette clé (par exemple **react map**).

![Screenshot 2021-02-11 at 11.31.23](/Users/ALILIMJ/Desktop/Screenshot 2021-02-11 at 11.31.23.png)

 

Il reste de copier la clé et touts est prêt pour l'implémentation de **Mapbox**.



## Implémentation

Dans le terminal (invite de commande dans windows) on crée un project **react** en executant la commande suivante :

```sh
npx create-react-app mapbox_report
```

> **Note** : React doit être installé dans votre machine pour que cette commande marche.



Dans le projet il faut ajouter la dépendance **react-map-gl**

```sh
npm install --save react-map-gl
```



Cette dépendance nous permet d'importer le composant react `<MapGL/>` 

```javascript
import ReactMapGL from 'react-map-gl';

//la suite du code ...

```

Avec react js on utilise la carte en tanqu'un composant html :

```react
<MapGL props>
  ...
</MapGL>
```



A la place de `props` on a besoin de passer la clé et les coordonées initiales et la taille de la carte :

```react
<MapGL mapboxApiAccessToken={clé}
  		 width="100%"
  		 height="800"
  		 latitude="28.375"
  		 longitude="2.841"
  		 zoom="4.8">
</MapGL>
```



Voici le resultat dans le navigateur : 

![Screenshot 2021-02-11 at 12.08.29](/Users/ALILIMJ/Desktop/Screenshot 2021-02-11 at 12.08.29.png)

