Router.configure({
	layoutTemplate: 'MasterLayout',
	loadingTemplate: 'Loading',
	notFoundTemplate: 'notFound'
});


Router.route('Renter', {
	path:'/'

});
Router.route('BossAddPlace', {
	path:'boss/BossAddPlace'
	//onBeforeAction: function () {
	//	
	//	this.next();
	//}

});

Router.route('Historylist', {
	path:'/historylist'
});

Router.route('ParkStatus', {
	path:'/parkStatus'
});

Router.route('Request', {
	path:'/request'
});