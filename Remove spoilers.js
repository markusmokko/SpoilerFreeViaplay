// ==UserScript==
// @name        Viaplay Shortcuts
// @include     https://viaplay.fi/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

function jumpForward(time){
    var vid = $('video').get(0);
    vid.currentTime = vid.currentTime + time;  	
}

$(document).keypress(function( event ) {
   
    if(event.which > 48 && event.which < 58){
        let minutes = (event.which-48) * 60;
        jumpForward(minutes)
    }
  
  	if(event.which === 48){
      var vid = $('video').get(0);
      vid.currentTime = 0;
    }
  
    if(event.which === 167){
        jumpForward(30);
    }    
});

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.time-label { display: none ! important; }');
addGlobalStyle('.text { display: none ! important; }');
addGlobalStyle('.slider { display: none ! important; }');


var setToStart = true;
var vid = $('video').get(0);
vid.onplaying= function(){  
  if(setToStart){
    vid.currentTime = 0;
  }  
  setToStart = false;
};

