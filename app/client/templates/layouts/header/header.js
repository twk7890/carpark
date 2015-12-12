/*****************************************************************************/
/* Header: Event Handlers */
/*****************************************************************************/
Template.Header.events({
	'click .clickForHide'(){
		$('#bs-example-navbar-collapse-1').collapse('hide')
	},
	'click .login'(){
		Meteor.loginWithFacebook(null, function(err){
           if (err) {
               throw new Meteor.Error("Facebook login failed");
           }else{
             Router.go('Home');
           }

    });
	},
	'click .logout'(){
		Accounts.logout();
		Router.go("Renter");
	},
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
	roleName(){
		switch (Session.get('Role')) {
			case "R":
				return "Renter"
				break;
			case "B":
				return "Boss"
				break;
			default:
				return "Und"
		}
	},
	userName(){
		return Meteor.user().profile.name;
	},
	renterRole:function(){
		return Session.get('Role') ==="R";
		// if (Session.get('Role')== undefined) {
		// 	return true;
		// }else
		// if (Session.get('Role')=="R") {
		// 	return true;
		// }else
		// if (Session.get('Role')=="B") {
		// 	return false;
		// };
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
