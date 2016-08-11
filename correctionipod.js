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
<span class="new badge">{{ nbreReduc }}€</span>


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
+ Afficher tous les produits trié par le prix, en multipliant la quantité par le prix et prenant en compte la reduction
+ Afficher le panier et ses items dans un tableau HTML <table> de Materialize
*/

// Doc sur les filtres d'Angular https://docs.angularjs.org/api/ng/filter/orderBy
	<table class="striped centered">
        <thead>
          <tr>
            <th data-field="photo">Photo</th>
            <th data-field="produit">Produit</th>
            <th data-field="quantite">Quantite</th>
            <th data-field="price">Prix</th>
            <th data-field="reduction">Reduction</th>
            <th data-field="comments">Commentaire</th>
          </tr>
        </thead>
       <tbody>
       <tr ng-repeat="panierBoisson in panierBoissons|orderBy:'price'">
         <td><img src="{{ panierBoisson.photo }}" alt="" /> </td>
         <td><h4>{{ panierBoisson.item }}</h4></td>
         <td>{{ panierBoisson.quantite }}</td>
         <td><b>{{ panierBoisson.price }}</b> €</td>
         <td>
          <span ng-if="panierBoisson.reduction">{{ panierBoisson.reduction }} </span>
          <span ng-if="!panierBoisson.reduction">Pas de reduction</span>
        </td>
         <td>
           <ul class="collection">
             <li class="collection-item" ng-repeat="comment in panierBoisson.comments">
              {{ comment.note }} /4     <br />
                  {{ comment.content|trim }} <br/>
             </li>
           </ul>
         </td>
       </tr>
     </tbody>
      </table>

            /*
            Doc:  https://docs.angularjs.org/api/ng/directive/ngIf
             ng-if
             ng-show / ng-hide
             ng-switch
             ng-class
             */



//damien
<td><p ng-repeat="comment in boisson.comments">{{ comment.note }}<br />{{ comment.content }}<br /></p></td>

  /*
  + Afficher le nombre de produit qui ont une réduction (fct Unserscore has(), filter()) dans un badge
  */
  //julien
     // Nombre de produit avec une réduction
   $scope.nbreReduc = _.reject(panierBoissons, function(obj){return _.isUndefined(obj.reduction);}).length;


   <p>
           Nombre de produits qui ont une réduction : {{ nbreReduc }}
         </p>


  //damien
  $scope.nbReduction = 0; //compteur à nb de produit qui ont une reduction
    for (i=0; i < panierBoissons.length; i++) {

      // isUndefined() isDefined() si un attribut d'un objet existe
      if (_.isDefined(panierBoissons[i].reduction)) {
        $scope.nbReduction++;
      }
    }

//maxime
var compt = 0;  // compteur

for(objet of $scope.panierBoissons){ // Boucle avec compteur pr les article en reduc
  if (!objet.reduction) { // condition si reduction existe
    compt++; //incrementation
  }
}
$scope.articlereduc = compt;

/*
 + Afficher le prix Moyen des produits ainsi que le prix Total HT (sans reduction) et le prix total TTC (avec réduction)
*/

//damien

$scope.prixMoyen = function () {
  var somme = 0;
  for (i=0; i < panierBoissons.length; i++) {
    somme += panierBoissons[i].price;
  }
  return (somme / panierBoissons.length).toFixed(2); // toFixed() permet d'ajouter un précision à l'arrondissemt
}();


//reduce()
$scope.prixMoyen = _.reduce(panierBoissons, function(memo, num){ return memo + num.price; }, 0)/ panierBoissons.length;

$scope.prixHT = _.reduce(panierBoissons, function(memo, num){ return memo + (num.price * num.quantite) ; }, 0);

// Damien
$scope.prixTtc = function () {
  var totalTtc = 0;
  for (boisson of panierBoissons) {
      totalTtc += (_.isUndefined(boisson.reduction)) ?
      boisson.price * boisson.quantite:
      boisson.price * boisson.quantite * boisson.reduction;
  }

  return totalTtc;
}();





	/*
	+ Afficher le nombre de produit qui on des commentaires et en afficher la moyenne des note
  */

// Recupe des commentaire et moyenne des note

