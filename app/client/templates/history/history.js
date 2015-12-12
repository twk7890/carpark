Template.Historylist.helpers({
	'history': function(){
		var hsUsr = Meteor.userId() ;
		return UserRequest.find({userId: hsUsr}, {sort: {createdAt: -1}});
	},
	'address': function(){
		var address = Place.findOne({_id: this.placeId}).address;
		return address;
	}
});

