'use strict';

angular.module('MyBootstrApp') // declare which module this controller should attach to

.controller('MainCtrl', function($scope){ // create our Main Controller
  // Collection of slides for client photos Carousel
  $scope.slides = [
    {
      image: 'https://images.unsplash.com/photo-1437941792454-bacef7a7f736?q=80&fm=jpg&s=9d54a5c69d3ae8ba1af0554649c24aa8',
      text: 'An Awesome Shot from Johnny in Oregon'
    },
    {
      image: 'https://images.unsplash.com/photo-1437075130536-230e17c888b5?q=80&fm=jpg&s=9b73917f45dd1bed866904833e297478',
      text: 'A Bully from Brooklyn'
    },
    {
      image: 'https://images.unsplash.com/photo-1433959352364-9314c5b6eb0b?q=80&fm=jpg&s=e3bfea02f099f5b8a177fa03f01fb46e',
      text: 'A nice day to kayak from Michelle in Seattle'
    }
  ];
})
