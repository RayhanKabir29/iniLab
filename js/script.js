$(document).ready(function () {
  $(".content-2").hide();
  $(".content-3").hide();
  $(".content-4").hide();
  $(".tab-1").addClass("act");

  $(".tab-2").click(function () {
    $(".content-1").hide();
    $(".content-2").show();
    $(".content-3").hide();
    $(".content-4").hide();
    $(".tab-2").addClass("act");
    $(".tab-1").removeClass("act");
    $(".tab-3").removeClass("act");
    $(".tab-4").removeClass("act");
  });

  $(".tab-3").click(function () {
    $(".content-1").hide();
    $(".content-2").hide();
    $(".content-3").show();
    $(".content-4").hide();
    $(".tab-3").addClass("act");
    $(".tab-1").removeClass("act");
    $(".tab-2").removeClass("act");
    $(".tab-4").removeClass("act");
  });
  $(".tab-4").click(function () {
    $(".content-1").hide();
    $(".content-2").hide();
    $(".content-3").hide();
    $(".content-4").show();
    $(".tab-4").addClass("act");
    $(".tab-1").removeClass("act");
    $(".tab-2").removeClass("act");
    $(".tab-3").removeClass("act");
  });

  $(".tab-1").click(function () {
    $(".content-1").show();
    $(".content-2").hide();
    $(".content-3").hide();
    $(".content-4").hide();
    $(".tab-1").addClass("act");
    $(".tab-2").removeClass("act");
    $(".tab-3").removeClass("act");
    $(".tab-4").removeClass("act");
  });
});
