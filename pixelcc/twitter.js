$(document).ready(function () {		
	
	    // twitter id
    var user = 'pixelcheesecake';
          
    // count
    $.getJSON('http://api.twitter.com/1/statuses/user_timeline.json?screen_name=' + user + '&count=1&include_rts=0&callback=?', function(data)      {
          
        // result
        var tweet = "";
for (i = 0; i < data.length; i++) {
tweet += data[i].text + "</br></br>";
}
      
        // links
        tweet = tweet.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, function(url) {
            return '<a target="_blank" href="'+url+'">'+url+'</a>';
        }).replace(/B@([_a-z0-9]+)/ig, function(reply) {
            return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
        });
      
        // output
        $("#tweet").html(tweet);
    });
});