var moyennettNote = 0;//moyenne de tt les article
var moyennettNoteLength = 0;// longeur de note total de tt les article confondue
$scope.paniercomment= [];// stockage des sous objet avec commentaire en gros filtre
$scope.articleComment = 0 ; // comptage d 'article avec commentaire
for (var i = 0; i < $scope.panierBoissons.length; i++) { // boucle pr ajout des prix ttc

  if ($scope.panierBoissons[i].comments) { // mon objet possed un commentaire alors...

    $scope.paniercomment[$scope.articleComment] = $scope.panierBoissons[i];// on recup le sous objet
    $scope.articleComment++; // imcrement le nbr darticle avc comment
    var moyennenote = 0; // var pr recuperer la moyenne
    // parcourir les commentaires du produit
    for (var j = 0; j < $scope.panierBoissons[i].comments.length; j++) { // boucle pr recup tt les notes de l article
       moyennenote += $scope.panierBoissons[i].comments[j].note;
       moyennettNote += $scope.panierBoissons[i].comments[j].note;
       moyennettNoteLength++;
    }
    moyennenote = moyennenote / $scope.panierBoissons[i].comments.length; // calcule de la moyenne
    $scope.panierBoissons[i].moyenne = moyennenote; // injection de ma var dans une scope
  }
}
$scope.moyennettNote = moyennettNote / moyennettNoteLength; // moyenne de tt note confondue
console.log($scope.paniercomment);// test de tablo avec objet seulment avec commmentaire



	// Damien

  // + Afficher le nombre de produit qui on des commentaires et en afficher la moyenne
  $scope.nbProdCommente = function() {
    var nbComments = 0;
    for (i=0; i < panierBoissons.length; i++) {
      if (!_.isUndefined(panierBoissons[i].comments)) {
        nbComments++;
      }
    }
    return nbComments;
  }();

	// ratio du nb de produit qui ont des commentaires
  $scope.moyenneCommente = function() {
    var nbComments = 0;
    for (i=0; i < panierBoissons.length; i++) {
      if (!_.isUndefined(panierBoissons[i].comments)) {
        nbComments++;
      }
    }
    return nbComments / panierBoissons.length * 100;

  }();



	//Julien
   // Nombre de produits avec des commentaires
   $scope.nbreCom = _.reject(panierBoissons, function(obj){
      return _.isUndefined(obj.comments);
   }).length;

	<p>Nombre de produits avec des commentaires : {{ nbreCom }}. Soit une moyenne de : {{ nbreCom/panierBoissons.length*100 }}%</p>


	/*
	+ Filtrer les boissons qui ont une quantité entre 3 et 5 et afficher la moyenne de la quantité de ces produits
  */

  //Moyenne des quantite des produits
    var moyennequantite = 0;
    var compteurlengthquantite = 0;//taille du length quantite
    for (var i = 0; i < $scope.panierBoissons.length; i++) { // boucle pr ajout des quantites
      if ($scope.panierBoissons[i].quantite > 2 && $scope.panierBoissons[i].quantite <= 5) { // condition si quantite est entre 3 et 5
        compteurlengthquantite++;
        moyennequantite += $scope.panierBoissons[i].quantite;
      }
    }
    $scope.moyennequantite = moyennequantite / compteurlengthquantite;
    $scope.compteurlengthquantite = compteurlengthquantite;
    }]);



    // julien
     // Moyenne de la quantité des produits qui ont entre 3 et 5 produits

$scope.moyenneArticleTroisCinq = function(){
  nbreArticleTroisCinq = 0;
   tabArticleTroisCinq = _.reject(panierBoissons, function(obj){
      return (obj.quantite < 3 || obj.quantite > 5);
   });

   for (article of tabArticleTroisCinq) {
      nbreArticleTroisCinq += article.quantite;
   }

   return (nbreArticleTroisCinq/tabArticleTroisCinq.length).toFixed(2);
}();


	/*
	+ Filtrer uniquement que les produits qui ont  des commentaires et afficher la moyenne des notes des commentaires
	*/

//Damien (ne fonctionne pas)

$scope.moyenneProduit = function() {
    var moyenne = 0;
    var tabMoyenne = [];

    for (i=0; i < panierBoissons.length; i++) {
      var moyenneNote = 0;

      if (!_.isUndefined(panierBoissons[i].comments)) {
        var somme = 0;
        for (j=0; j < panierBoissons[i].comments.length; j++) {
          somme += panierBoissons[i].comments[j].note;
        }
        moyenneNote += somme / panierBoissons[i].comments.length;
        tabMoyenne.push(moyenneNote);
      }

    }

    moyenne = _.reduce(tabMoyenne, function(memo, num){ return memo + num; })/tabMoyenne.length;

    return moyenne;
  }();





