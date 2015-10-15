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

  //Collection of digital cameras
  $scope.digitalCameras = [
    {
      photo: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Nikon_D3100.jpg',
      brand: 'Nikon',
      price: 800,
      review: 'This camera is awesome!',
      rate: 3
    },
    {
      photo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Canon_EOS_5D_Mark_II_with_50mm_1.4_edit1.jpg',
      brand: 'Canon',
      price: 950,
      review: 'This camera is pretty sweet!',
      rate: 5
    },
    {
      photo: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Olympus_E-620.jpg',
      brand: 'Olympus',
      price: 700,
      review: 'This camera has its own mountain!',
      rate: 2
    }
  ];

  $scope.filmCameras = [
    {
      photo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Nikon_FG-20_20070114.jpg',
      brand: 'Nikon',
      price: 800,
      review: 'This camera takes great shots',
      rate: 5
    },
    {
      photo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Canon_AE-1_with_50mm_f1.8_S.C._II.jpg',
      brand: 'Canon',
      price: 950,
      review: 'This camera eats the film in a good way',
      rate: 4
    },
    {
      photo: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Olympus_OM10_with_winder_and_manual_adapter.jpg',
      brand: 'Olympus',
      price: 700,
      review: 'This camera is vintage!',
      rate: 4
    }
  ];

  $scope.accessories = [
    {
      photo: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Kodak_Tri-X_film.jpg',
      brand: 'Kodak',
      price: 10,
      review: 'This film is perfect for action shots!',
      rate: 1
    },
    {
      photo: 'http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/13/2013/04/canon_nikon_full_frame_lenses.jpg',
      brand: 'Nikon',
      price: 250,
      review: 'This camera bag carries everything!',
      rate: 3
    },
    {
      photo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Flash_-_Speedlight_-_SLR_Flash_-_Studio_picture_2011.jpg',
      brand: 'Canon',
      price: 400,
      review: 'This flash will blind you',
      rate: 4
    }
  ];

  // Start with the review hidden
  $scope.isCollapsed = true;
})
