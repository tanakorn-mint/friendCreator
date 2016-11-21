console.log('friends controller');

var mongoose = require('mongoose');
Friend = mongoose.model('friends');

// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below


function FriendsController(){
  this.index = function(req,res){
    //your code here
    Friend.find({} , function(err, friends) {
      if (err) {
        res.json({error : true});
      }
      else{
        res.json({friends: friends});
      }
    });
    // res.json({placeholder:'index'});
  };
  this.create = function(req,res){
    //your code here
    console.log(req.body);

    var newFriend = new Friend({ name: req.body.name , dob: req.body.dob});
      newFriend.save(function ( err, new_friend) {
        if (err) {
          console.log('oh no! cannnot add a new name!');
          console.log(err)
          res.json({error: err})
        }else{
          res.redirect('/friends')
        }
      })
  };
  this.update = function(req,res){
    //your code here
    console.log('from update', req.params.id)
    console.log('from update', req.body)
    Friend.findOne({ _id: req.params.id} , function(err, edit_friend) {
      if(err) {
        res.json({errors: err})
      }else{
        console.log('edit friend info',edit_friend);
        if (req.body) {
          edit_friend.name = req.body.name;
          //console.log('old ',edit_friend.name, 'new ', req.body.name);
          edit_friend.dob = req.body.dob;
          edit_friend.save(function (err) {
            if(err) {
              console.log('oh no! something went wrong!')
              res.redirect('/friends')
            }else{
              console.log("successfully edit friend")
              res.redirect('/friends')
            }
          })
        }else{
          console.log('oops nothing change - back to main page')
          res.redirect('/friends')
        }
      }
    })
  };
  this.delete = function(req,res){
    //your code 
    console.log('param id from friends.js is' , req.params.id);
    Friend.remove( { _id: req.params.id} , function(err) {
      if(err) {
        console.log(err)
        res.json({error: err})
      }else{
        return;
      }
    })

  };
  this.show = function(req,res){
    //your code here
    console.log(req.params.id, 'show was here')
    Friend.findOne({ _id : req.params.id } , function(err, the_one) {
      if(err) {
        console.log(err) 
        res.json({errors: err})
      }else{
        res.json({the_one: the_one});
      }
    })
   };
}

// exports 
module.exports = new FriendsController(); 