// Julien

     // on prend un tableau avec les articles qui ont des commentaires
     articleAvecCom = _.reject(panierBoissons, function(obj){
        return _.isUndefined(obj.comments);});
     // on créer un tableau pour accueillir les noms des article + la somme des notes et le nombre de note
     affichArtMoyCom = [];
        // pour chaque articles avec com
        for (var i = 0; i < articleAvecCom.length; i++) {
           // on recupere l'objet avec le tableau des commentaires et on initialise la somme des com a 0
           var comFocus = articleAvecCom[i].comments;
           var somNote = 0;
           // pour chaque com d'un article on récupere la note qu'on ajoute a la somme, le nombre de note et le nom de l'article associé
           for (var j = 0; j < comFocus.length; j++) {
              somNote += comFocus[j].note;
              console.log(comFocus[j].note);
              affichArtMoyCom[i] = {item: articleAvecCom[i].item, sommeNote: somNote, nbreNote :j+1};
              console.log(parseInt(affichArtMoyCom[i].sommeNote));
           }
        }
        $scope.affichArtMoyCom = affichArtMoyCom;



       <ul class="collection">
          <li ng-repeat="com in affichArtMoyCom">
             <a href="#!" class="collection-item">{{ com.item }}<span class="badge">Moyenne des notes : {{ com.sommeNote/com.nbreNote }}</span></a>
          </li>
       </ul>





// Suppresion d'un produit

$scope.removeBoisson = function(boisson){

  // indexOF() permet de récuperer la position d'un element dans le tableau
  var indexBoisson = panierBoissons.indexOf(boisson);

  /// splice permet de supprimer 1 element selon une position
  panierBoissons.splice(indexBoisson, 1);

}



/**
* Les evenements
*/

/*
* Checkbox: https://docs.angularjs.org/api/ng/input/input%5Bcheckbox%5D

*  Doc splice(): https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice
* 1 Exercice pouvoir supprimer un ipod à l'aide d'un boutton
* 2 Selectionner 1 ou plusieurs ipods par des checkboxs et avoir un bouton "Supprimer les ipods séléctionnés"
* Indice: ng-repeat Agular: $index
	Indice2 :
      faire un evenement qui remplis un tableau d'ID quand je check
      faire un autre evenement quand je click sur mon bouttons
  */




  //julien

  // on créer un tableau pour stocker les index des elements checker
   $scope.chckedIndexs=[];


   $scope.checkedIndex = function (Ipad) {
      // retourne ma 1er index de l'element dans le tableau ou -1 s'il n'existe pas
    if ($scope.chckedIndexs.indexOf(Ipad) === -1) {
      // Dans le cas ou il n'existe pas  on ajoute l'index dans le tableau des element checker
        $scope.chckedIndexs.push(Ipad);
    }
    else {
      // s'il est deja présent ou de checker ??? on l'enleve
        $scope.chckedIndexs.splice($scope.chckedIndexs.indexOf(Ipad), 1);
    }
   }



   // fonction qui va supprimer du tableau Ipads tout les index du tableau des éléments checker
   $scope.remove=function(){

      // pour chacun des index du tableau on appel une fonctions
          angular.forEach($scope.chckedIndexs, function (value) { // value: l'lement courant dans boucle

            	// supprimé dans les ipads l'ipad selectionné
              Ipads.splice(Ipads.indexOf(value), 1);
          });

          // on remet les tableau des index a vide
            $scope.chckedIndexs = [];
     };


      <ul class="collection">
               <li class="collection-item avatar" ng-repeat="Ipad in Ipads">
                  <button ng-click="removeIpad(Ipad)" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">delete</i></button>
                  <img src="{{ Ipad.image }}" alt="" class="circle">
                     <span class="title">{{ Ipad.titre }}</span>
                     <p>{{ Ipad.description }}<br>
                        {{ Ipad.couleur }}
                     </p>
                  <p class="secondary-content"><i class="material-icons">Prix : {{ Ipad.prix }} €</i></p>
                  <p><input ng-click="checkedIndex(Ipad)" type="checkbox" id="{{ Ipad.titre }}" /><label for="{{ Ipad.titre }}"></label></p>
              </li>
         </ul>
         <button ng-click="remove()" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">delete</i></button>


 // Julien

  var checks = $scope.checks  = [];

  $scope.selected = function(elt){
      if($scope.checks.indexOf(elt.item) == -1){
        $scope.checks.push(elt.item);
      }else{
        $scope.checks.splice($scope.checks.indexOf(elt), 1)
      }
  };


  $scope.removeAll = function(){

    _.each($scope.checks, function(elte){
        panierBoissons =  _.reject(panierBoissons, function(elt){
           return elt.item == elte;
         });
       });
      // $scope.panierBoissons = panierBoissons
       $scope.checks= [];

  };

      <button ng-click="removeAll()" type="button" class="waves-effect waves-light btn">
      <i class="material-icons">delete</i>Supprimer
      <span ng-if='checks.length >= 1'>{{ checks.length }}</span>
        <span ng-if='checks.length == 0'>les</span>
        activés</button>



