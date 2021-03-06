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
    if (search_value.length > 0) {
      $(".answers").attr("style", "display:block;");
      $("#ans-list li:first-of-type a").html(search_value);
    }
  });

  $(".answers").mouseover(function() {
        $(".answers").attr("style", "display:block;");
      })
      .mouseout(function() {
            $(".answers").attr("style", "display:none;");
          });

  var resizeMe = function() {
    if($(window).width() < 625) {
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
