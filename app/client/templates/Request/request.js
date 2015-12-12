Template.request.helpers({
	'request': function(){
		return UserRequest.find({state: "REQUESTED"}, {sort: {placeId: 1, createdAt: -1}});
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

Template.request.events({
	'click #accept': function(event){
		var requestId = this._id;
		console.log(requestId);
		UserRequest.update({_id: requestId}, {$set: {state: "ACCEPT"}});
	},
	'click #decline': function(event){
		var requestId = this._id;
		UserRequest.update({_id: requestId}, {$set: {state: "DECLINE"}});
	}
});