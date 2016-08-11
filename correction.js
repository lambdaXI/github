// angular

// main.js

/**
 * Déclaration de l'application MyPhonesApp
 */
var MyPhonesApp = angular.module('MyPhonesApp', []);



/*
 *  Controller MainCtrl et fera appel aux premier module d'Angular qui est
 *  la scope.
 *  La scope est un objet entre le HTML et le JS pour controller la DOM
 *  Un controller require à 99% la scope
 */
MyPhonesApp.controller('MainCtrl', ['$scope', function($scope){

    // Je crée une variables title dans la scope
  $scope.title = "Liste des plus beaux Smartphones";


    /**
   * Créer un tableaux d'objet de smartphones dans la scope
   * permettant d'embarque titre, image, description, liens
   * Charger les données pour les afficher dans la vue
   */
  $scope.smartphone = [
     {
      titre : "Samsung Galaxy S7",
      image : "http://www.journaldugeek.com/files/2016/04/galaxy-s7.jpg",
      description: "Les Samsung Galaxy S7 et Galaxy S7 Edge2 sont les deux smartphones phares de la marque coréenne annoncés en février 2016 lors du Mobile World Congress.",
      lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S7"
     },
     {
      titre : "Samsung Galaxy S6",
      image : "http://cdn2.pcadvisor.co.uk/cmsdata/reviews/3600059/Galaxy_S6_2.jpg",
      description: "Les Samsung Galaxy S6  de la marque coréenne annoncés en février 2016 lors du Mobile World Congress.",
      lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S6"
     },
     {
      titre : "Samsung Galaxy S5",
      image : "http://phonesdata.com/files/models/Samsung-Galaxy-S5-CDMA-230.jpg",
      description: "Les Samsung Galaxy S5, S6 Edge, et S6 Edge+ sont les trois smartphones phares de la marque coréenne disponibles à la vente depuis le 10 avril 20154.",
      lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S5"
     },
     {
      titre : "Samsung Galaxy S4",
      image : "http://www.journaldugeek.com/files/2016/04/galaxy-s4.jpg",
      description: "Les Samsung Galaxy S4, S6 Edge, et S6 Edge+ sont les trois smartphones phares de la marque coréenne disponibles à la vente depuis le 10 avril 20154.",
      lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S4"
     },
   ];


}]);
/home/boyer/Bureau/exoangular1/index.html

  <!-- ng-repeat est une boucle sur un tableau  smartphones de ma scope -->
  <!-- for..in en JS -->
  <div class="col s3 m3" ng-repeat="smartphone in smartphones">
    <div class="card">
      <div class="card-image">
        <img src="{{ smartphone.image }}">
        <span class="card-title">{{ smartphone.title }}</span>
      </div>
      <div class="card-content">
        <p>{{ smartphone.description }}</p>
      </div>
      <div class="card-action">
        <a href="{{ smartphone.lien }}">Liens vers Galaxy S7</a>
      </div>
    </div>
  </div>





/**
* Exercice 2: Comprendre les Objets et Collecions d'Objets
*
* Découverte de Underscore: http://underscorejs.org/
*
* + Créer un Controller IpodCtrl dans la meme Application MyPhonesApp
* + Afficher 6 Ipods différents, charger depuis le controller et afficher dans la vue.
* Un objet ipod contient: le titre, la description, le prix , une image, la couleur, la quantité, une reduction (qui peut être à 0)
* L'affichage se fera comme pour Avatar Content de Collection che Materialize http://materializecss.com/collections.html


* Bonus: Afficher le prix moyen d'un ipod au dessus des ipods dans un h4 (vous pouvez utiliser les fonctions de Underscore)
*/

var ipods = $scope.ipods = [{}, {}, {}, {}, {}, {}];


// moyenne
/*
$scope.moyenne = _.reduce(ipods, function(memo, num){
       return memo + num.prix;
}, 0) / (ipods.length === 0 ? 1 : ipods.length);
*/


$scope.moyenne = function () {

    var sum = 0;
    var moyenne;

  	// parcour le tableaux d'objets

    for(ipod of $scope.ipods){
      sum +=  ipod.prix;
    }
  	/*
  	for (var i = 0; i < ipods.length; i++) {
      sum += ipods[i].prix;
    }
    */
    moyenne = sum / ipods.length;
    return moyenne.toFixed(2); // toFixed() précision 2 chiffres après la virgule
}(); //execution ()


{{ moyenne }}

/*

* Bonus 2: Afficher le nom de l'ipod, la photo et le prix le moins chers dans un Medias de Materialize. Vous pouvez vous aider de la librairie Underscore
Les Medias sou Materialize http://materializecss.com/media-css.html
*/

$scope.leMoinsCher = _.first(_.sortBy(ipods, function(num){ return num.prix; }));
// le 1er element d'un tableau d'objets trié par prix de maniere croissante
// envoyé un objet de mon tableau ipods dans la vue


// other way
// Math.min() => 2
// _.min()> objet qui contient le prix minimum
// fonction lambas()


/**
* Controller: qui controlle le flux de données
*/

