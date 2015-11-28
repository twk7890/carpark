/*****************************************************************************/
/* Renter: Event Handlers */
/*****************************************************************************/
Template.Renter.events({
	'click .bs-docs-popover':function(e,t){
		$('.btn').popover({title:'popoverDetail'})
	}
});

/*****************************************************************************/
/* Renter: Helpers */
/*****************************************************************************/
Template.Renter.helpers({
	data:function(){
		var x=Place.find({state:'ACTIVE'},{userId:1,region:1,address:1,timezone:1,rendFee:1});
		return x;
	},
	userName:function(){
		var name=Meteor.users.findOne({_id:this.userId}).profile.name;
		return name;
	},
	locations:function(){
		var Locations=[
		{label:"Monko",value:"MONKO"},
		{label:"Tin Shui Wai",value:"TSW"},
		{label:"Hung Hom",value:"HH"},
		];
		return Locations;
	}
});

/***************************************************************************/
/* Renter: Lifecycle Hooks */
/*****************************************************************************/
Template.Renter.onCreated(function () {
});

Template.Renter.onRendered(function () {
});

Template.Renter.onDestroyed(function () {
});
