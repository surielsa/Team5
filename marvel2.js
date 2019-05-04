

$("#submit").on("click", function(event){
  event.preventDefault()
  var search = $("#heroName").val().trim()
  
  $.ajax({
    method: "POST",
    url:"https://mighty-brook-95893.herokuapp.com/cors/marvel",
    data: {
      "url": "http://gateway.marvel.com/v1/public/characters?name=" + search + "&",
      "key": "efd92cf6cc5e7649916c4e73939e6281"
    }
  }).then(function(data) {
    console.log(data.data.results[0]);
    $("#name").text(data.data.results[0].name);
    $("#description").text(data.data.results[0].description);
    $("#comics").text(data.data.results[0].comics.items[0].name);
    $("#thumbNail").html($("<img src="+data.data.results[0].thumbnail.path+"."+ data.data.results[0].thumbnail.extension+" >"));
    //$("#stories").text(data.data.results[0].stories.items[0-10].name);  
  });
var apiKey = "AIzaSyB1iL9inW_ZS71ILZyjrpM2w9vSbX0fL2s";
 var queryURLBase = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" + apiKey;
 var Finalsearch = "https://www.youtube.com/embed/";
 var YouTubeSearch = "tutorial";

 var queryURL = queryURLBase + "&q=" + search + "+" + YouTubeSearch;

 console.log(queryURL);
 //object from youtube
 //function runQuery(queryURL) {
 // AJAX Function
 $.ajax({ url: queryURL, method: "GET" })
   .done(function (YoutubeData) {

     for (var i = 0; i < 5; i++) {
       console.log("results====================================================");


       $("#name1").append("<h3>" + YoutubeData.items[i].snippet.title + "</h3>");
       $("#description1").append("<iframe src=" + Finalsearch + YoutubeData.items[i].id.videoId + ">" + "</iframe>");

     }

   })
})