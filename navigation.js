/**
 * Created by DangThanhLinh on 04/03/2017.
 */

angular.module('starter.controllers').controller('NavigationController', ['$scope', '$window','$ionicModal',
  function ($scope, $window, $ionicModal) {


  $scope.login = function () {
    $scope.modal.show();


  }

    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope,
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.fbLogin = function () {

      facebookConnectPlugin.login(['email', 'public_profile'], function (succ) {
        window.alert(3)
      }, function (err) {
        window.alert(2)
      })


      // $window.FB.login(function(response) {
    //   if (response.authResponse) {
    //     console.log('Welcome!  Fetching your information.... ');
    //     FB.api('/me', function(response) {
    //       $scope.res = response
    //     });
    //   } else {
    //     console.log('User cancelled login or did not fully authorize.');
    //   }
    // });
  }
}])
