var getHooks = {
	before:{
		insert:function(doc){
			doc.placeId = Session.get('PlaceSession');
			return doc;
		}
	}
};

AutoForm.hooks({
	'RequestForm': getHooks});
