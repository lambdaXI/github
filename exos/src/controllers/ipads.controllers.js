app.controller('IpadsCtrl', ['$scope', function($scope){


  var Ipads = $scope.Ipads = [
     {titre : "Apple iPad Air",
     image : "http://media.ldlc.com/ld/products/00/01/48/34/LD0001483487_2.jpg",
     description : "Invraisemblablement fin et léger mais aussi incroyablement puissant grâce à sa nouvelle puce A7 et une connectivité sans fil avancée, le iPad Air d'Apple vous permet de faire un nombre de choses inimaginable, dans un nombre d'endroits inconcevable.",
     prix : 369.95,
     couleur : "Gris Sidéral",
     quantite : "50",
     reduction : 0},
     {titre : "Apple iPad mini 2",
     image : "http://media.ldlc.com/ld/products/00/01/46/66/LD0001466695_2_0001468943.jpg",
     description : "L'iPad mini voit grand, très grand ! Ce petit prodige à l'apparence résolument mini a été pensé comme un concentré et non une réduction de son grand frère, l'iPad, pour vous offrir ce qu'il y a de meilleur au quotidien.",
     prix : 297.95,
     couleur : "Argent",
     quantite : "10",
     reduction : 0},
     {titre : "Apple iPad mini 4",
     image : "http://media.ldlc.com/ld/products/00/03/25/69/LD0003256909_2_0003256955_0003257150.jpg",
     description : "Le nouvel iPad mini 4 en a sous le capot et n'a pas peur de le montrer. Plus fin et plus léger qu'avant, il vous offre néanmoins toute la puissance dont vous avez besoin pour aller au bout de vos idées. L'iPad mini 4 intègre toutes les qualités de l'iPad dans un gabarit encore plus réduit !",
     prix : 619.95,
     couleur : "Gris Sidéral",
     quantite : "50",
     reduction : 0},
     {titre : "Apple iPad mini 3",
     image : "http://media.ldlc.com/ld/products/00/01/72/71/LD0001727169_2_0001727183_0001727204.jpg",
     description : "L'iPad mini 3 4G-LTE a été pensé pour être petit. Rapide. Ultra-performant. Il est doté d'un spectaculaire écran Retina de 7,9 pouces, d'une puce A7 extraordinairement puissante, de technologies sans fil avancées et du capteur Touch ID. Il reste pourtant fin et léger.",
     prix : 659.95,
     couleur : "Argent",
     quantite : "50",
     reduction : 0},
     {titre : "Apple iPad Pro",
     image : "http://media.ldlc.com/ld/products/00/03/59/78/LD0003597855_2.jpg",
     description : "Performant et mobile, le nouvel Apple iPad Pro 12.9 pouces est parfaitement adapté au monde d'aujourd'hui. Avec lui, même les tâches les plus complexes deviennent simples et naturelles. Avec ses technologies avancées et son superbe écran Retina, l'iPad Pro offre un confort d'utilisation maximal !",
     prix : 1399.96,
     couleur : "Gris Sidéral",
     quantite : "50",
     reduction : 0},
     {titre : "Apple iPad Pro 9.7",
     image : "http://media.ldlc.com/ld/products/00/03/59/67/LD0003596753_2.jpg",
     description : "A la fois mobile et performant, le nouvel Apple iPad Pro 9.7 pouces est parfaitement adapté au monde d'aujourd'hui. Avec lui, même les tâches les plus complexes deviennent simples et naturelles. Avec ses technologies avancées et son superbe écran Retina, il offre un confort d'utilisation maximal !",
     prix : 689.95,
     couleur : "Rose",
     quantite : "50",
     reduction : 0},
  ]

  function init(){
    for (var i = 0; i < 2; i++) {
       Ipads[i].reduction = 10;
       Ipads[i].prix = (Ipads[i].prix - Ipads[i].prix*Ipads[i].reduction/100);
    }
  }

  init();

  $scope.$watch('Ipads', watcher, true);

  function watcher(){
    $scope.prixMoyen = _.reduce(Ipads, function(memo, num){ console.log(num.prix); return memo + num.prix }, 0) / Ipads.length;
    // console.log($scope.prixMoyen);
    $scope.objPrixMin = _.min(Ipads, _.property('prix'));
    $scope.objPrixMax = _.max(Ipads, _.property('prix'));
    $scope.nbreReduc = _.reject(Ipads, function(obj){return obj.reduction == 0; }).length;
  }


  $scope.removeIpad = function(Ipad){
     var index = $scope.Ipads.indexOf(Ipad);
     $scope.Ipads.splice(index, 1);
  }


  $scope.checked=[];
  $scope.checkedIndexs = function (Ipad) {
    console.log(Ipad);
   if ($scope.checked.indexOf(Ipad) === -1) {
       $scope.checked.push(Ipad);
   }
   else {
       $scope.checked.splice($scope.checked.indexOf(Ipad), 1);
   }
  }

  $scope.remove=function(){
       angular.forEach($scope.checked, function (value) {
           $scope.Ipads.splice($scope.Ipads.indexOf(value), 1);
       });
       $scope.checked = [];
  };

}]);
