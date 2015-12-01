/*****************************************************************************/
/* Renter: Event Handlers */
/*****************************************************************************/
Template.Renter.events({
	'click #localBtn li a':function(e){
		var x=Router.current().params.query;
		var y=typeof this.value=="undefined"?"All":this.value;
		if (typeof x.date != "undefined") {
			Router.go('Renter',{},{query:"location="+y+"&date="+x.date});
		}else
		Router.go('Renter',{},{query:"location="+y+"&date=All"});
	},
	'click #dateBtn li a':function(e){
		var x=Router.current().params.query;
		var y=typeof this.value=="undefined"?"All":this.value;
		if (typeof x.location != "undefined") {
			Router.go('Renter',{},{query:"location="+x.location+"&date="+y});
		}else
		Router.go('Renter',{},{query:"location=All"+"&date="+y});
	},
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
				{query.region=q.location;};
			if (q.date!="All")
			 {query.timezone=q.date;};				
			return 	Place.find(query,{userId:1,region:1,address:1,timezone:1,rendFee:1});
		}else
		return Place.find({state:'ACTIVE'},{timezone:0,userId:1,region:1,address:1,rendFee:1});
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
