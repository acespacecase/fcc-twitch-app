
var twitchUsers = ["freecodecamp", "comster404", "UnicornHole", "wolfpainter", "Monstercat", "FIRSTinspires3", "backspacenomads", "Drawwithjazza", "test_channel", "BobRoss", "Lost_In_House", "littlesiha", "Food", "ChaseSings", "CheyenneO"];

var twitchUrl = "https://wind-bow.gomix.me/twitch-api/streams/";

twitchUsers.forEach(function(user) {
  $.getJSON(twitchUrl + user + '?callback=?', function(data) {
    console.log(data);
    if (data.stream === null) { //offline
      $('#offline').append('<div class="offline-panel col-lg-4"><div class="card"><div class="card-block"><h3>' + user
                            + '</h3></div><div class="card-footer"><a href="https://twitch.tv/' + user
                            + '" target="_blank">View Channel <i class="fa fa-external-link-square" aria-hidden="true"></i></a></div></div></div>');
    } else { //online
      $('#online').append('<div class="col-lg-4 online-panel"><div class="card"><a href="https://twitch.tv/'
                           + user + '" target="_blank"><img class="img-fluid card-img-top" src="'
                           + data.stream.preview.large + '"></a><div class="card-block"><h3>' + user
                           + '</h3><span class="status">Online Now</span><p><strong>' + data.stream.viewers
                           + '</strong> viewers</p></div><div class="card-footer"><a href="https://twitch.tv/' + user
                           + '" target="_blank">View Stream <i class="fa fa-external-link-square" aria-hidden="true"></i></a></div></div></div>');
    };
  });
});
