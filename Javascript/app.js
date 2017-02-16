var colors = ["#009900", "#990000", "#ff0000", "#ff66a3", "#33ccff", "#ffb31a", "#e6ac00", "#b3b3ff", "#999999"];

var quotes = ["Don't cry because it's over, smile because it happened.", "Be yourself; everyone else is already taken.", "A room without books is like a body without a soul.", "A friend is someone who knows all about you and still loves you.", "You only live once, but if you do it right,    once is enough.", "Be the change that you wish to see in the world.", "In three words I can sum up everything I've learned about life: it goes on.", "No one can make you feel inferior without your consent.", "If you tell the truth, you don't have to remember anything."];
var b, a;
var authors = ["Dr. Seuss", "Oscar Wilde", "Marcus Tullius Cicero", "Elbert Hubbard", "Mae West", "Mahatma Gandhi", "Robert Frost", "Eleanor Roosevelt", "Mark Twain"];

$(document).ready(function() {
  a = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
  $("#quote-text").html(quotes[a]);
  $("#quote-author-text").html(authors[a]);
  $("html body").animate({
    backgroundColor: "#00cc44"
  });
  
  $("#button-right").on('click', function() {
  do {
    a = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
  }
  while (b == a);
  b = a;

  $("#quotes").fadeOut(function() {
    $("#quote-author-text").animate({
      color: colors[a],
    }, 1);

    $("#quote-text").html(quotes[a]);
    $(".quote").animate({
      color: colors[a],
    });
    $("#quote-author-text").html(authors[a]);
  });

  $("#quotes").fadeIn(1000);

  $("html body").animate({
    backgroundColor: colors[a],
  }, 1000);
  $(".button").animate({
    backgroundColor: colors[a],
  }, 1000);

});
  
});

