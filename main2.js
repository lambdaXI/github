var Pannier = angular.module('Pannier', []);

Pannier.controller('Boisson', ['$scope', function($scope){

  $scope.panierBoissons = [
{
  item: 'Produit 1',
 quantite : 2,
  comments: [{note: 5, content: "Super boisseau!"},
  {note: 3, content: "Bof , moyen..."}],
    price: 50,
     photo: 'http://fanextrade.com/wp-content/uploads/2014/06/coca-cola-1500-ml.jpg',
      reduction: 0.4
    },
{
  item: 'Produit 2',
   quantite : 1,
    price: 10,
     photo: 'https://media.simplymarket.fr/PHOTO2/3124480/183491.jpg'
},
{
  item: 'Produit 3',
   quantite : 4,
    price: 75,
     photo: 'http://www.sushigoo.fr/163-206-large/fanta.jpg'
   },
{
  item: 'Produit 4'
  , quantite : 4,
   price: 55,
    photo: 'http://www.les-calories.com/IMG/VaNsp.jpg',
     reduction: 0.6
   },
{item: 'Produit 5',
 quantite : 3,
  comments: [{note: 3, content: "Pas mal, boisseau rafraichissante!"},
  {note: 1, content: "Naz!!"}],
   price: 45,
    photo: 'http://t3.gstatic.com/images?q=tbn:ANd9GcTxO1SSDkaAwUM4GNi86cZPLlGewIlg8CwcAeX-p5OVPdhEfv4KkjSCZ2k'
  },
{
  item: 'Produit 6',
   quantite : 1,
    price: 85,
     photo: 'http://www.adam-boissons.fr/medias/produits/medium1_badoit_1275_vp.jpg'
},
{
  item: 'Produit 7', quantite : 2,  price: 65, photo: 'http://www.castlemalting.com/Publications/Recipes/Images/Leffe-glond-glass256x256.png',
   reduction: 0.4
},
{
  item: 'Produit 8',
   quantite : 5,
    price: 40,
     photo: 'https://www.vittel.com/fr/sites/default/files/styles/product_image_348x213/public/field/image/vittel-emporter.png?itok=fTxgpSkO'}
];

// prix en quantite avec reduction
for (var i = 0; i < $scope.panierBoissons.length; i++) {
  if ($scope.panierBoissons[i].reduction > 0 || $scope.panierBoissons[i].reduction != null) { //si reduction
    $scope.panierBoissons[i].reducfait = ($scope.panierBoissons[i].price - $scope.panierBoissons[i].price * $scope.panierBoissons[i].reduction)  * $scope.panierBoissons[i].quantite;
  }
  else {
    $scope.panierBoissons[i].reducfait = $scope.panierBoissons[i].price * $scope.panierBoissons[i].quantite;
  }

}
// Compteur d article en reduc
var compteur = 0;  // compteur
    for(objet of $scope.panierBoissons){ // Boucle avec compteur pr les article en reduc
      if (objet.reduction != null) { // condition si reduction existe
        compteur++;
      }
    }

$scope.articlereduc = compteur; // recup de la val dan l html


//Calcul prix TTC avec reduc
for (var i = 0; i < $scope.panierBoissons.length; i++) { // boucle pr ajout des prix ttc
  if ($scope.panierBoissons[i].reduction > 0 || $scope.panierBoissons[i].reduction != null) {
    $scope.panierBoissons[i].ttc = $scope.panierBoissons[i].price - $scope.panierBoissons[i].price * $scope.panierBoissons[i].reduction;// ajout avec reduc
  }
  else {
    $scope.panierBoissons[i].ttc = $scope.panierBoissons[i].price;//si pa de reduc meme prix
  }
}

var panierBoissons = $scope.panierBoissons;
$scope.prixTTC = _.reduce(panierBoissons, function(memo, num){ return memo + num.price - num.price *(num.reduction == null ? 0 : num.reduction) * num.quantite ; }, 0);
console.log($scope.prixTTC);
// Recupe des commentaire et moyenne des note

var moyennettNote = 0;//moyenne de tt les article
var moyennettNoteLength = 0;// longeur de note total de tt les article confondue
$scope.paniercomment= [];// stockage des sous objet avec commentaire en gros filtre
$scope.articleComment = 0 ; // comptage d 'article avec commentaire
for (var i = 0; i < $scope.panierBoissons.length; i++) { // boucle pr ajout des prix ttc
  if ($scope.panierBoissons[i].comments > 0 || $scope.panierBoissons[i].comments != null) { // mon objet possed un commentaire alors...
    $scope.paniercomment[$scope.articleComment] = $scope.panierBoissons[i];// on recup le sous objet
    $scope.articleComment++; // imcrement le nbr darticle avc comment
    var moyennenote = 0; // var pr recuperer la moyenne
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

//Moyenne des quantite des produits
var moyennequantite = 0;
var compteurlengthquantite = 0;//taille du length quantite
for (var i = 0; i < $scope.panierBoissons.length; i++) { // boucle pr ajout des prix ttc
  if ($scope.panierBoissons[i].quantite > 2 && $scope.panierBoissons[i].quantite <= 5) { // condition si quantite est entre 3 et 5
    compteurlengthquantite++;
    moyennequantite += $scope.panierBoissons[i].quantite;
  }
}
$scope.moyennequantite = moyennequantite / compteurlengthquantite;
$scope.compteurlengthquantite = compteurlengthquantite;


// fonction ng-click

$scope.removeBoisson = function(canette){
  // indexOF() permet de récuperer la position d'un element dans le tableau
  var positioncanette = panierBoissons.indexOf(canette);
  console.log(positioncanette);
  /// splice permet de supprimer 1 element selon une position
  panierBoissons.splice(positioncanette, 1);

}



}]);
