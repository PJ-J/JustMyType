$(function () {
  // Handler for .ready() called.

  //hide uppercase keyboard
  $("#keyboard-upper-container").hide();
});

// show/hide diff keyboards by pressing shift
$("body").on({
  keydown: function (e) {
    if (e.originalEvent.key === "Shift") showUpper();
  },
  keyup: function (e) {
    if (e.originalEvent.key === "Shift") hideUpper();
  },
});

function showUpper() {
  // need shift key pressed
  $("#keyboard-upper-container").show();
  $("#keyboard-lower-container").hide();
}

function hideUpper() {
  // need shift key released
  $("#keyboard-upper-container").hide();
  $("#keyboard-lower-container").show();
}

$("#reset").hide();

//timer stuff

let seconds = 0;
let el = document.getElementById("seconds-counter");
setInterval(incrementSeconds, 1000);
$("#seconds-counter").hide();

function incrementSeconds() {
  seconds += 1;
  el.innerText = "You have been playing for " + seconds + " seconds.";
}

// change bg color of key
$(document).keypress((e) => {
  $(`#${e.keyCode}`).css("backgroundColor", "yellow");

  {
    setTimeout(function () {
      $(`#${e.keyCode}`).css("background-color", "#f5f5f5");
    }, 300);
  }
});

let sentences = [
  "ten ate neite ate nee enet ite ate inet ent eate ",
  "Too ato too nOt enot one totA not anot tOO aNot ",
  "oat itain oat tain nate eate tea anne inant nean ",
  "itant eate anot eat nato inate eat anot tain eat ",
  "nee ene ate ite tent tiet ent ine ene ete ene ate ",
];

let i = 0;
let j = 0;

$("#sentence").html(sentences[i]);
$("#target-letter").html(sentences[i][j]);

let mistakes = [];

$(document).keypress((e) => {
  if (
    String.fromCharCode(
      85 <= e.keyCode && e.keyCode <= 95 ? e.keyCode - 32 : e.keyCode
    ) === sentences[i][j]
  ) {
    $("#feedback").append('<span class="glyphicon glyphicon-ok"></span>');
  } else {
    $("#feedback").append('<span class="glyphicon glyphicon-remove"></span>');
    mistakes.push("I");
  }
  j++;
  $("#target-letter").html(sentences[i][j]);
  $("#yellow-block").css("left", `${(j + 2) * 17}px`);

  const minutes = seconds / 60;
  // const remainingSeconds = seconds - minutes * 60;

  let wpm = 54 / minutes - 2 * mistakes.length;

  if (sentences[i][j] == undefined) {
    i++;
    if (sentences[i] == undefined) {
      let end = document.getElementById("seconds-end");
      $("#seconds-counter").html("");
      end.innerText =
        "You completed the game in " +
        seconds +
        " seconds. Your words per minute is " +
        wpm.toFixed(2) +
        ".";
      $("#reset").show();

      $("#reset").on("click", function () {
        seconds = 0;
        i = 0;
        j = 0;
        $("#sentence").html(sentences[i]);
        $("#target-letter").html(sentences[i][j]);
        $("#yellow-block").css("left", `${(j + 2) * 17}px`);
        $("#feedback").html("");
        end.innerText = "";
        mistakes = [];
        $("#reset").hide();
      });
    }
 
    j = 0;
    $("#sentence").html(sentences[i]);
    $("#target-letter").html(sentences[i][j]);
    $("#yellow-block").css("left", `${(j + 2) * 17}px`);
    $("#feedback").html("");
  }
});
