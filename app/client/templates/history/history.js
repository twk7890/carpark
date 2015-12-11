Template.Historylist.helpers({
	'place': function(){
		var currentUser = Meteor.userId() ;
		var status = Session.get('status');
		if(status !="All"){
			return Place.find({userId: currentUser, state: status}, {sort: {createdAt: 1} });
		}else{
			return Place.find({userId: currentUser}, {sort: {createdAt: 1} });
		}
	},
	'list': function(){
		var list=[
		{label:"active",value:"ACTIVE"},
		{label:"suspend",value:"SUSPEND"},
		{label:"requested",value:"REQUESTED"}
		];
		return list;
	},
	'list2': function(){
		var list2=[
		{label:"active",value:"ACTIVE"},
		{label:"suspend",value:"SUSPEND"}
		];
		return list2;
	},
	'request': function(){
		var PlaceId = Session.get('Place');
		return UserRequest.find({placeId: PlaceId, state: "REQUESTED"}, {sort: {createdAt: 1}});
	},
	'userName':function(){
		var name=Meteor.users.findOne({_id:this.userId}).profile.name;
		return name;
	}
});

Template.Historylist.events({
	'click #stateBtn li a': function(event){
		var currentState=typeof this.value=="undefined"?"All":this.value;
		Session.set('status', currentState);
	},
	'click #stateUP': function(event){
		var PlaceId = this._id;
		Session.set('Place', PlaceId);
	},
	'click #reId': function(event){
		var PlaceId = this._id;
		Session.set('Place', PlaceId);
	},
	'click #stateUP ul li a': function(event){
		var UPState=typeof this.value=="undefined"?"All":this.value;
		var PlaceId = Session.get('Place');
		Place.update({ _id: PlaceId }, {$set: { state: UPState }});
	},
	'click #accept': function(event){
		var requestId = this._id;
		UserRequest.update({_id: requestId}, {state: "ACCEPT"});
	},
	'click #decline': function(event){
		var requestId = this._id;
		UserRequest.update({_id: requestId}, {state: "DECLINE"});
	}
});

Template.Historylist.onCreated(function () {
	var currentState = "All";
	Session.set('status', currentState);
});