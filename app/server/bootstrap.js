ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      appId: "552369331578840",
      loginStyle: "popup",
      secret: "d5003f96684455f7348cbea663a2ede4"
    }
  }
);

Meteor.startup(function () {
  
});
