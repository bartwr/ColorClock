var beeminder = {

  //+getBeeminderData :: ? -> JSON data
  getBeeminderData: function(){
    return $.getJSON('https://www.example.com/rest/beeminder');
  },

  //+showBeeminderData :: JSON data -> ?
  showBeeminderData: function(data){
    $('.stats').append('<img src="'+data.graph_url+ '" alt="beeminder graph" />');
  }

}

beeminder.getBeeminderData().done(beeminder.showBeeminderData);
