
 app.controller('UsersCtrl', ['$scope','$filter', function($scope, $filter){

   $scope.users =  [

     {nom:'Lannister', prenom:'Tyrion', age:47, photo:'https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C.jpg', birthday:'11/06/1969', noteBac:17, sexe:true, ville:'Marseille', biographie:"Tyrion Lannister, surnommé le Lutin, le Nain, le Gnome ou encore le Mi-homme est l'un des personnages principaux de la saga Le Trône de fer écrite par George R. R. Martin. Il est le troisième enfant de lord Tywin Lannister, et donc le frère de Cersei et Jaime Lannister. Né en l'an 273, il est né nain et difforme, et sa mère est morte en couches en le mettant au monde, ce qui lui vaut un rejet farouche de la part de son père.", langue:'en'},
     {nom:'Snow', prenom:'Jon', age:29, photo:'http://media.topito.com/wp-content/uploads/2016/04/jon-250x250.jpg', birthday:'26/12/1986', noteBac:10, sexe:true, ville:'Lyon', biographie:"Jon Snow est l'un des personnages principaux de la saga Le Trône de fer écrite par George R. R. Martin. Il est désigné comme étant le fils illégitime de lord Eddard Stark et d'une femme inconnue. Né en l'an 283, c'est un jeune garçon âgé de quatorze ans au début de la saga, (dix-sept ans dans l'adaptation télévisée) qui, comme la plupart des caractéristiques physiques des Stark, possède des cheveux noirs, le teint brun, des yeux d'un gris noir sombre et une carrure mince et gracieuse. Il ressemble d'ailleurs bien plus à son père que ses demi-frères et demi-sœurs. Jon est accompagné d'un loup géant blanc, un albinos du nom de Fantôme. Les circonstances de la naissance de Jon restent cependant entourées de mystère, ainsi que l'identité réelle de sa mère.", langue:'fr'},
     {nom:'Baratheon', prenom:'Joffrey', age:24, photo:'http://media.topito.com/wp-content/uploads/2015/05/joffrey-250x250.jpg', birthday:'20/05/1992', noteBac:4, sexe:true, ville:'Paris', biographie:"Joffrey Baratheon est le fils aîné de Cersei et, officiellement, de Robert Baratheon. Âgé de 12 ans au début de la saga, il est, sous des manières policées, cruel et vaniteux. Promis à Sansa Stark, qui est émerveillée par sa belle allure, il lui promet d'épargner la vie d'Eddard Stark lorsque celui-ci est capturé par Cersei et que lui-même devient roi, à la suite de la mort de Robert. Mais il ordonne à la place son exécution publique et humilie et fait battre Sansa à plusieurs reprises pour son propre amusement. Seule l'arrivée à la capitale de son oncle Tyrion, nommé Main du roi, dans A Clash of Kings, freine ses cruels desseins. Après la bataille de la Nera, dans A Storm of Swords, Joffrey épouse finalement Margaery Tyrell mais il est empoisonné et meurt lors du repas de noces.", langue:'fr'},
     {nom:'Mervault', prenom:'Davos', age:55, photo:'http://www.quizz.biz/uploads/quizz/748833/26_YBUJ7.jpg', birthday:'02/06/1961', noteBac:15, sexe:true, ville:'Marseille', biographie:"Davos Mervault est un ancien contrebandier que Stannis Baratheon a fait chevalier pour l'avoir ravitaillé durant la révolte de son frère Robert (mais à qui il a par la même occasion coupé les dernières phalanges de la main gauche pour contrebande). Surnommé le « chevalier oignon » et méprisé par les vassaux de Stannis, il lui est néanmoins indéfectiblement loyal et lui donne de précieux conseils, pas toujours suivis. Il s'oppose à Mélisandre, de qui il se méfie depuis qu'il a vu ses pouvoirs à l'œuvre, et participe à la bataille de la Nera, réussissant par miracle à échapper au désastre après la destruction de son navire par le feu grégeois. Recueilli sur un îlot désert par des hommes de Stannis, il regagne Peyredragon et Stannis le nomme au poste de « Main du Roi ». Il persuade alors Stannis de se rendre dans le nord de Westeros afin de répondre à l'appel à l'aide de la Garde de Nuit. On apprend plus tard, qu'envoyé à Blancport négocier le ralliement des Manderly à Stannis, il aurait été exécuté par ceux-ci dans l'espoir d'obtenir le pardon des Lannister pour avoir suivi Robb Stark jusqu'à sa mort. Mais Manderly a seulement simulé son exécution et le charge secrètement de ramener Rickon Stark, le fils d'Eddard Stark qui se trouve sur l'île de Skagos où les habitants sont réputés pour être des cannibales.", langue:'it'},
     {nom:'Lannister', prenom:'Cersei', age:42, photo:'http://assets.viewers-guide.hbo.com/larges2-ep1-people-profilepic-baratheon-lannister-cersei-800x800.jpg', birthday:'03/10/1973', noteBac:12, sexe:false, ville:'Marseille', biographie:"Cersei Lannister est l'un des personnages principaux de la saga Le Trône de fer écrite par George R. R. Martin. C'est la fille de lord Tywin Lannister et la sœur jumelle de Jaime Lannister, et elle est devenue reine des Sept Couronnes en épousant Robert Baratheon. Femme très ambitieuse et réputée pour sa beauté, elle supporte mal les restrictions que lui impose son sexe et n'a que du mépris pour son mari.", langue:'en'},
     {nom:'Stark', prenom:'Arya', age:19, photo:'http://cdn03.cdn.justjared.com/wp-content/uploads/headlines/2016/06/arya-stark-moment-game-of-thrones.jpg', birthday:'15/04/1997', noteBac:14, sexe:false, ville:'Lyon',biographie:"Arya Stark est l'un des personnages principaux de la saga Le Trône de fer écrite par George R. R. Martin. Elle est la fille cadette de lord Eddard Stark et de lady Catelyn Tully. C'est une jeune fille d'une dizaine d'années qui préfère l'escrime et l'équitation à la couture. Elle ne s'entend donc pas bien avec sa sœur aînée Sansa; en revanche, elle est très proche de son demi-frère bâtard Jon Snow avec qui elle partage les traits des Stark. Son loup se nomme Nymeria.", langue:'es'},
     {nom:'Stark', prenom:'Catelyn', age:53, photo:'http://i2.wp.com/www.tor.com/wp-content/uploads/2014/12/catelyn-stark.jpg?fit=250%2C%209999&crop=0%2C0%2C100%2C250px', birthday:'01/07/1963', noteBac:19, sexe:false, ville:'Lyon', biographie:"Catelyn Stark est l'un des personnages principaux de la saga Le Trône de fer écrite par George R. R. Martin. Elle est l'épouse de lord Eddard Stark avec qui elle a cinq enfants, Robb, Sansa, Arya, Bran et Rickon.", langue:'es'},
     {nom:'Clegane', prenom:'Sandor', age:47, photo:'https://pbs.twimg.com/profile_images/492671400038375424/Tpc3on2K_400x400.jpeg', birthday:'24/04/1969', noteBac:4, sexe:true, ville:'Paris', biographie:"Sandor Clegane, dit « le Limier », est, au début de la saga, le garde du corps du prince Joffrey Baratheon. Il est considéré comme l'un des meilleurs combattants de Westeros et a la moitié du visage atrocement brûlée (brûlure infligée par son frère aîné, Gregor, alors qu'ils étaient enfants). Il déteste son frère et n'a que mépris pour les chevaliers depuis que celui-ci en est devenu un, considérant que les valeurs de la chevalerie ne sont que pure hypocrisie. Après la mort de Robert Baratheon, il intègre la Garde royale mais refuse toujours de prêter serment de chevalerie. Il est le seul à protéger Sansa Stark, pour qui il éprouve des sentiments contradictoires, des brutalités qu'elle subit. Lors de la bataille de la Nera, il refuse de mener une sortie à cause de sa phobie du feu et déserte, non sans avoir rendu une dernière visite à Sansa. Dans A Storm of Swords, il erre dans le royaume et est capturé par les hommes de Beric Dondarrion. Jugé pour ses crimes, il affronte Dondarrion en duel judiciaire et gagne sa liberté en remportant la victoire. Peu après, il enlève Arya Stark et compte en tirer une forte rançon en la ramenant à sa mère mais tous deux arrivent juste au moment des Noces Pourpres. Il s'enfuit, toujours en amenant Arya avec lui, et finit par rencontrer trois hommes de son frère. Il sort vainqueur du combat qui s'ensuit, grâce à l'intervention d'Arya, mais est gravement blessé. Alors que ses blessures se sont infectées, il demande à Arya de l'achever mais celle-ci refuse et l'abandonne à son sort. On ignore alors ce qu'il advient de lui, mais des indices laissent à penser qu'il a été recueilli et soigné dans un monastère et y est entré en tant que novice (même s'il passe officiellement pour mort), un homme ayant sa taille étant vu comme novice d'un monastère et le propre cheval noir de Sandor, l'Étranger, faisant partie des animaux du monastère.", langue:'it'}

     ];

    // Bonus: charger les users by JSON
    //  var users  = $http.get('http://localhost/angular/users.json').success(function(response) {
    //      $scope.users = users = response
    //  });

    //iniot tranches
     $scope.tranches = [
        {"data": "10-25", "checked" : false},
        {"data": "25-45", "checked" : false},
        {"data": "45-60", "checked" : false},
      ];

     $scope.tousMineur = function (){
        return _.every($scope.users,function(user) {return user.age < 18;})
     };

     $scope.moyenneAge = function() {
         var naissanceFilter = $filter('naissance');
         var rangeFilter = $filter('range');
         var notesFilter = $filter('notes');
         var resFilter = naissanceFilter($scope.users,$scope.date);
         var notesFilter = notesFilter(resFilter,$scope.notesBac);
         var rangeFilter = rangeFilter(notesFilter,$scope.tranches);

         // qui peut etre un filtre ...(merci Damien ^^)
         var ville = $scope.cities;
         if(ville != undefined){
           var rangeFilter = _.filter(rangeFilter, function(use){
              return use.ville == ville;
           });
         }

         // MAJ nb users
         $scope.nbUsers = rangeFilter.length;

          return _.reduce(rangeFilter, function(memo, num){
            return memo + num.age;
         },0) / (rangeFilter.length === 0 ? 1 : rangeFilter.length);
       };

       $scope.removeUser = function(user){
             var index = $scope.users.indexOf(user);
             $scope.users.splice(index, 1);
       }

       $scope.add = function(){
           $scope.users.push({
              nom: $scope.nom,
              prenom: $scope.prenom,
              age: parseInt($scope.age),
              photo: $scope.photo,
              birthday: $scope.dob,
              noteBac: parseInt($scope.noteauBac),
              sexe: $scope.sexe,
              ville: $scope.ville,
              biographie: $scope.biographie
           });

           $scope.nom =  $scope.sexe = $scope.ville =  $scope.biographie = $scope.prenom = $scope.age = $scope.photo = $scope.dob = $scope.noteauBac = "";



       }


}]);
