Router.configure({
   layout: 'layout',
   notFoundTemplate: 'notFound',
   loadingTemplate: 'loading',
   renderTemplates: {
      /* Any templates to always render can be specified here */
//      'home': {to: 'homeYield'}

   }
});

Router.map(function() {
   this.route('home', {
      path: '/',
      template: 'layout',
      renderTemplates: {
         'home': {to: 'homeYield'}
      }
   });
   this.route('room', {
      path: '/rooms/:_id',
      data: function() {
         return Rooms.findOne({"_id": this.params._id});
      },
      template: 'layout', // use the 'layout' template for this route
      renderTemplates: {
         'room': {to: 'roomYield'} // render the 'room' template to the 'roomYield' yield.
      }
  });
});

if (Meteor.isClient) {
   Meteor.startup(function() {
      // code to run on client when dom is ready
   });


   Template.rooms.helpers({
      rooms: function() {
         return Rooms.find();
      }
   });

   Template.room.helpers({
      room: function() {
         return Rooms.findOne(Session.get('currentRoomId'));
      }
   });

   Template.rooms.events({
   });
}

if (Meteor.isServer) {
   Meteor.startup(function() {
      // code to run on server at startup
   });
}
