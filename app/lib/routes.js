Router.configure({
	layoutTemplate: 'MasterLayout',
	loadingTemplate: 'Loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'Home',

});

Router.route('Renter', {
	path:'/renter'

});
Router.route('BossAddPlace', {
	path:'boss/BossAddPlace',
	// onBeforeAction: function () {
 //      AccountsEntry.signInRequired(this);
 //      this.next();
 //    }

});
