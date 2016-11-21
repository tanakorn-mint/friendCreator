app.controller('editController', ['$scope','friendsFactory','$routeParams','$location', function($scope, friendsFactory, $routeParams, $location) {
  /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial, so we didn't set a variable so we could reuse it, rather, just ran the friendsFactory method directly.
  */
// friendsFactory.index(function(returnedData){
//   $scope.friends = returnedData;
//   console.log($scope.friends);
// });
  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method with ng-submit or ng-click (from the form in the previous assignment).  Want to see all of the friends when we get back including the updated on??  See Index in the previous controller.
  */

$scope.editfriend = {};
$scope.editfriend = $routeParams;



friendsFactory.getFriend($scope.editfriend.id, function(returnedData) {
	$scope.editfriend = returnedData.the_one;
})

$scope.update = function(editfriend) {
	console.log("the value of edit friend is ", editfriend);
	friendsFactory.update(editfriend);
	$location.url('/main');
}


}]);