//Maxime

         $scope.selection=[];
  // toggle selection for a given employee by name
  $scope.toggleSelection = function toggleSelection(employeeName) {
     var idx = $scope.selection.indexOf(employeeName);

     // is currently selected
     if (idx > -1) {
       $scope.selection.splice(idx, 1);
     }

     // is newly selected
     else {
       $scope.selection.push(employeeName);
     }
   };


   var selection = $scope.selection;
   $scope.removecheck = function() {
     for (var i = 0; i < selection.length; i++) {
       var compteur =0;
       for (var j = 0; j < ipodglobal.length; j++) {

         if (ipodglobal[j].titre == selection[i]) {

           ipodglobal.splice(compteur, 1)
         }
         compteur++;
       }
     }
     console.log($scope.selection);
   }






/*
* 3 Bonus: Afficher le nb delement selectionner dans le boutton et changer de classe de bg pour les elements selectionner
*/






/**
* Les evenements et directives sous AngularJS
*/

/*
*  Application "Carnet d'Adresses"

  + Créer un tableau de 8 utilisateurs avec nom, prénom, age, photo,  date de naissances(dd/mm/YYYY),noteBac (de 1 à 20), sexe(boolean), ville (Paris ou Lyon ou Marseille), biographie, langue(fr,en,it ou es),
	+ Afficher tous ces utilisateurs et leusr informations dans des Collections sous Materialize (http://materializecss.com/collections.html)
  + Afficher le nombre d'utilisateur ainsi que la moyenne d'age des utilisateurs
  + Afficher à coté du nombre utilisateurs le mot "utilisateurs" avec un "s" ou pas selon le nombre d'utilisateur avec la directive "ng-show"
  + Afficher le mots "Il y a que des mineurs" si il y a uniquement que  "ng-show" ou "ng-if" (._every)
  + Créer un bouton "remove" à chaque utilisateur permettant au click de supprimer l'utilisateur
  + Afficher, si il n'y a plus "Plus aucun utilisateurs" et cacher la moyenne d'age
  + Créer des boutons radios Lyon, Paris, Marseille pour filtrer les utilisatur au click de ces bouttons radios
  + Créer des checkbox de tranches d'age permettant de filtrer par age les utilisateurs incluant les tranches d'ages suivantes: -10, 10-18, 18-30 , 30-45 , + de 45
   Bonus: Les checkbox de tranches d'age prendra en compte le 1ere filtre sur les boutons radios
  + Créer un Datepicker pour filtrer par date de naissances les utilisateurs à partir de cette date : avec Materializecss http://materializecss.com/forms.html#date-picker
  + Créer un input range pour filtrer selon la note au bac de 1 à 20 avec Materialize http://materializecss.com/forms.html#range
  + Créer un formulaire d'ajout d'utilisateurs avec l'ensemble de ces données (on fera la validation plus tard, vous piuvez prendre de l'avance et voir comment on valide un formulaire sous ANgular ici https://openclassrooms.com/courses/validation-de-formulaire-simplifiee-avec-angularjs)
  + Bonus: Externaliser les users dans un fichier json et chargé ce fichier en AJAX à l'aide de l'opérateur $http
  +
*/
