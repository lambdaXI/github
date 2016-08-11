/*
 *  Controller MainCtrl et fera appel aux premier module d'Angular qui est
 *  la scope.
 *  La scope est un objet entre le HTML et le JS pour controller la DOM
 *  Un controller require à 99% la scope
 */
app.controller('MyApp', ['$scope', function($scope){


  // Je crée une variables title dans la scope
  $scope.title = "Liste des plus beaux Smartphones";

  /**
   * Créer un tableaux d'objet de smartphones dans la scope
   * permettant d'embarque titre, image, description, liens
   * Charger les données pour les afficher dans la vue
   */
  $scope.smartphones = [
    {
     titre : "Samsung Galaxy S7",
     prix: 800.75,
     image : "http://www.journaldugeek.com/files/2016/04/galaxy-s7.jpg",
     description: "Les Samsung Galaxy S7 et Galaxy S7 Edge2 sont les deux smartphones phares de la marque coréenne annoncés en février 2016 lors du Mobile World Congress.",
     lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S7"
    },
    {
     titre : "Samsung Galaxy S6",
     prix: 850.25,
     image : "http://cdn2.pcadvisor.co.uk/cmsdata/reviews/3600059/Galaxy_S6_2.jpg",
     description: "Les Samsung Galaxy S6  de la marque coréenne annoncés en février 2016 lors du Mobile World Congress.",
     lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S6"
    },
    {
     titre : "Samsung Galaxy S5",
     prix: 500.15,
     image : "http://phonesdata.com/files/models/Samsung-Galaxy-S5-CDMA-230.jpg",
     description: "Les Samsung Galaxy S5, S6 Edge, et S6 Edge+ sont les trois smartphones phares de la marque coréenne disponibles à la vente depuis le 10 avril 20154.",
     lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S5"
    },
    {
     titre : "Samsung Galaxy S4",
     prix: 750.80,
     image : "http://pcmarket.fr/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/i/p/iphonese3.jpg",
     description: "Le Samsung Galaxy S4 est un smartphone haut de gamme de Samsung Electronics. Il succède au Galaxy S III. Il a été annoncé à New York le 14 mars 2013 et est disponible depuis le 26 avril 2013 en Europe6. Il est distribué dans 155 pays1 auprès de 327 opérateurs téléphoniques6",
     lien: "https://fr.wikipedia.org/wiki/Samsung_Galaxy_S4"
    },
  ];


}]);