$scope.prixCheap = _.min(ipods, function(eltCourant){ return eltCourant.prix; });
// Julien: filter(function(eltCourant){ return eltCourant.prix % 2 == 0  });
$scope.prixMax = _.max(ipods, function(objetCourant){ return objetCourant.prix; });
// objet maximum
$scope.objPrixMax = _.max($scope.ipods, _.property('prix'));



/**
* Vue: c'est ce qui affiche les données
*/

<h5>Produit le plus cher</h5>

<div class="col s12 m8 offset-m2 l6 offset-l3">
<div class="card-panel grey lighten-5 z-depth-1">
   <div class="row">
     <div class="col s2">
       <img src="{{ objPrixMax.image }}" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
     </div>
     <div class="col s10">
       <span class="black-text"> {{ objPrixMax.titre }}
       </span>
       <p class="secondary-content"><i class="material-icons">Prix : {{ objPrixMax.prix }} €</i></p>
     </div>
   </div>
</div>
</div>




/*
* Bonus 3: Afficher le nom de l'ipod, la photo et le prix le plus cher dans un Medias de Materialize. Vous pouvez vous aider de la librairie Underscore
* Bonus 4: Modifier l'attribut "reduction" pour les 2 premiers objets de mon tableau et modifier l'affichage du prix pour ces objet en prenant en compte la réduction
*/

    var first2Ipod = _.first(ipods, 2); // first crée un tableau d'objets à partir d'une longueur depuis la gauche

    first2Ipod[0].reduction = 120;
    first2Ipod[0].prix = first2Ipod[0].prix - first2Ipod[0].reduction;

    first2Ipod[1].reduction = 10;
    first2Ipod[1].prix = first2Ipod[1].prix - first2Ipod[1].reduction;


    ipods[0] = first2Ipod[0];
    ipods[1] = first2Ipod[1];


/*
* Bonus 5: Afficher le nombre de produits, en dessous du h4
*/
<h4>{{ ipods.length }}</h4>


/*
* Bonus 6: Compter le nb de produits qui contient une reduction (Underscore) et afficher ce nombre dans un badget Materialize
*/

// controller

	$scope.quantite = 0;
  for (i=0; i < $scope.ipods.length; i++) {
    if (!$scope.ipods[i].reduction) {
      $scope.quantite++;
    }
  }

//vue
<span class="new badge">{{ quantite }}</span>



//Mathias
// num: l'element courant
// le filtre c'est le retour de la fonction anonyme
$scope.reductionPrix = function() { return _.filter(ipods, function(num){ return num.reduction; }).length }(); // fonction executée

<span class="new badge">{{ reductionPrix }}</span>


//Julien
$scope.nbreReduc = _.reject(ipods, function(obj){return !obj.reduction}).length;



        

/**

Exercice 3:  Le Panier à boisson: (nouveau fichier, avec le theme Materialize)

var panierBoissons = [
{item: 'Produit 1', quantite : 2, comments: [{note: 5, content: "Super boisseau!"},{note: 3, content: "Bof , moyen..."}],  price: 50, photo: 'http://fanextrade.com/wp-content/uploads/2014/06/coca-cola-1500-ml.jpg', reduction: 0.4},
{item: 'Produit 2', quantite : 1, price: 10, photo: 'https://media.simplymarket.fr/PHOTO2/3124480/183491.jpg'},
{item: 'Produit 3', quantite : 4, price: 75, photo: 'http://www.sushigoo.fr/163-206-large/fanta.jpg'},
{item: 'Produit 4', quantite : 4, price: 55, photo: 'http://www.les-calories.com/IMG/VaNsp.jpg', reduction: 0.6},
{item: 'Produit 5', quantite : 3, comments: [{note: 3, content: "Pas mal, boisseau rafraichissante!"},{note: 1, content: "Naz!!"}], price: 45, photo: 'http://t3.gstatic.com/images?q=tbn:ANd9GcTxO1SSDkaAwUM4GNi86cZPLlGewIlg8CwcAeX-p5OVPdhEfv4KkjSCZ2k'},
{item: 'Produit 6', quantite : 1, price: 85, photo: 'http://www.adam-boissons.fr/medias/produits/medium1_badoit_1275_vp.jpg'},
{item: 'Produit 7', quantite : 2,  price: 65, photo: 'http://www.castlemalting.com/Publications/Recipes/Images/Leffe-glond-glass256x256.png', reduction: 0.4},
{item: 'Produit 8', quantite : 5, price: 40, photo: 'https://www.vittel.com/fr/sites/default/files/styles/product_image_348x213/public/field/image/vittel-emporter.png?itok=fTxgpSkO'},
*/

/*

	+ Afficher tous les produits trié par prix, en multipliant la quantité par le prix et prenant en compte la reduction
  + Afficher le panier et ses items dans un tableau HTML <table> de Materialize
	+ Afficher le nombre de produit qui ont une réduction (fct Unserscore has(), filter()) dans un badge
  + Afficher le prix Moyen des produits ainsi que le prix Total HT (sans reduction) et le prix TTC (avec réduction)
	+ Afficher le nombre de produit qui on des commentaires et en afficher la moyenne
  + Filtrer les boissons qui ont une quantité entre 3 et 5 et afficher la moyenne de la quantité de ces produits
	+ Filtrer uniquement que les produits qui ont commentaires et afficher la moyenne des notes des commentaires

*/
