

profil.controller('Membre', ['$scope', '$http', function($scope, $http){

    $scope.querynom = ""; // pr eviter les erreur on declare le champ vide de base
    $scope.departementselect = "";

  $scope.tabloLangue = [
    {langue: "jp", photo: "https://www.rockagogo.com/image/big/HC085-drapeau-divers-pays-japon-asie-.jpg"},
    {langue: "fr", photo: "http://lagauchematuer.fr/wp-content/uploads/2015/08/photo-drapeau-francais-france.jpg"},
    {langue: "en", photo: "http://www.lexilogos.com/images/gb_drapeau.gif"}
  ]

  var testcheckedAgeRange = $scope.tablotrancheage = [{ageTranche: '10-20', checker: false, min: 10, max: 20}, {ageTranche: '20-30', checker: false, min: 20, max: 30}, {ageTranche: '30-40', checker: false, min: 30, max: 40}]; // tablo pr filtrer les trranches d age cocher pr pouvoir les retourner au filtre



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

  // requete HTTP en GET (via l'url)
     // pour récuperre mon tableau en JSON formatte
     // 57aaf50ce4b0dc55a4ebcca7: identifiant de sauvegarde
    $http.get('https://jsonblob.com/api/57ac76f7e4b0dc55a4ec2ce5').success(function(response) { //reponse: contenu récupéré depuis l'url
         $scope.listeMembre = listeMembre = response; //jenregistre dans ma scope mes utilisateurs
        //  $scope.nbUsers = $scope.users.length;


  // $scope.listeMembre = listeMembre =[
  //   {
  //     nom: "azazel",
  //     prenom: "Alex",
  //     age: 25,
  //     photo:"http://www.journaldugeek.com/wp-content/blogs.dir/1/files/2016/07/j.jpg",
  //     naissance: "01/08/1991",
  //     noteBac: 20,
  //     codepostal: "30300",
  //     genre: true,
  //     ville: "Nimes",
  //     biographie: "je suis pompier",
  //     langue: 'jp',
  //     like: false,
  //     statutUp: false
  //   },
  //   {
  //     nom: "azazel2",
  //     prenom: "Alex2",
  //     age: 15,
  //     photo:"http://www.journaldugeek.com/wp-content/blogs.dir/1/files/2016/07/j.jpg",
  //     naissance: "01/07/1981",
  //     noteBac: 5,
  //     codepostal: "75001",
  //     genre: true,
  //     ville: "Paris",
  //     biographie: "je suis medcin",
  //     langue: 'fr',
  //     like: false,
  //     statutUp: false
  //   },
  //   {
  //     nom: "azazel3",
  //     prenom: "Alex3",
  //     age: 35,
  //     photo:"http://www.journaldugeek.com/wp-content/blogs.dir/1/files/2016/07/j.jpg",
  //     naissance: "01/05/2001",
  //     noteBac: 15,
  //     codepostal: "69140",
  //     genre: true,
  //     ville: "Lyon",
  //     biographie: "je suis policier",
  //     langue: 'en',
  //     like: false,
  //     statutUp: false
  //   },
  //   {
  //     nom: "azazel4",
  //     prenom: "Alex4",
  //     age: 14,
  //     photo:"http://www.journaldugeek.com/wp-content/blogs.dir/1/files/2016/07/j.jpg",
  //     naissance: "01/07/1980",
  //     noteBac: 5,
  //     codepostal: "75001",
  //     genre: true,
  //     ville: "Paris",
  //     biographie: "je suis medcin",
  //     langue: 'fr',
  //     like: false,
  //     statutUp: false
  //   },
  // ];

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




$scope.logmembre = function(test){
  console.log(test);
}

$scope.dessousmoyenne = function(variable){// pour juste rajouter une couleur parapport au ng-class
  if(variable < 10){
    return true;
  }
  else {
    return false;
  }
}


$scope.departementtablo = [
  {numero: 69, departement: "rhone"},
  {numero: 75, departement: "paris"},
  {numero: 30, departement: "gard"},
];
// declarer un tablo pr recuperer les valeur du input select
$scope.departementtablo2 = ['rhone', 'paris', 'nimes'];

//---------------------------------
function SessionJsonRecup(nomDeSession){// FUNCTION RECUP SESSION
  if (localStorage.getItem(nomDeSession)) { // si la session existe
    return JSON.parse(localStorage.getItem(nomDeSession));//convert en objet + recup des infos
  }
  else {
    return false;//sinn renvoie false
  }
}
//FUNCTION VAR JSON SESSION 1er paramettre ( egale variable session) 2em paramettre (variable assigner a la session)
function SessionJsonSet(VarSessionSet, assignationVar){
  localStorage.setItem(VarSessionSet,JSON.stringify(assignationVar));
}
//----------------------------------

if (localStorage.getItem("settinglike4")) {// verif la session si elle existe
    var objetlike = localStorage.getItem("settinglike4"); //recup des infos
    var monobjet = JSON.parse(objetlike);//convert en objet
    console.log(monobjet);
    for (var i = 0; i < monobjet.length; i++) {//reafectation des valeur
        $scope.listeMembre[i].like = monobjet[i].like;
        $scope.listeMembre[i].statutUp = monobjet[i].statutUp;
    }
}


$scope.affiche = function(objet, objet2){// function que qua l user click sur le pouce on stock les info en session
  // console.log("id:" + objet + " valeur: " +objet2);
  // var monobjet_json = JSON.stringify($scope.listeMembre);
  // localStorage.setItem("settinglike4",monobjet_json); // stocage en local session
}

$scope.removeAllLike = function(){
  for (user of $scope.listeMembre) {
      user.like = false;
    }
    var monobjet_json = JSON.stringify($scope.listeMembre);
    localStorage.setItem("settinglike4",monobjet_json); // stocage en local session
}

if (SessionJsonRecup("settingFavoris")) {
  var test = SessionJsonRecup("settingFavoris");
  $scope.favoris = test;
  console.log(test);
}else {
  $scope.favoris = []
}


$scope.addFavoris= function(id){
  console.log(id);
  if ($scope.favoris.indexOf(id) === -1) {
    $scope.favoris.push(id);
  }
  else {
    $scope.favoris.splice($scope.favoris.indexOf(id), 1);
  }

  var jsonFavorisMember = JSON.stringify($scope.favoris);
  localStorage.setItem("settingFavoris",jsonFavorisMember);
}



$scope.clearFavoris = function (){// Vidage des favoris
  $scope.favoris=[];//vidage
  SessionJsonSet("settingFavoris",$scope.favoris);
}

$scope.LikeFunction = function(user){// bouton LIKE et DELIKE
    user.like = !user.like;// je change la valeur au contraire de sa valeur actuel
  SessionJsonSet("settinglike4",$scope.listeMembre);// je stock dans ma session les données
}

$scope.removeUseFavoris = function(id){// FUNCTION PR REMOVE UN USER DANS PANIER FAVORIS
  $scope.favoris.splice($scope.favoris.indexOf(id), 1);// je retire selon l id
}

$scope.noteZeroAll = function(){// FUNCTION BUTTON ZERO NOT BAC
  for (user of $scope.listeMembre) {// parcour le tableau met tt a 0
      user.noteBac = 0;
    }
}

});

}]);
