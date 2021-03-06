

angular.module('DayByDay', ['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.controller("LoginController",function($scope){
  $scope.username = "uName";
  $scope.password = "pWord";
})

.config(function($stateProvider, $urlRouterProvider) {
  // Learn more here: https://github.com/angular-ui/ui-router
  // Ionic uses AngularUI Router which uses the concept of states
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('page5', {
      url: '/login',
      templateUrl: 'page5.html'
    })
    
    .state('page6', {
      url: '/signup',
      templateUrl: 'page6.html'
    })
    
    .state('page8', {
      url: '/tabs',
      templateUrl: 'page8.html'
    })
    ;
  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/login');
  
});