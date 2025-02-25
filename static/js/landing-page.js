var app = angular.module('resumeApp', []);

app.controller('LandingPageController', function($scope) {
  $scope.user = {};
  $scope.errorMessage = '';
  $scope.isLoggedIn = false;
  $scope.role = '';

  $scope.login = function() {
    if ($scope.user.email && $scope.user.password && $scope.user.role) {
      if ($scope.user.role === 'recruiter') {
        $scope.isLoggedIn = true;
        $scope.role = 'recruiter';
      } else {
        $scope.errorMessage = 'Only recruiters can access the dashboard for now.';
      }
    } else {
      $scope.errorMessage = 'Please fill in all fields.';
    }
  };
});

app.controller('DashboardController', function($scope) {
  // Dummy stats data
  $scope.stats = {
    totalResumes: 120,
    shortlisted: 45,
    pending: 15
  };

  // Dummy recent uploads data
  $scope.recentUploads = [
    { name: 'John Doe', status: 'Shortlisted', date: '2025-02-20' },
    { name: 'Jane Smith', status: 'Pending', date: '2025-02-21' },
    { name: 'Mike Johnson', status: 'Rejected', date: '2025-02-19' }
  ];
});
