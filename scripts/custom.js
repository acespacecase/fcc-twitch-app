
var twitchUsers = ["freecodecamp", "UnicornHole", "wolfpainter"];
// "backspacenomads", "Drawwithjazza", "test_channel", "BobRoss", "Lost_In_House", "littlesiha", "Food", "ChaseSings", "CheyenneO"


var twitchUrl = "https://wind-bow.gomix.me/twitch-api/streams/";

for (var i = 0; i < twitchUsers.length; i++) {
  $.getJSON(twitchUrl + twitchUsers[i] + '?callback=?', function(data) {
    if (data.stream === null) { //offline
      // $('#offline').append('<div class="offline-panel col-3"><h3>' + twitchUsers[i] + '</h3><span class="status">Currently Offline</span></div>');
      console.log(data);
      console.log(twitchUsers[i]);
    } else { //online
      console.log(data.stream.preview.large);
      // $('#online').append('<div class="online-panel col-3"><div class="card"><img src="img-fluid card-img-top" src="'
      //                      + data.stream.preview.large + '"><div class="card-block"><h3>' + twitchUsers[i]
      //                      + '</h3><span class="status">Online Now</span><p><strong>' + data.stream.viewers
      //                      + '</strong> viewers</p></div><div class="card-footer"><a href="' + data.stream.links.self
      //                      + '">View Stream</a></div></div></div>');
    }
  })
}
