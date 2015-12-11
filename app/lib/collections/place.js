Place = new Mongo.Collection("place");

var Locations=[
{label:"car park 1",value:"p1"},
{label:"car park 2",value:"p2"},
{label:"car park 3",value:"p3"},
{label:"car park 4",value:"p4"}
];

var time=[
{label:"01:00",value:"01:00"},
{label:"02:00",value:"02:00"},
{label:"03:00",value:"03:00"},
{label:"04:00",value:"04:00"},
{label:"05:00",value:"05:00"},
{label:"06:00",value:"06:00"},
{label:"07:00",value:"07:00"},
{label:"08:00",value:"08:00"},
{label:"09:00",value:"09:00"},
{label:"10:00",value:"10:00"},
{label:"11:00",value:"11:00"},
{label:"12:00",value:"12:00"},
{label:"13:00",value:"13:00"},
{label:"14:00",value:"14:00"},
{label:"15:00",value:"15:00"},
{label:"16:00",value:"16:00"},
{label:"17:00",value:"17:00"},
{label:"18:00",value:"18:00"},
{label:"19:00",value:"19:00"},
{label:"20:00",value:"20:00"},
{label:"21:00",value:"21:00"},
{label:"22:00",value:"22:00"},
{label:"23:00",value:"23:00"},
{label:"24:00",value:"24:00"},
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
      options:Locations
    }
  },
  address: {
    type: String
  },
  activeTime: {
    type: String,
    autoform:{
      options:time
    }
  },
  rendFee:{
    type: Number
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

// Place.insert({userId: "SDwfcdffs", region: "Mong Kok", address: "Address1", activeTime: "12:00", rendFee: 30, state: "ACTIVE", createdAt: new Date});