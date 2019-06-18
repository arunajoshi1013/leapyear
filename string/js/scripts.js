


$(document).ready(function() {
  $("form#vowelsCount").submit(function(event) {
    event.preventDefault();
  var vowelsCount = 0;
  var input = $("#number").val();
  //var string = str.toString();

  //loop through the string
  for (var i = 0; i <= input.length - 1; i++) {
  //if a vowel, add to vowel count
    if (input.charAt(i) == "a" || input.charAt(i) == "e" || input.charAt(i) == "i" || input.charAt(i) == "o" || input.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  console.log(vowelsCount);
   $("#result").text("Vowles count is"+" "+vowelsCount);
  //console.log($('#result').html())


    });
  });
