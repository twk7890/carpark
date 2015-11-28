Place = new Mongo.Collection("place");

var Locations=[
{label:"Monko",value:"MONKO"},
{label:"Tin Shui Wai",value:"TSW"},
{label:"Hung Hom",value:"HH"},
];

Place.attachSchema(new SimpleSchema({
    userId: {
        type: String,
        autoform:{
          omit:true
        },
        autoValue(){
          return Meteor.userId() ;
        }
    },
    region: {
        type: String,
        autoform:{
          options:Locations,
        }
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
