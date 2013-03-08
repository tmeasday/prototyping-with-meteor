Meteor.Router.add({
  '/': 'home',
  '/rooms/:id': function(id) {
    Session.set('currentRoomId', id);
    return 'room'
  }
});

Template.rooms.helpers({
  rooms: function() { return Rooms.find(); }
});

Template.room.helpers({
  room: function() { return Rooms.findOne(Session.get('currentRoomId')); }
})
