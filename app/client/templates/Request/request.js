Template.request.helpers({
	'request': function(){
		return UserRequest.find({state: "REQUESTED"}, {sort: {createdAt: 1}});
	},
	'address': function(){
		var address = Place.findOne({_id: this.placeId}).address;
		return address;
	},
	'userName':function(){
		var name=Meteor.users.findOne({_id:this.userId}).profile.name;
		return name;
	}
});