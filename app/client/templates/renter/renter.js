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
		var x=[1,1,1,1,1,1,1,1,1,1];
		return x;
	}
});

/*****************************************************************************/
/* Renter: Lifecycle Hooks */
/*****************************************************************************/
Template.Renter.onCreated(function () {
});

Template.Renter.onRendered(function () {
});

Template.Renter.onDestroyed(function () {
});
