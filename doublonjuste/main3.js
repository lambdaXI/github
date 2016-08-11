var profil = angular.module('profil', []);

profil.filter('range', function() { // creation filtre d'interval d'age
    return function(matches, min, max) {
        var result = {};

        angular.forEach(matches, function(match, key) { // boucle qui va rechercher l attribue du sous objet age et qui garde la tranche entre
            if (match.age >= min && match.age <= max) {
                 result[key] = match;
            }
        });

        return result;
    };
});

profil.filter('drapeauLg', function() { // creation filtre d'interval d'age
    return function(matches, tableauObjetlangue, affichage) {
        var result = {};
        console.log(affichage);
        if (affichage != true) {
            angular.forEach(matches, function(match, key) { // boucle qui va rechercher l attribue du sous objet age et qui garde la tranche entre
                if (match.languephoto) {
                    match.languephoto= null;
                }
                     result[key] = match;
            });
          return result;
        }
        console.log(tableauObjetlangue);
        angular.forEach(matches, function(match, key) { // boucle qui va rechercher l attribue du sous objet age et qui garde la tranche entre
            for (var i = 0; i < tableauObjetlangue.length; i++) {
                if (tableauObjetlangue[i].langue == match.langue) {
                    match.languephoto = tableauObjetlangue[i].photo;
                    result[key] = match;
                }
            }

        });
        console.log(result);
        return matches;

    };
});

profil.filter('rangetranche', function() { // creation filtre d'interval d'age attention mettre un tabloe scope dans le filtre comme paramettre
    return function(matches, tabloAge) {
        var result = {};// va ns retourner le tablo filtrer
        var tabloaucunchecker = false; // permet de returner tt le tablo si il n y a aucun checker de cocher

        angular.forEach(matches, function(match, key) { // boucle qui va rechercher l attribue du sous objet age et qui garde la tranche entre
            for (var i = 0; i < tabloAge.length; i++) {// parcour mon second objet tablo qui contient les donner des checkboxs
              if (tabloAge[i].checker == true) {// donc la normal on filtre les bon  element qui correspond a la date des cher true
                tabloaucunchecker = true;
                if (match.age >= tabloAge[i].min && match.age <= tabloAge[i].max) {
                     result[key] = match;
                }
              }

            }
            if (tabloaucunchecker == false) { // si aucun chercker est cocher alors je dois tt retourner
              result = matches;
            }
        });

        return result; // retourne le tablo
    };
});

profil.filter('rangeBac', function() { // creation filtre les note bac
    return function(matches, note) {
        var result = {};

        angular.forEach(matches, function(match, key) { // boucle qui va rechercher l attribue du sous objet age et qui garde la tranche entre
            if (match.noteBac >= note) {
                 result[key] = match;
            }
        });

        return result;
    };
})

profil.filter('dateSuperieur', function() { // creation filtre pr naissance superieur
    return function(matches, date) {
      // console.log(date);
      // console.log("coucou");
        var result = {};
        var moisconvert = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var daysconvert = ["Mon", "Tue","Wed","Thu","Fri","Sat","Sun"];

        angular.forEach(matches, function(match, key) { // boucle qui va rechercher l attribue du sous objet age et qui garde la tranche entre
          var datecompareObjet = match.naissance; // recup de la date attribue du sous bojet
          datecompareObjet = datecompareObjet.match(/[0-9a-zA-Z]+/igm);
          //console.log(datecompareObjet);

          var datecompareInput = date; // recupe de la date definit dans l'input
          // datecompareInput = datecompareInput.match(/[0-9a-zA-Z]+/igm);
          // var mois = moisconvert.indexOf(datecompareInput[1]);
          // var days = daysconvert.indexOf(datecompareInput[0]);
          // datecompareInput[1] = mois;
          // datecompareInput[0] = days;

          //console.log(datecompareInput);
          // console.log(datecompareInput);

            if (datecompareInput[3] < datecompareObjet[2] ) { // si l'age est superieur alors on le stock
                 result[key] = match;
            }
            else if (datecompareInput[3] == datecompareObjet[2] && mois < datecompareObjet[1]) {
              result[key] = match;
            }
            else if (datecompareInput[3] == datecompareObjet[2] && mois == datecompareObjet[1] &&  days < datecompareObjet[0] ) {
              result[key] = match;
            }
        });

        return result;
    };
});



