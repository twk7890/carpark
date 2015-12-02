UserRequest = new Mongo.Collection("userrequest");

var request = "REQUESTED";




UserRequest.attachSchema(new SimpleSchema({
 userId: {
  type: String,
  autoform:{
    omit:true
  },
  autoValue(){
    return Meteor.userId() ;
  }
},
placeId: {
  type: String,
  autoform:{
    omit:true
  }
},
phonenum: {
  type: Number,
  label: "Phone Number"
},
comment: {
  type: String,
  min: 0,
  max: 1000,
  autoform: {
   rows: 5
 }
},
state: {
  type: String,
  autoform:{
    omit:true
  },
  autoValue(){        		
    return request;
  }
},
createdAt:{
  type:Date,
  autoform:{
    omit:true
  },
  autoValue(){
    return this.isInsert? new Date(): this.val;
  }
}
}));