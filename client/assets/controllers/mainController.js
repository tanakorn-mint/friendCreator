app.controller('mainController', ['$scope','friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {
 /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial, so we didn't set a variable so we could reuse it, rather, just ran the friendsFactory method directly.
  */


	// friendsFactory.index(function(returnedData){
	//   $scope.friends = returnedData;
	//   console.log($scope.friends);
	// });

	this.friend = {};
	this.friend = $routeParams



friendsFactory.getFriend(this.friend.id, function(returnedData) {
	$scope.friend = returnedData.the_one;

})


}]);