profil.controller('Membre', ['$scope', function($scope){

  $scope.tabloLangue = [
    {langue: "jp", photo: "https://www.rockagogo.com/image/big/HC085-drapeau-divers-pays-japon-asie-.jpg"},
    {langue: "fr", photo: "http://lagauchematuer.fr/wp-content/uploads/2015/08/photo-drapeau-francais-france.jpg"},
    {langue: "en", photo: "http://www.lexilogos.com/images/gb_drapeau.gif"}
  ]

  var testcheckedAgeRange = $scope.tablotrancheage = [{ageTranche: '10-20', checker: false, min: 10, max: 20}, {ageTranche: '20-30', checker: false, min: 20, max: 30}, {ageTranche: '30-40', checker: false, min: 30, max: 40}]; // tablo pr filtrer les trranches d age cocher pr pouvoir les retourner au filtre



  console.log($scope.tablotrancheage);
  $scope.filterAge = function (plageAge) { // fonction au click prles tranche d age
    if (plageAge == 0) {
      $scope.agemin = 0; // age minimum pr le filtrage
      $scope.agemax = 50; // age maxi pr le filtrage
    }
    else if (plageAge == 1) {
      $scope.agemin = 0; // age minimum pr le filtrage
      $scope.agemax = 20; // age maxi pr le filtrage
    }
    else if (plageAge == 2) {
      $scope.agemin = 20; // age minimum pr le filtrage
      $scope.agemax = 30; // age maxi pr le filtrage
    }
    else if (plageAge == 3) {
      $scope.agemin = 30; // age minimum pr le filtrage
      $scope.agemax = 40; // age maxi pr le filtrage
    }
    console.log(plageAge);
  }


  $scope.compare = ["Sat", "Aug", "20", "1016"]; // date qui filtre si c est superieur alors afficher variable declarer de base

  $scope.range = 0;

  $scope.listeMembre = listeMembre =[
    {
      nom: "azazel",
      prenom: "Alex",
      age: 25,
      photo:"http://www.journaldugeek.com/wp-content/blogs.dir/1/files/2016/07/j.jpg",
      naissance: "01/08/1991",
      noteBac: 20,
      genre: true,
      ville: "Nimes",
      biographie: "je suis pompier",
      langue: 'jp'
    },
    {
      nom: "azazel2",
      prenom: "Alex2",
      age: 15,
      photo:"http://www.journaldugeek.com/wp-content/blogs.dir/1/files/2016/07/j.jpg",
      naissance: "01/08/1981",
      noteBac: 5,
      genre: true,
      ville: "Paris",
      biographie: "je suis medcin",
      langue: 'fr'
    },
    {
      nom: "azazel3",
      prenom: "Alex3",
      age: 35,
      photo:"http://www.journaldugeek.com/wp-content/blogs.dir/1/files/2016/07/j.jpg",
      naissance: "01/08/2001",
      noteBac: 15,
      genre: true,
      ville: "Lyon",
      biographie: "je suis policier",
      langue: 'en'
    }
  ];

console.log(listeMembre.length); // taille tablo donc egale taille des membres
$scope.nbruser = $scope.listeMembre.length;// assignation dans un scope
//essaye en fonction pr rafraichir et sa marche plus besoin des 2 ligne au dessus
$scope.raffraichieUser = function(){
  return $scope.listeMembre.length;
}

$scope.MoyenneageAll = _.reduce(listeMembre, function(memo, num){ return memo + num.age; }, 0)/ listeMembre.length; // age moyenne de tt les user
$scope.moyennettage = function(){ // function retunr moyenne age all
  return _.reduce(listeMembre, function(memo, num){ return memo + num.age; }, 0)/ listeMembre.length; // age moyenne de tt les user
}

$scope.removeUser = function(item){ // function pr remove user avec comme paramettre le sous objet du tableau
  var position = $scope.listeMembre.indexOf(item); // recup l'item actuelle et cherche sa position dans mon talbeau
  $scope.listeMembre.splice(position, 1); // on suprrime du tableau
}


// test si tt les valeur num.age sont inferieur a 18 si une seul des valeur est au dessus return false sinn tt les valeurs sont inferieur a 18
var test = _.every(listeMembre, function(num) { return num.age < 18; });
// test2 si tt les valeur num.age sont superieur a 18 si une seul des valeur est au dessus return false sinn tt les valeurs sont superieur a 18
var test2 =_.every(listeMembre, function(num) { return num.age > 18; });

if (test) {

  $scope.messageMajoriteAge = "vous êtes tous mineur"; // message afficher mineur all
}
else if (test2) {
  $scope.messageMajoriteAge = "vous êtes tous majeur"; // message affiche all majeur
}
else{
  $scope.messageMajoriteAge = "Tout type d'age"; //affiche ts age confondue
}

// Filtre Angular variable tranche d age de depart
$scope.agemin = 0; // age minimum pr le filtrage
$scope.agemax = 50; // age maxi pr le filtrage
$scope.chckedIndexs = 0; // plage d ' age selon le nivo de l index



// $scope.$watch('chckedIndexs', function(){ // watch pr modif en permanence les variable
//   if ($scope.chckedIndexs == 1) {
//     $scope.agemin = 10;
//     $scope.agemax = 20;
//   }
//   else if ($scope.chckedIndexs == 2) {
//     $scope.agemin = 20;
//     $scope.agemax = 30;
//   }
//   else if ($scope.chckedIndexs == 3) {
//     $scope.agemin = 30;
//     $scope.agemax = 40;
//   }
//   else {
//     $scope.agemin = 0;
//     $scope.agemax = 50;
//   }
// }, true) //-------ne fonctionne pas
//


$scope.filterDateSelect = function(test){ // recupe date en tableau si supp le filtre affiche au dessu

  var test2 = test;
  test2 =test2.toString();
  test2 = test2.match(/[0-9a-zA-Z]+/igm); // separe en tableau les donnees pour ensuite les tester
  console.log(test2);
  console.log("coucou");
  $scope.compare = test2; //assignation de la date pr le filtre


}


$scope.filterBac = function(variable){ // juste pr regarder la note du bac sinn la ffonction ne sert a rien
  console.log(variable);
}


$scope.addUser = function(){// function button add user
  var newuser ={};
  newuser.nom = $scope.nom;
  newuser.prenom = $scope.prenom;
  newuser.age = $scope.age;
  newuser.photo = $scope.photo;
  newuser.naissance = $scope.naissance;
  newuser.noteBac = $scope.noteBac;
  newuser.genre = $scope.genre;
  newuser.ville = $scope.ville;
  newuser.biographie = $scope.biographie;
  newuser.langue = $scope.langue;

var positiomax = $scope.listeMembre.length + 1;
console.log(positiomax);

console.log(newuser);
 $scope.listeMembre[positiomax] = newuser;
console.log($scope.listeMembre);
}// fin function add user

$scope.logmembre = function(test){
  console.log(test);
}

$scope.dessousmoyenne = function(variable){
  if(variable < 10){
    return true;
  }
  else {
    return false;
  }
}

}]);
