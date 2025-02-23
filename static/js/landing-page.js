var app = angular.module('resumeApp', []);

app.controller('LandingPageController', function($scope) {
  $scope.user = {};
  $scope.errorMessage = '';

  $scope.login = function() {
    if ($scope.user.email && $scope.user.password && $scope.user.role) {
      alert(`Logging in as ${$scope.user.role}...`);
      // Redirect to Dashboard (placeholder)
      window.location.href = '/dashboard';
    } else {
      $scope.errorMessage = 'Please fill in all fields.';
    }
  };
});
