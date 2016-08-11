/*
Declaration d'application MyPhoneApp
 */

var MyPhoneApp = angular.module('MyPhoneApp', []);

/*
 *  Controller MainCtrl et fera appel aux premier module d'Angular qui est
 *  la scope.
 *  La scope est un objet entre le HTML et le JS pour controller la DOM
 *  Un controller require à 99% la scope
 */

MyPhoneApp.controller('MainCtrl', ['$scope', function($scope) {
    // je creer une variable angular
    $scope.title = "Liste des plus beaux smartphones";
    /*
     *creer un tableau d'objet de smartphone
     */

    $scope.smartphone = [{
        titre: "Samsung Galaxy S7",
        image: "http://www.journaldugeek.com/files/2016/04/galaxy-s7.jpg",
        description: "Les Samsung Galaxy S7 et Galaxy S7 Edge2 sont les deux smartphones phares de la marque coréenne annoncés en février 2016 lors du Mobile World Congress.",
        lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S7"
    }, {
        titre: "Samsung Galaxy S6",
        image: "http://cdn2.pcadvisor.co.uk/cmsdata/reviews/3600059/Galaxy_S6_2.jpg",
        description: "Les Samsung Galaxy S6  de la marque coréenne annoncés en février 2016 lors du Mobile World Congress.",
        lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S6"
    }, {
        titre: "Samsung Galaxy S5",
        image: "http://phonesdata.com/files/models/Samsung-Galaxy-S5-CDMA-230.jpg",
        description: "Les Samsung Galaxy S5, S6 Edge, et S6 Edge+ sont les trois smartphones phares de la marque coréenne disponibles à la vente depuis le 10 avril 20154.",
        lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S5"
    }, {
        titre: "Samsung Galaxy S4",
        image: "http://phonesdata.com/files/models/Samsung-Galaxy-S5-CDMA-230.jpg",
        description: "Les Samsung Galaxy S4, S6 Edge, et S6 Edge+ sont les trois smartphones phares de la marque coréenne disponibles à la vente depuis le 10 avril 20154.",
        lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S4"
    }, ];



}]);

