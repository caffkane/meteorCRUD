Meteor.startup(function() {
  //Facebook Oauth
  ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
        appId: "XXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  //Twitter Oauth
    ServiceConfiguration.configurations.update(
    { service: "twitter" },
    { $set: {
        appId: "16152429",
        secret: "L8edt7eEH15Z5Fa6NQRsC7ils9PgOZQ7M9jsXwUVrw4jD5VGYk"
      }
    },
    { upsert: true }
  );

  
  //Google Oauth
  ServiceConfiguration.configurations.update(
    { service: "google" },
    { $set: {
        clientId: "1018883713702-flios1jr1bgj5cheup3gm5qgq85107u4.apps.googleusercontent.com",
        client_email: "logan.kane1@gmail.com",
        secret: "cnKM6jAytV1Qa9zZ3LOBXTrq"
      }
    },
    { upsert: true }
  );

});
