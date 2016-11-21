console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http,$routeParams) {
  // constructor for our factory
  var friends = [];
  var friend = [];

  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
      console.log("newfriend from factory value is", newfriend);
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };


    this.update = function(updatefriend, callback){ // what parameters do we need?
      // Your code here
      console.log(' the update friend id is', updatefriend._id, updatefriend)
      // don't know why PUT and PATCH doesn't work
      $http.post('/friends/update/'+ updatefriend._id , updatefriend).then(function(return_data) {
        console.log('have i return yet?', return_data.data);
        if (typeof(callback) == 'function'){
          callback(return_data.data);
        }
      }) 
    };


    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      })
 //Note: this can be shortened to $http.get('/friends').then(callback); 
 //But only if you only want to run the callback from the controller.
     };


    this.delete = function(deletefriend){// what parameters do we need?
        // Your code here
      console.log("delete friend from factory is", deletefriend)
      $http.delete('/friends/'+ deletefriend ).then(function (return_data){})
    };


    this.show = function(showfriend){// what parameters do we need?
        // Your code here
      console.log(showfriend);
      $http.get('/friends/' + showfriend).then(function (returned_data) {
        console.log(returned_data);
        if (typeof(callback) == 'function') {
          friend = returned_data.data
          callback  (returned_data.data)
        }
      })
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };


    this.getFriend = function(friend, callback){
      $http.get('/friends/'+ friend).then(function(returned_data) {
        friend = returned_data.data
        callback(friend);
      })
    };
  }


  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);