/*****************************************************************************/
/* Header: Event Handlers */
/*****************************************************************************/
Template.Header.events({
	'click #switchRole':function(e){
		if (Session.get('Role')== undefined) {
			Session.set('Role','B');
			Router.go('ParkStatus');
		}else
		if (Session.get('Role')=="R") {
			Session.set('Role','B');
			Router.go('ParkStatus');
		}else
		if (Session.get('Role')=="B") {
			Session.set('Role','R');
			Router.go('Renter');
		};


	},
});

/*****************************************************************************/
/* Header: Helpers */
/*****************************************************************************/
Template.Header.helpers({
	renterRole:function(){
		if (Session.get('Role')== undefined) {
			return true;
		}else
		if (Session.get('Role')=="R") {
			return true;
		}else
		if (Session.get('Role')=="B") {
			return false;
		};
	},
});

/*****************************************************************************/
/* Header: Lifecycle Hooks */
/*****************************************************************************/
Template.Header.onCreated(function () {
});

Template.Header.onRendered(function () {
});

Template.Header.onDestroyed(function () {
});
