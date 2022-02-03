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
  "ten ate neite ate nee enet ite ate inet ent eate",
  "Too ato too nOt enot one totA not anot tOO aNot",
  "oat itain oat tain nate eate tea anne inant nean",
  "itant eate anot eat nato inate eat anot tain eat",
  "nee ene ate ite tent tiet ent ine ene ete ene ate",
];

let i = 0;
let j = 0;

$("#sentence").html(sentences[i]);
$("#target-letter").html(sentences[i][j]);

$(document).keypress((e) => {
  console.log(e.which);
  console.log(e.keyCode);
  console.log(
    String.fromCharCode(
      80 <= e.keyCode && e.keyCode <= 95 ? e.keyCode - 32 : e.keyCode
    )
  );
  console.log(sentences[i][j]);
  

  if (
    String.fromCharCode(
      80 <= e.keyCode && e.keyCode <= 95 ? e.keyCode - 32 : e.keyCode
    ) === sentences[i][j]
  ) {
    console.log("yes");
  } else {
    console.log("no");
  }
  j++;
  $("#target-letter").html(sentences[i][j]);
  $("#yellow-block").css("left", `${(j+2)*17}px`);
  console.log(sentences[i][j]);

  if (sentences[i][j] == undefined) {
    i++;
    j = 0;
    $("#sentence").html(sentences[i]);
    $("#target-letter").html(sentences[i][j]);
    $("#yellow-block").css("left", `${(j+2)*17}px`);
    console.log("new sentence");
  }
});
