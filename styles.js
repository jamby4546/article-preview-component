

const template = document.getElementById('template');

tippy('#myButton',{
        content: template.innerText,
    		position:'top',
    		animation:'perspective',
            interactive:'true'
    	});


const mediaQuery = window.matchMedia('(max-width: 840px)');

var win = mediaQuery.matches();
// returns boolean ???
var hov = $("#myButton").mouseIsOver();
// returns boolean ???


function hideStuff() {
  if (win && hov) {
    $(".name").hide();
    $(".pfp").hide();
    $(".profile").css("background-color","#48556a");
  }
};
