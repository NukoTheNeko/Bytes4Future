const databank = require("./ytHistory.json");

const ytDatabank = databank.filter(x => true)

let artists = new Map();
for (let data of ytDatabank)
{
	if (!('subtitles' in data))
	{
		continue;
	}
    let artist = data.subtitles[0].name;
    artists.set(artist,(artists.get(artist)??0)+1)
}
let topArtists = new Map([...artists.entries()].sort((a, b) => b[1] - a[1]).slice(0,5));
console.log("Top artists:")
console.log(topArtists)

let videos = new Map();
for (let data of ytDatabank)
{
	if (!('title' in data))
	{
		continue;
	}
    let video = data.title;
    videos.set(video,(videos.get(video)??0)+1)
}
let topmusic = new Map([...videos.entries()].sort((a, b) => b[1] - a[1]).slice(1,6));
console.log("\nTop songs:")
console.log(topmusic)
//console.log(ytDatabank[0])












/*function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("YOUR_API_KEY");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.videos.list({
      "part": [
        "contentDetails"
      ],
      "id": [
        "VIDEO IDs"
      ],
      "fields": "items(contentDetails(duration))"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  });*/