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
    $("#txt_2, #txt_3, #txt_4, #txt_5, #txt_6, #txt_7").hide();
    $(".metaph").removeClass("hmetaph");
    $(".thirdp").removeClass("hthirdp");
    $(".quotes").removeClass("hquotes");
    $(".person").removeClass("hperson");
    $(".retquest").removeClass("hrequest");
    $(".nick").removeClass("hnick");
    $(".vs").removeClass("hvs");
    $(".paradox").removeClass("hparadox");
    $(".foul").removeClass("hfoul");
    $(".relig").removeClass("hrelig");
    $(".simile").removeClass("hsimile");
    $(".cores").removeClass("hcores");
});

$("#btn_1").on('click', function() {
    $("#txt_1").show();
    $("#txt_2, #txt_3, #txt_4, #txt_5, #txt_6, #txt_7").hide();
    $(".metaph").removeClass("hmetaph");
    $(".thirdp").removeClass("hthirdp");
    $(".quotes").removeClass("hquotes");
    $(".person").removeClass("hperson");
    $(".retquest").removeClass("hrequest");
    $(".nick").removeClass("hnick");
    $(".vs").removeClass("hvs");
    $(".paradox").removeClass("hparadox");
    $(".foul").removeClass("hfoul");
    $(".relig").removeClass("hrelig");
    $(".simile").removeClass("hsimile");
    $(".cores").removeClass("hcores");
 });
 $("#btn_2").on('click', function() {
    $("#txt_2").show();
    $("#txt_1, #txt_3, #txt_4, #txt_5, #txt_6, #txt_7").hide();
    $(".metaph").removeClass("hmetaph");
    $(".thirdp").removeClass("hthirdp");
    $(".quotes").removeClass("hquotes");
    $(".person").removeClass("hperson");
    $(".retquest").removeClass("hrequest");
    $(".nick").removeClass("hnick");
    $(".vs").removeClass("hvs");
    $(".paradox").removeClass("hparadox");
    $(".foul").removeClass("hfoul");
    $(".relig").removeClass("hrelig");
    $(".simile").removeClass("hsimile");
    $(".cores").removeClass("hcores");
 });
 $("#btn_3").on('click', function() {
    $("#txt_3").show();
    $("#txt_2, #txt_1, #txt_4, #txt_5, #txt_6, #txt_7").hide();
    $(".metaph").removeClass("hmetaph");
    $(".thirdp").removeClass("hthirdp");
    $(".quotes").removeClass("hquotes");
    $(".person").removeClass("hperson");
    $(".retquest").removeClass("hrequest");
    $(".nick").removeClass("hnick");
    $(".vs").removeClass("hvs");
    $(".paradox").removeClass("hparadox");
    $(".foul").removeClass("hfoul");
    $(".relig").removeClass("hrelig");
    $(".simile").removeClass("hsimile");
    $(".cores").removeClass("hcores");
 });
 $("#btn_4").on('click', function() {
    $("#txt_4").show();
    $("#txt_2, #txt_3, #txt_1, #txt_5, #txt_6, #txt_7").hide();
    $(".metaph").removeClass("hmetaph");
    $(".thirdp").removeClass("hthirdp");
    $(".quotes").removeClass("hquotes");
    $(".person").removeClass("hperson");
    $(".retquest").removeClass("hrequest");
    $(".nick").removeClass("hnick");
    $(".vs").removeClass("hvs");
    $(".paradox").removeClass("hparadox");
    $(".foul").removeClass("hfoul");
    $(".relig").removeClass("hrelig");
    $(".simile").removeClass("hsimile");
    $(".cores").removeClass("hcores");
 });
 $("#btn_5").on('click', function() {
    $("#txt_5").show();
    $("#txt_2, #txt_3, #txt_4, #txt_1, #txt_6, #txt_7").hide();
    $(".metaph").removeClass("hmetaph");
    $(".thirdp").removeClass("hthirdp");
    $(".quotes").removeClass("hquotes");
    $(".person").removeClass("hperson");
    $(".retquest").removeClass("hrequest");
    $(".nick").removeClass("hnick");
    $(".vs").removeClass("hvs");
    $(".paradox").removeClass("hparadox");
    $(".foul").removeClass("hfoul");
    $(".relig").removeClass("hrelig");
    $(".simile").removeClass("hsimile");
    $(".cores").removeClass("hcores");
 });
 $("#btn_6").on('click', function() {
    $("#txt_6").show();
    $("#txt_2, #txt_3, #txt_4, #txt_5, #txt_1, #txt_7").hide();
    $(".metaph").removeClass("hmetaph");
    $(".thirdp").removeClass("hthirdp");
    $(".quotes").removeClass("hquotes");
    $(".person").removeClass("hperson");
    $(".retquest").removeClass("hrequest");
    $(".nick").removeClass("hnick");
    $(".vs").removeClass("hvs");
    $(".paradox").removeClass("hparadox");
    $(".foul").removeClass("hfoul");
    $(".relig").removeClass("hrelig");
    $(".simile").removeClass("hsimile");
    $(".cores").removeClass("hcores");
 });
 $("#btn_7").on('click', function() {
    $("#txt_7").show();
    $("#txt_2, #txt_3, #txt_4, #txt_5, #txt_6, #txt_1").hide();
    $(".metaph").removeClass("hmetaph");
    $(".thirdp").removeClass("hthirdp");
    $(".quotes").removeClass("hquotes");
    $(".person").removeClass("hperson");
    $(".retquest").removeClass("hrequest");
    $(".nick").removeClass("hnick");
    $(".vs").removeClass("hvs");
    $(".paradox").removeClass("hparadox");
    $(".foul").removeClass("hfoul");
    $(".relig").removeClass("hrelig");
    $(".simile").removeClass("hsimile");
    $(".cores").removeClass("hcores");
 });
 

