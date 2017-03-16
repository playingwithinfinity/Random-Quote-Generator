$(document).ready(function() {

  var colors = ["orange", "teal", "purple", "maroon", "olive", "navy"];

  function getQuote() {
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(request) {
      $(".quote").html('"' + request.quoteText + '"');
      $("#author").html('Author: '+request.quoteAuthor);
    });
    var colorIndex = Math.floor(Math.random() * 6) + 1;
    $("body").css("background-color", colors[colorIndex]);
    $("#text").css("border-color", colors[colorIndex]);
  }

  //Button
  $("#clickMe").on("click", function() {
    getQuote();
    $("#clickMe").css("color", colors[colorIndex]);
  });

});
