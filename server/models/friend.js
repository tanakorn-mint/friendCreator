
console.log('friends model');
var mongoose = require('mongoose');

var FriendsSchema = new mongoose.Schema(
	{ name: {type: String, min_length: 5, require:true},
		dob: {type: Date, require: true}
}, {timestamps: {createdAt: 'created_at', updatedAt: 'update_at'} })

mongoose.model('friends', FriendsSchema);