//###################################
//RETHORICAL DEVICES



 $("#metaph").on('click', function() {
    $(".metaph").addClass("hmetaph");
    $(".simile").removeClass("hsimile");
    $(".thirdp").removeClass("hthirdp");
    $(".quotes").removeClass("hquotes");
    $(".person").removeClass("hperson");
    $(".retquest").removeClass("hrequest");
    $(".nick").removeClass("hnick");
    $(".vs").removeClass("hvs");
    $(".paradox").removeClass("hparadox");
    $(".foul").removeClass("hfoul");
    $(".relig").removeClass("hrelig");
    $(".cores").removeClass("hcores");
 });

 $("#simile").on('click', function() {
   $(".simile").addClass("hsimile");
   $(".metaph").removeClass("hmetaph");
   $(".thirdp").removeClass("hthirdp");
   $(".quotes").removeClass("hquotes");
   $(".person").removeClass("hperson");
   $(".retquest").removeClass("hrequest");
   $(".nick").removeClass("hnick");
   $(".vs").removeClass("hvs");
   $(".paradox").removeClass("hparadox");
   $(".foul").removeClass("hfoul");
   $(".relig").removeClass("hrelig");
   $(".cores").removeClass("hcores");
});

$("#thirdp").on('click', function() {
   $(".thirdp").addClass("hthirdp");
   $(".metaph").removeClass("hmetaph");
   $(".simile").removeClass("hsimile");
   $(".quotes").removeClass("hquotes");
   $(".person").removeClass("hperson");
   $(".retquest").removeClass("hrequest");
   $(".nick").removeClass("hnick");
   $(".vs").removeClass("hvs");
   $(".paradox").removeClass("hparadox");
   $(".foul").removeClass("hfoul");
   $(".relig").removeClass("hrelig");
   $(".cores").removeClass("hcores");
});

$("#quotes").on('click', function() {
   $(".quotes").addClass("hquotes");
   $(".metaph").removeClass("hmetaph");
   $(".thirdp").removeClass("hthirdp");
   $(".simile").removeClass("hsimile");
   $(".person").removeClass("hperson");
   $(".retquest").removeClass("hrequest");
   $(".nick").removeClass("hnick");
   $(".vs").removeClass("hvs");
   $(".paradox").removeClass("hparadox");
   $(".foul").removeClass("hfoul");
   $(".relig").removeClass("hrelig");
   $(".cores").removeClass("hcores");
});

$("#person").on('click', function() {
   $(".person").addClass("hperson");
   $(".metaph").removeClass("hmetaph");
   $(".thirdp").removeClass("hthirdp");
   $(".quotes").removeClass("hquotes");
   $(".simile").removeClass("hsimile");
   $(".retquest").removeClass("hrequest");
   $(".nick").removeClass("hnick");
   $(".vs").removeClass("hvs");
   $(".paradox").removeClass("hparadox");
   $(".foul").removeClass("hfoul");
   $(".relig").removeClass("hrelig");
   $(".cores").removeClass("hcores");
});

