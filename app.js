$(function () {
  // Handler for .ready() called.

  //hide uppercase keyboard
$("#keyboard-upper-container").hide();

// show/hide diff keyboards by pressing shift
$("body").on({
  keydown: function(e) {
    if (e.originalEvent.key === "Shift")
      showUpper();
  },
  keyup: function(e) {
    if (e.originalEvent.key === "Shift")
      hideUpper();
  },
  keypress: function() {
    console.log('keypress triggered')
  }
})

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

});