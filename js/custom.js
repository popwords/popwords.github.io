/*document.getElementById('btn_1').onclick = function() {
    var x = document.getElementById("txt_1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

document.getElementById('btn_2').onclick = function() {
    var x = document.getElementById("txt_2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }*/

$(document).ready(function() {
    $("#txt_1, #txt_2, #txt_3, #txt_4, #txt_5, #txt_6, #txt_7").hide();
});

$("#btn_1").on('click', function() {
    $("#txt_1").show();
    $("#txt_2, #txt_3, #txt_4, #txt_5, #txt_6, #txt_7").hide();
 });
 $("#btn_2").on('click', function() {
    $("#txt_2").show();
    $("#txt_1, #txt_3, #txt_4, #txt_5, #txt_6, #txt_7").hide();
 });
 $("#btn_3").on('click', function() {
    $("#txt_3").show();
    $("#txt_2, #txt_1, #txt_4, #txt_5, #txt_6, #txt_7").hide();
 });
 $("#btn_4").on('click', function() {
    $("#txt_4").show();
    $("#txt_2, #txt_3, #txt_1, #txt_5, #txt_6, #txt_7").hide();
 });
 $("#btn_5").on('click', function() {
    $("#txt_5").show();
    $("#txt_2, #txt_3, #txt_4, #txt_1, #txt_6, #txt_7").hide();
 });
 $("#btn_6").on('click', function() {
    $("#txt_6").show();
    $("#txt_2, #txt_3, #txt_4, #txt_5, #txt_1, #txt_7").hide();
 });
 $("#btn_7").on('click', function() {
    $("#txt_7").show();
    $("#txt_2, #txt_3, #txt_4, #txt_5, #txt_6, #txt_1").hide();
 });
 

//###################################
//RETHORICAL DEVICES

 $("#metaph").on('click', function() {
    $(".metaph").show();
    $(".simile, .thirdp, .quotes, .person, .retquest, .nick, .vs, .paradox, .foul, .relig, .cores").hide();
 });

 $("#simile").on('click', function() {
   $(".simile").show();
   $(".metaph, .thirdp, .quotes, .person, .retquest, .nick, .vs, .paradox, .foul, .relig, .cores").hide();
});

$("#thirdp").on('click', function() {
   $(".thirdp").show();
   $(".simile, .metaph, .quotes, .person, .retquest, .nick, .vs, .paradox, .foul, .relig, .cores").hide();
});

$("#quotes").on('click', function() {
   $(".quotes").show();
   $(".simile, .thirdp, .metaph, .person, .retquest, .nick, .vs, .paradox, .foul, .relig, .cores").hide();
});

$("#person").on('click', function() {
   $(".person").show();
   $(".simile, .thirdp, .quotes, .metaph, .retquest, .nick, .vs, .paradox, .foul, .relig, .cores").hide();
});

$("#retquest").on('click', function() {
   $(".retquest").show();
   $(".simile, .thirdp, .quotes, .person, .metaph, .nick, .vs, .paradox, .foul, .relig, .cores").hide();
});

$("#nick").on('click', function() {
   $(".nick").show();
   $(".simile, .thirdp, .quotes, .person, .metaph, .retquest, .vs, .paradox, .foul, .relig, .cores").hide();
});

$("#vs").on('click', function() {
   $(".vs").show();
   $(".simile, .thirdp, .quotes, .person, .retquest, .metaph, .metaph, .paradox, .foul, .relig, .cores").hide();
});

$("#paradox").on('click', function() {
   $(".paradox").show();
   $(".simile, .thirdp, .quotes, .person, .retquest, .nick, .vs, .metaph, .foul, .relig, .cores").hide();
});

$("#foul").on('click', function() {
   $(".foul").show();
   $(".simile, .thirdp, .quotes, .person, .retquest, .nick, .vs, .paradox, .metaph, .relig, .cores").hide();
});

$("#relig").on('click', function() {
   $(".relig").show();
   $(".simile, .thirdp, .quotes, .person, .retquest, .nick, .vs, .paradox, .foul, .metaph, .cores").hide();
});

$("#cores").on('click', function() {
   $(".cores").show();
   $(".simile, .thirdp, .quotes, .person, .retquest, .nick, .vs, .paradox, .foul, .relig, .metaph").hide();
});

