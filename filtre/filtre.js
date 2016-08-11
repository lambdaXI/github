profil.filter('moisbirth', function() { // creation filtre d'interval d'age
    return function(matches) {
      var result = {};
      angular.forEach(matches, function(match, key) {
        moment.lang('fr'); // config langue moment  pr formatage de date en langue fr
        var now = moment(); // cherche la date d aujourd hui
        now = now.format('L'); // formate en dd/mm/yyyy attention bien remettre =  pour assigner de nouveau sinn sa enregistre pas le formatage

        result[key] = match; // je recup tt mes objets et je rajoute seulment un attribue monthbirth si il ccorrespond au mois
         var datecomparenow = now.toString();// formater en to string pr que la function .match(regex) fonctionne sinn erreur
         var datecompare = match.naissance.toString(); // le format de base est 01/08/1991 dd/mm/yyyy avc match je recup dans un tablo separer

         datecomparenow = datecomparenow.match(/[0-9]+/igm); // recup dans un tableau pr comparer seulemnt les mois
          datecompare = datecompare.match(/[0-9a]+/igm); // recup dans un tableau pr comparer seulemnt les mois le match fonction grace au toString()

          if (datecomparenow[1] == datecompare[1]) { // si le mois corespond alors je rajoute monthbirth a true
            result[key].monthbirth = true;
          }

      });
      return result; // atention a bien mettre le return au bon endroit car on a la function return qui ferme avant la fin dc aps la fermeture rien s execute
    };
});



profil.filter('switch18', function() { // creation filtre switch entre majeur et mineur
    return function(matches, plusoumoin18) {
        var result = {};
        if (plusoumoin18 != false && plusoumoin18!= true) { // pr reafficher tt avec le bouton raz dc different de fasle et true
          result = matches;
          return result;
        }
        if (plusoumoin18) { // switch vers +18
            angular.forEach(matches, function(match, key) {
                if (match.age >= 18) {
                     result[key] = match;
                }
            });
        }
        else {
            angular.forEach(matches, function(match, key) { // boucle qui va rechercher l attribue du sous objet age et qui garde la tranche entre
                if (match.age < 18) {//switch vers -18
                     result[key] = match;
                }
            });
        }


        return result;
    };
});

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



profil.filter('htmlvalue', function($sce) { // creation filtre d'interval d'age
    return function(val) {

        return $sce.trustAsHtml(val);
    };
});




profil.filter('drapeauLg', function() { // creation filtre d'interval d'age
    return function(matches, tableauObjetlangue, affichage) {
        var result = {};
        //onsole.log(affichage);
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

profil.filter('departement', function() { // creation filtre les note bac
    return function(matches, note) {
        var result = [];

        if (note.length == 0) {
            return matches;
        }

        angular.forEach(matches, function(match, key) { // boucle qui va rechercher l attribue du sous objet age et qui garde la tranche entre
            var code = match.codepostal;
            code = code.substring(0,2);

            if (code == note) {
                 result[key] = match;
            }
        });

        return result;
    };
})

profil.filter('departement',function(){
    return function(tableau, depart){
       if(depart === undefined || depart.length == 0){
          return tableau;
       }
       return  _.filter(tableau, function(use){
            return use.codepostal.substring(0,2) == depart
       });
   };
});

profil.filter('rangenom', function() { // creation filtre les note bac
    return function(matches, note) {
        var result = [];// tableau d objet filtrer returner
        var regex = new RegExp(note); // recup  de la saisie en conversion Regex
        if (note.length == 0) { // si la saisie du champ est a 0 jreturn tt
          return matches;
        }


        angular.forEach(matches, function(match, key) { // boucle qui va rechercher le tableau d'objet
            var nom = match.nom; // recup nom de l user
            var prenom = match.prenom;// recup prenom de l user

            if (regex.test(nom) || regex.test(prenom)) { // verif si le champ correspond a nom ou prenom et le return
                 result[key] = match;
            }
        });

        return result; // return le tableau filtrer
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
