$(document).ready(function () {
  // $(".btn").fadeToggle(1000);
  $(".btn").fadeIn(1000);
  // $(".btn").slideUp(5000);
  // $(".btn").slideDown(5000);

  $(".btn").click(function () {
    // $(".btn").fadeToggle(1000);

    $("h3").html("Periodic Table has 7 rows And 18 Columns");
    $(".container-fluid").css("background-color", "white");
  });
});
