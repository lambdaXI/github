/**
 * All Filters of you needs...
 * @Damien: Noublies pas de faire lefiltre ville.... :p
 */



app.filter('naissance',function(){

   return function(tableau, date){
         if(date === undefined || date == null){
            return tableau;
         }

         return  _.filter(tableau, function(use){
            return moment(use.birthday,'DD/MM/YYYY') > moment(date);
         });

   };
});

app.filter('notes',function(){

   return function(tableau, note){
         if(note === undefined || note == null){
            return tableau;
         }
         return  _.filter(tableau, function(use){
            return use.noteBac >= note;
         });

   };
});
 app.filter('range', function(){
   return function(tab, tranches){
     tranches = _.filter(tranches, function(elt){
        return elt.checked == true;
     });

     if(tranches.length == 0){
       return tab;
     }

     var tabFilter =  [];
     for(tranche of tranches){
        if(tranche.data == "10-25"){
          tabFilter.push(_.filter(tab, function(elt){
               return elt.age >= 10 && elt.age <= 25
          }));
        }
        if(tranche.data == "25-45"){
          tabFilter.push(_.filter(tab, function(elt){
               return elt.age >= 25 && elt.age <= 45
          }));
        }
        if(tranche.data == "45-60"){
          tabFilter.push(_.filter(tab, function(elt){
               return elt.age >= 45 && elt.age <= 60
          }));
        }

      }

    tabFilter = [].concat.apply([], tabFilter);
    // console.log(tranches);

    return tabFilter;
};

});

app.filter('sexe',function(){

   return function(sexe){
     console.log();
         if(sexe === false){
            return "Femme";
         }
         return  "Homme";

   };
});

app.filter('age',function(){

   return function(tab, age){
         return  _.filter(tab, function(use){
            return use.age ;
         });

   };
});
