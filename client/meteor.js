if (Meteor.isClient) {
  Template.map.onRendered(function(){
 initialize();
})
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
