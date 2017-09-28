/*
Pure javascript version of jquery document ready by user: jfriend00
https://stackoverflow.com/questions/9899372/
*/

console.log(`
  _______  __   __  ___      ___      __   __  _______  _______  ___   _  _______
 |  _    ||  | |  ||   |    |   |    |  | |  ||   _   ||       ||   | | ||       |
 | |_|   ||  | |  ||   |    |   |    |  |_|  ||  |_|  ||       ||   |_| ||  _____|
 |       ||  |_|  ||   |    |   |    |       ||       ||       ||      _|| |_____
 |  _   | |       ||   |___ |   |___ |       ||       ||      _||     |_ |_____  |
 | |_|   ||       ||       ||       ||   _   ||   _   ||     |_ |    _  | _____| |
 |_______||_______||_______||_______||__| |__||__| |__||_______||___| |_||_______|`);

(function(funcName, baseObj) {
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;

    function ready() {
        if (!readyFired) {

            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {

                readyList[i].fn.call(window, readyList[i].ctx);
            }

            readyList = [];
        }
    }

    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            ready();
        }
    }

    baseObj[funcName] = function(callback, context) {
        if (typeof callback !== "function") {
            throw new TypeError("callback for docReady(fn) must be a function");
        }

        if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
        } else {

            readyList.push({fn: callback, ctx: context});
        }

        if (document.readyState === "complete") {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {

            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", ready, false);
                window.addEventListener("load", ready, false);
            } else {
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("docReady", window);

  var colors = ['#465eab', '#e6c622', '#ea473b']
var genQuestionBorder = function() {
var x = document.getElementsByClassName('questionBorder')
  for (var i = 0; i < x.length; i++) {
      var rotate = Math.floor((Math.random() - 0.5) * 15)
      var ranColor = Math.floor(Math.random() * 3)
      x[i].style.borderColor = colors[ranColor];
      x[i].style.transform = "rotate("+ rotate +"deg)"
  }
}



docReady(function() {


  var y = document.getElementsByClassName('sponsorBorder')
  var z = document.getElementsByClassName('sponsorBg')
  var buttons = document.getElementsByClassName('btn')

  document.getElementById('q').addEventListener("change", genQuestionBorder());



  for (var i = 0; i < y.length; i++) {
      var parent = y[i].parentElement
      var rotate = Math.floor((Math.random() - 0.5) * 15)
      var ranColor = Math.floor(Math.random() * 3)
      y[i].style.borderColor = colors[ranColor];
      y[i].style.transform = "rotate("+ rotate +"deg)"
  }

  for (var i = 0; i < z.length; i++) {
      var parent = z[i].parentElement
      var rotate = Math.floor((Math.random() - 0.5) * 15)
      z[i].style.transform = "rotate("+ rotate +"deg)"
  }
});

function initMap() {
  var uluru = {lat: -25.363, lng: 131.044}
  var map = new google.maps.Map(document.getElementById('location'), {
    draggable: false,
    scrollwheel: false,
    panControl: false,
    zoom: 14,
    center: {lat: 52.4806704 , lng: -1.8926539},
  })
  var marker = new google.maps.Marker({
    position: {lat:52.4832336 , lng: -1.8843293},
    map: map
  })
}
