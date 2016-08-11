
 app.controller('PanierCtrl', ['$scope', function($scope){

  var panierBoissons = $scope.panierBoissons =  [
      {item: 'Produit 1', quantite : 2, comments: [{note: 5, content: "Super boisseau!"},{note: 3, content: "Bof , moyen..."}],  price: 50, photo: 'http://fanextrade.com/wp-content/uploads/2014/06/coca-cola-1500-ml.jpg', reduction: 0.4, selected: false},
      {item: 'Produit 2', quantite : 1, price: 10, photo: 'https://media.simplymarket.fr/PHOTO2/3124480/183491.jpg', selected: false},
      {item: 'Produit 3', quantite : 4, price: 75, photo: 'http://www.sushigoo.fr/163-206-large/fanta.jpg', selected: false},
      {item: 'Produit 4', quantite : 4, price: 55, photo: 'http://www.les-calories.com/IMG/VaNsp.jpg', reduction: 0.6, selected: false},
      {item: 'Produit 5', quantite : 3, comments: [{note: 3, content: "Pas mal, boisseau rafraichissante!"},{note: 1, content: "Naz!!"}], price: 45, photo: 'http://t3.gstatic.com/images?q=tbn:ANd9GcTxO1SSDkaAwUM4GNi86cZPLlGewIlg8CwcAeX-p5OVPdhEfv4KkjSCZ2k', selected: false},
      {item: 'Produit 6', quantite : 1, price: 85, photo: 'http://www.adam-boissons.fr/medias/produits/medium1_badoit_1275_vp.jpg', selected: false},
      {item: 'Produit 7', quantite : 2,  price: 65, photo: 'http://www.castlemalting.com/Publications/Recipes/Images/Leffe-glond-glass256x256.png', reduction: 0.4, selected: false},
      {item: 'Produit 8', quantite : 5, price: 40, photo: 'https://www.vittel.com/fr/sites/default/files/styles/product_image_348x213/public/field/image/vittel-emporter.png?itok=fTxgpSkO', selected: false}
];


/**
 * 1er Methode pour observer d'autre varables dans la scope
 */
$scope.$watch('panierBoissons',watcher,true)

function watcher(){
  $scope.prixMoyen = _.reduce(panierBoissons, function(memo, num){ return memo + num.price }, 0)/ panierBoissons.length;
  $scope.prixHT = _.reduce(panierBoissons, function(memo, num){ return memo + (num.price * num.quantite) ; }, 0);
  $scope.nbreReduc = _.reject(panierBoissons, function(obj){return _.isUndefined(obj.reduction)}).length;
  // on prend un tableau avec les articles qui ont des commentaires
  articleAvecCom = _.reject(panierBoissons, function(obj){return !obj.comments });
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
           affichArtMoyCom[i] = {item: articleAvecCom[i].item, sommeNote: somNote, nbreNote :j+1};
        }
     }
 $scope.affichArtMoyCom = affichArtMoyCom;

  $scope.prixTtc = function () {
    var totalTtc = 0;
    for (boisson of  $scope.panierBoissons) {
        totalTtc += (_.isUndefined(boisson.reduction)) ? boisson.price * boisson.quantite: boisson.price * boisson.quantite * boisson.reduction;
    }
    return totalTtc;
  }();
}

$scope.removeBoisson = function(boisson){

  // indexOF() permet de récuperer la position d'un element dans le tableau
  var indexBoisson = panierBoissons.indexOf(boisson);

  /// splice permet de supprimer 1 element selon une position
  panierBoissons.splice(indexBoisson, 1);
  checks = [];
}

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
     $scope.panierBoissons = panierBoissons
     $scope.checks= [];

};


/**
 * Autre manier que lmes propiété soit observer par la scope
 */
$scope.nbProdCommente = function() {
    var nbComments = 0;
    for (i=0; i < panierBoissons.length; i++) {
      if (!_.isUndefined(panierBoissons[i].comments)) {
        nbComments++;
      }
    }
    return nbComments;
  };


$scope.moyenneArticleTroisCinq = function(){
  nbreArticleTroisCinq = 0;
   tabArticleTroisCinq = _.reject(panierBoissons, function(obj){
      return (obj.quantite < 3 || obj.quantite > 5);
   });
   for (article of tabArticleTroisCinq) {
      nbreArticleTroisCinq += article.quantite;
   }
   return (nbreArticleTroisCinq/tabArticleTroisCinq.length).toFixed(2);
};


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
  };





}]);
