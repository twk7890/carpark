Place = new Mongo.Collection("place");


Place.attachSchema(new SimpleSchema({
    userId: {
        type: String,
        autoform:{
          omit:true
        },
        autoValue(){
          return Meteor.userId() || "";
        }
    },
    region: {
        type: String
    },
    address: {
        type: String
    },
    timezone: {
        type: Date
    },
    rendFee:{
      type:Number
    },
    state: {
      type: String,
      autoform: {
            type: "select",
            options: function () {
              return [
                {label: "active", value: "ACTIVE"},
                {label: "suspend", value: "SUSPEND"}
              ];
            }
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
