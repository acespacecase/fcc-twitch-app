
var twitchUsers = ["freecodecamp", "UnicornHole", "wolfpainter", "Monstercat", "FIRSTinspires3", "backspacenomads", "Drawwithjazza", "test_channel", "BobRoss", "Lost_In_House", "littlesiha", "Food", "ChaseSings", "CheyenneO"];

var twitchUrl = "https://wind-bow.gomix.me/twitch-api/streams/";

twitchUsers.forEach(function(user) {
  $.getJSON(twitchUrl + user + '?callback=?', function(data) {
    if (data.stream === null) { //offline
      $('#offline').append('<div class="offline-panel col-lg-4"><div class="card"><div class="card-block"><h3>' + user
                            + '</h3></div><div class="card-footer"><a href="' + data._links.self
                            + '" target="_blank">View Channel</a></div></div></div>');
    } else { //online
      $('#online').append('<div class="col-lg-4 online-panel"><div class="card"><img class="img-fluid card-img-top" src="'
                           + data.stream.preview.large + '"><div class="card-block"><h3>' + user
                           + '</h3><span class="status">Online Now</span><p><strong>' + data.stream.viewers
                           + '</strong> viewers</p></div><div class="card-footer"><a href="' + data.stream._links.self
                           + '">View Stream</a></div></div></div>');
    };
  });
});
