var mongoose = require('mongoose');
var friends = require('./../controllers/friends.js')

console.log('routes');
console.log(friends);
// WE NEED TO ADD a few lines of code up here!
// What is this 'friends' object we are referencing below??
module.exports = function(app){
  app.get('/friends', friends.index);
  app.get('/friends/:id', friends.show);
  app.post('/friends', friends.create);
  app.post('/friends/update/:id',friends.update);
  app.delete('/friends/:id', friends.delete);
}