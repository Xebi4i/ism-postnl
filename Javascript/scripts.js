var main = function (){

  $("input[name='search-input']").click(function() {
    this.value = '';
  });

  $("input[name='search-input']").blur(function() {
    if (this.value == "") {
      this.value = "Vul hier uw zoekterm in";
    }
  });

  $("input[name='search-input']").keydown(function() {
    var search_value = $("input[name='search-input']").val();
    $("#ans-list li:first-of-type a").html(search_value);
    $(".answers").attr("style", "display:block;");
  });

  $(".search-wrapper").focusout(function() {
    if ($(".answers").is(":focus")) {
      $(".answers").attr("style", "display:block;");
    }
    else {
      $(".answers").attr("style", "display:none;");
    }
  });

  var resizeMe = function() {
    if($(window).width() < 640) {
      $("#search-text").text("");
    }
    else {
      $("#search-text").text("zoeken");
    }
  };

  resizeMe();

  $(window).resize(function() {
    resizeMe();
  });

};

$(document).ready(main);
