/*****************************************************************************/
/* Renter: Event Handlers */
/*****************************************************************************/
Template.Renter.events({
	'click #localBtn li a':function(e){
		var x=Router.current().params.query;
		var y=typeof this.value=="undefined"?"All":this.value;
		console.log(y);
		if (typeof x.date != "undefined") {
			Router.go('Renter',{},{query:"region="+y+"&createdAt="+x.date});
		}else
		Router.go('Renter',{},{query:"region="+y+"&createdAt=All"});

	},
	'click #dateBtn li a':function(e){
		var x=Router.current().params.query;
		var y=typeof this.value=="undefined"?"All":this.value;
		if (typeof x.location != "undefined") {
			Router.go('Renter',{},{query:"region="+x.location+"&date="+y});
		}else
		Router.go('Renter',{},{query:"region=All"+"&date="+y});
	}
});

/*****************************************************************************/
/* Renter: Helpers */
/*****************************************************************************/
Template.Renter.helpers({
	data:function(){
		var query ={state:'ACTIVE'};
		var q=Router.current().params.query;
		if (typeof q.location !="undefined" && typeof q.date != "undefined") {
			if (q.location!="All") 
				{query.push({region:q.location})};
			if (q.date!="All")
			 {query.push({timezone:q.date})};				
			return 	Place.find(query, {sort: {userId:1,region:1,address:1,activeTime:1,rendFee:1}});
		}else
		return Place.find({state:'ACTIVE'}, {sort: {userId:1,region:1,address:1,activeTime:1,rendFee:1}});
	},
	userName:function(){
		var name=Meteor.users.findOne({_id:this.userId}).profile.name;
		return name;
	},
	locations:function(){
		var Locations=[
		{label:"Mong Kok",value:"MK"},
		{label:"Tin Shui Wai",value:"TSW"},
		{label:"Hung Hom",value:"HH"},
		];
		return Locations;
	}
});

Autoform.addHooks('insertRequestForm', {
	after:{
		placeId: function(error, result){

		}
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