MyPhoneApp.controller('IpodCtrl', ['$scope', function($scope) {

    $scope.Ipod = [{
        titre: "Ipod nano",
        image: "http://i2.cdscdn.com/pdt2/n/7/b/1/700x700/ipodnanogen7b/rw/apple-ipod-nano-16-go-blue-generation-7.jpg",
        description: "Les Samsung Galaxy S7 et Galaxy S7 Edge2 sont les deux smartphones phares de la marque coréenne annoncés en février 2016 lors du Mobile World Congress.",
        lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S7",
        couleur: "rouge, bleu et or",
        prix: 16,
        quantites: 5,
        reduction: 30
    }, {
        titre: "Ipod Touch",
        image: "http://i2.cdscdn.com/pdt2/n/7/b/1/700x700/ipodnanogen7b/rw/apple-ipod-nano-16-go-blue-generation-7.jpg",
        description: "Les Samsung Galaxy S6  de la marque coréenne annoncés en février 2016 lors du Mobile World Congress.",
        lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S6",
        couleur: "rouge, bleu et or",
        prix: 26,
        quantites: 5,
        reduction: 50
    }, {
        titre: "Ipod Shuffle",
        image: "http://images.apple.com/euro/ipod-shuffle/c/generic/images/og.jpg?201607260427",
        description: "Les Samsung Galaxy S5, S6 Edge, et S6 Edge+ sont les trois smartphones phares de la marque coréenne disponibles à la vente depuis le 10 avril 20154.",
        lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S5",
        couleur: "rouge, bleu et or",
        prix: 4,
        quantites: 5,
        reduction: 0
    }, {
        titre: "Ipod 4",
        image: "http://www.presse-citron.net/wordpress_prod/wp-content/uploads/touch2010.jpg",
        description: "Les Samsung Galaxy S4, S6 Edge, et S6 Edge+ sont les trois smartphones phares de la marque coréenne disponibles à la vente depuis le 10 avril 20154.",
        lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S4",
        couleur: "rouge, bleu et or",
        prix: 26,
        quantites: 5,
        reduction: 0
    }, {
        titre: "ipod 5",
        image: "https://d3nevzfk7ii3be.cloudfront.net/igi/fqwZtI2pEBOOjtZR.medium",
        description: "Les Samsung Galaxy S4, S6 Edge, et S6 Edge+ sont les trois smartphones phares de la marque coréenne disponibles à la vente depuis le 10 avril 20154.",
        lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S4",
        couleur: "rouge, bleu et or",
        prix: 5,
        quantites: 5,
        reduction: 0
    }, {
        titre: "Samsung Galaxy S4",
        image: "http://phonesdata.com/files/models/Samsung-Galaxy-S5-CDMA-230.jpg",
        description: "Les Samsung Galaxy S4, S6 Edge, et S6 Edge+ sont les trois smartphones phares de la marque coréenne disponibles à la vente depuis le 10 avril 20154.",
        lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S4",
        couleur: "rouge, bleu et or",
        prix: 27,
        quantites: 5,
        reduction: 0
    }];
    //Ipod prix moyen------
    var moyen = 0;
    for (var i = 0; i < $scope.Ipod.length; i++) {
        moyen += $scope.Ipod[i].prix;
    }
    moyen = moyen / $scope.Ipod.length;

    $scope.moyenne = moyen;

    //Ipod moin cher---------------
    var ipodMoincher;
    var position;
    for (var i = 0; i < $scope.Ipod.length; i++) {
        if (ipodMoincher == null) {
            ipodMoincher = $scope.Ipod[i].prix;
            position = i;
        } else if ($scope.Ipod[i].prix < ipodMoincher) {
            ipodMoincher = $scope.Ipod[i].prix;
            position = i;
        }
    }
    $scope.IpodCheap = $scope.Ipod[position];

    // IPOD PLUS CHER-----
    var ipodPluscher;
    var positionP;
    for (var i = 0; i < $scope.Ipod.length; i++) {
        if (ipodPluscher == null) {
            ipodPluscher = $scope.Ipod[i].prix;
            positionP = i;
        } else if ($scope.Ipod[i].prix > ipodPluscher) {
            ipodPluscher = $scope.Ipod[i].prix;
            positionP = i;
        }
    }
    $scope.IpodCher = $scope.Ipod[positionP];

    var tableau = $scope.Ipod;
    var prixMax = _.max(tableau, function(elt) {
        return elt.prix;
    }); // function underscore return l element objet
    $scope.prixcher = prixMax; // Recup de lobjet avec le prix le plus cher
    var prixMin = _.min(tableau, function(eltf) {
        return eltf.prix;
    });
    $scope.prixCheap = prixMin;
    console.log(prixMin);

    // reduction------

    $scope.Ipod[0].reducfait = $scope.Ipod[0].prix - $scope.Ipod[0].prix * $scope.Ipod[0].reduction / 100;
    $scope.Ipod[1].reducfait = $scope.Ipod[1].prix - $scope.Ipod[1].prix * $scope.Ipod[1].reduction / 100;

    // Nbr toto de produit


    $scope.totalquantite = $scope.Ipod.length;


    // nbr article avec reduction
    //
    var nbrreduc = 0;
    for (var i = 0; i < $scope.Ipod.length; i++) {
        if ($scope.Ipod[i].reduction > 0) {
            nbrreduc += 1;
        }
    }
    // nbr article en reduc
    $scope.articlereduc = nbrreduc;

    // $index$
    var ipodglobal = $scope.Ipod;
    $scope.removeIpod = function(mp3) {
        // indexOF() permet de récuperer la position d'un element dans le tableau
        var positionmp3 = ipodglobal.indexOf(mp3);
        console.log(positionmp3);
        /// splice permet de supprimer 1 element selon une position
        ipodglobal.splice(positionmp3, 1);
    }




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

    * 3 Bonus: Afficher le nb delement selectionner dans le boutton et changer de classe de bg pour les elements selectinner
    */



    /**
     * Les evenements et directives sous AngularJS
     */

    /*
    *  Application "Carnet d'Adresses"

      + Créer un tableau de 8 utilisateurs avec nom, prénom, age,photo,  date de naissances(dd/mm/YYYY),noteBac (de 1 à 20), sexe(boolean), ville (Paris ou Lyon ou Marseille), biographie, langue(fr,en,it ou es),
    	+ Afficher tous ces utilisateurs et leusr informations dans des Collections sous Materialize (http://materializecss.com/collections.html)
      + Afficher le nombre d'utilisateur ainsi que la moyenne d'age des utilisateurs
      + Afficher à coté du nombre utilisateurs le mot "utilisateurs" avec un "s" ou pas avec la directive "ng-show"
      + Afficher le mots "Il y a que des mineurs" si la moyenne est inférieur à 18 ans avec la directive "ng-show" ou "ng-if"
      + Créer un bouton "remove" à chaque utilisateur permettant au click de supprimer l'utilisateur
      + Créer des boutons radios Lyon Paris Marseille pour filtrer les utilisatur au click de ces bouttons radios
      + Créer des checkbox de tranches d'age permettantd de filtrer par age les utilisateurs incluant les tranches de prix suivantes: -10, 10-18, 18-30 , 30-45 , + de 45
       Bonus: Les checkbox de tranches d'age prendra en compte le 1ere filtre sur lesboutons radios
      + Créer un Datepicker pour filtrer par date de naissances les utilisateurs à partir de cette date : avec Materializecss http://materializecss.com/forms.html#date-picker
      + Créer un input range pour filtrer selon la note au bac de 1 à 20 avec Materialize http://materializecss.com/forms.html#range
      + Créer un formulaire d'ajout d'utilisateurs avec l'ensemble de ces données (on fera la validation plus tard, vous piuvez prendre de l'avance et voir comment on valide un formulaire sous ANgular ici https://openclassrooms.com/courses/validation-de-formulaire-simplifiee-avec-angularjs)
      +
      +
    */


}]);