$("#retquest").on('click', function() {
   $(".retquest").addClass("hrequest");
   $(".metaph").removeClass("hmetaph");
   $(".thirdp").removeClass("hthirdp");
   $(".quotes").removeClass("hquotes");
   $(".person").removeClass("hperson");
   $(".simile").removeClass("hsimile");
   $(".nick").removeClass("hnick");
   $(".vs").removeClass("hvs");
   $(".paradox").removeClass("hparadox");
   $(".foul").removeClass("hfoul");
   $(".relig").removeClass("hrelig");
   $(".cores").removeClass("hcores");
});

$("#nick").on('click', function() {
   $(".nick").addClass("hnick");
   $(".metaph").removeClass("hmetaph");
   $(".thirdp").removeClass("hthirdp");
   $(".quotes").removeClass("hquotes");
   $(".person").removeClass("hperson");
   $(".retquest").removeClass("hrequest");
   $(".simile").removeClass("hsimile");
   $(".vs").removeClass("hvs");
   $(".paradox").removeClass("hparadox");
   $(".foul").removeClass("hfoul");
   $(".relig").removeClass("hrelig");
   $(".cores").removeClass("hcores");
});

$("#vs").on('click', function() {
   $(".vs").addClass("hvs");
   $(".metaph").removeClass("hmetaph");
   $(".thirdp").removeClass("hthirdp");
   $(".quotes").removeClass("hquotes");
   $(".person").removeClass("hperson");
   $(".retquest").removeClass("hrequest");
   $(".nick").removeClass("hnick");
   $(".simile").removeClass("hsimile");
   $(".paradox").removeClass("hparadox");
   $(".foul").removeClass("hfoul");
   $(".relig").removeClass("hrelig");
   $(".cores").removeClass("hcores");
});

$("#paradox").on('click', function() {
   $(".paradox").addClass("hparadox");
   $(".metaph").removeClass("hmetaph");
   $(".thirdp").removeClass("hthirdp");
   $(".quotes").removeClass("hquotes");
   $(".person").removeClass("hperson");
   $(".retquest").removeClass("hrequest");
   $(".nick").removeClass("hnick");
   $(".vs").removeClass("hvs");
   $(".simile").removeClass("hsimile");
   $(".foul").removeClass("hfoul");
   $(".relig").removeClass("hrelig");
   $(".cores").removeClass("hcores");
});

$("#foul").on('click', function() {
   $(".foul").addClass("hfoul");
   $(".metaph").removeClass("hmetaph");
   $(".thirdp").removeClass("hthirdp");
   $(".quotes").removeClass("hquotes");
   $(".person").removeClass("hperson");
   $(".retquest").removeClass("hrequest");
   $(".nick").removeClass("hnick");
   $(".vs").removeClass("hvs");
   $(".paradox").removeClass("hparadox");
   $(".simile").removeClass("hsimile");
   $(".relig").removeClass("hrelig");
   $(".cores").removeClass("hcores");
});

$("#relig").on('click', function() {
   $(".relig").addClass("hrelig");
   $(".metaph").removeClass("hmetaph");
   $(".thirdp").removeClass("hthirdp");
   $(".quotes").removeClass("hquotes");
   $(".person").removeClass("hperson");
   $(".retquest").removeClass("hrequest");
   $(".nick").removeClass("hnick");
   $(".vs").removeClass("hvs");
   $(".paradox").removeClass("hparadox");
   $(".foul").removeClass("hfoul");
   $(".simile").removeClass("hsimile");
   $(".cores").removeClass("hcores");
});

$("#cores").on('click', function() {
   $(".cores").addClass("hcores");
   $(".metaph").removeClass("hmetaph");
   $(".thirdp").removeClass("hthirdp");
   $(".quotes").removeClass("hquotes");
   $(".person").removeClass("hperson");
   $(".retquest").removeClass("hrequest");
   $(".nick").removeClass("hnick");
   $(".vs").removeClass("hvs");
   $(".paradox").removeClass("hparadox");
   $(".foul").removeClass("hfoul");
   $(".relig").removeClass("hrelig");
   $(".simile").removeClass("hsimile");
});

