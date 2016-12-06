// document.write("It works");
require("./style.css");
// import("./materialize.min.js")
// require('materialize-css/sass/materialize.scss');
import { sayItWorks } from './content'
sayItWorks();

// $(document).ready.(function() {
//   let
// });

let $SeeConst = $('#see-const');
let $ConstBtn = $('#const-btn');
let $SeeLet = $('#see-let');
let $LetBtn = $('#let-btn');

$ConstBtn.click(function() {
  $SeeConst.show();
  $SeeConst.slideDown();
});

$LetBtn.click(function() {
  $SeeLet.show();
  $SeeLet.slideDown();
});

