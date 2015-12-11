ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      appId: "942023359215650",
      loginStyle: "popup",
      secret: "8ec167bf33abb29a81584bb8e84571e7"
    }
  }
);

Meteor.startup(function () {
  
});
