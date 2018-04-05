import $ from "jquery";
import popper from 'popper.js';
import bootstrap from 'bootstrap';

//check to see if javascript is working
  function component() {
    var element = document.createElement('p');

   // Lodash, now imported by this script
    element.innerHTML = "Setup Appears to be working &#128521;";

    return element;
  }
  document.body.appendChild(component());

//test jquery and Bootstrap setup
  $( document ).ready(function() {
    var element = $("<p></p>").html("Jquery Appears to be working &#128521;");

    element.appendTo("body");
    $(function () {
  $('[data-toggle="popover"]').popover()
})

  });
