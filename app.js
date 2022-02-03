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
  // keypress: function() {
  //   console.log('keypress triggered')
  // }
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

// $("body").on({
//   // keydown: function (e) {
//   //   if (e.originalEvent.key === String.fromCharCode(event.which)); highlightKey();
//   //   console.log(String.fromCharCode(event.which));
//   // },
//   keypress: function (e) {
//     if (e.originalEvent.key === String.fromCharCode(event.which)); highlightKey();
//     console.log(String.fromCharCode(event.which));
//   },
//   keyup: function (e) {
//     if (e.originalEvent.key === String.fromCharCode(event.which)); unhighlightKey();
//     console.log(event.which);
//   }

// });

// function highlightKey() {
//   // need shift key pressed
//   // $("#keyboard-upper-container").show();
//   // $("#keyboard-lower-container").hide();
//   // console.log(document.getElementById(event.which));
//   $(`#${e.keyCode}`).css("background-color", "yellow");
// }

// function unhighlightKey() {
//   // need shift key released
//   // $("#keyboard-upper-container").hide();
//   // $("#keyboard-lower-container").show();
//   $(`#${event.which}`).css("background-color", "#f5f5f5");
// }
