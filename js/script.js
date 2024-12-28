setTimeout(function () {
  $(".loader").addClass("hide");
}, 4000);
$(".drop").click(function () {
  $(".drop-down").slideToggle("slow");
});
$(".right").click(function () {
  $(".navigation").slideToggle("slow");
});
// $(".royce").mouseenter(function () {
  // $(".royce").animate({ left: "50px" });
  // $(".rolls").animate({ opacity: "1", left: "300px" });
  // $(".audi").css("display", "none");
  // $(".mercedes").css("display", "none");
// });
// $(".royce").mouseout(function () {
  // $(".royce").animate({ left: "100px" });
  // $(".rolls").animate({ opacity: "0", left: "260px" });
  // $(".audi").css("display", "block");
  // $(".mercedes").css("display", "block");
// });
// $(".audi").mouseenter(function () {
  // $(".audi").animate({ left: "400px" });
  // $(".audi1").animate({ opacity: "1", left: "650px" });
  // $(".royce").css("display", "none");
  // $(".mercedes").css("display", "none");
// });
// $(".audi").mouseout(function () {
  // $(".audi").animate({ left: "530px" });
  // $(".audi1").animate({ opacity: "0", left: "500px" });
  // $(".royce").css("display", "block");
  // $(".mercedes").css("display", "block");
// });
// $(".mercedes").mouseenter(function () {
  // $(".mercedes").animate({ right: "50px" });
  // $(".mercedes1").animate({ opacity: "1", right: "290px" });
  // $(".royce").css("display", "none");
  // $(".audi").css("display", "none");
// });
// $(".mercedes").mouseout(function () {
  // $(".mercedes").animate({ right: "100px" });
  // $(".mercedes1").animate({ opacity: "0", right: "250px" });
  // $(".royce").css("display", "block");
  // $(".audi").css("display", "block");
// });
// $(".thar").mouseenter(function () {
  // $(".thar").animate({ left: "50px" });
  // $(".thar1").animate({ opacity: "1", left: "290px" });
  // $(".bmw").css("display", "none");
  // $(".lamborghini").css("display", "none");
// });
// $(".thar").mouseout(function () {
  // $(".thar").animate({ left: "100px" });
  // $(".thar1").animate({ opacity: "0", left: "250px" });
  // $(".bmw").css("display", "block");
  // $(".lamborghini").css("display", "block");
// });
// $(".bmw").mouseenter(function () {
  // $(".bmw").animate({ left: "400px" });
  // $(".bmw1").animate({ opacity: "1", left: "650px" });
  // $(".thar").css("display", "none");
  // $(".lamborghini").css("display", "none");
// });
// $(".bmw").mouseout(function () {
  // $(".bmw").animate({ left: "530px" });
  // $(".bmw1").animate({ opacity: "0", left: "500px" });
  // $(".thar").css("display", "block");
  // $(".lamborghini").css("display", "block");
// });
// $(".lamborghini").mouseenter(function () {
  // $(".lamborghini").animate({ right: "50px" });
  // $(".lamborghini1").animate({ opacity: "1", right: "290px" });
  // $(".thar").css("display", "none");
  // $(".bmw").css("display", "none");
// });
// $(".lamborghini").mouseout(function () {
  // $(".lamborghini").animate({ right: "100px" });
  // $(".lamborghini1").animate({ opacity: "0", right: "250px" });
  // $(".thar").css("display", "block");
  // $(".bmw").css("display", "block");
// });
$("#submit").click(function () {
  if ($(".naam").val() == "") {
    alert("please fill your name");
  } else if ($(".mail").val() == "") {
    alert("please fill your email");
  } else {
	alert('hello, ' + $('.naam').val() + ' your form submit successfully');
	location.reload();
  }
});
$(".rolls-img").click(function () {
  $(".rolls-gallery").css("transform", "scale(1)");
});
$("#cross").click(function () {
  $(".rolls-gallery").css("transform", "scale(0)");
});
$("#close").click(function () {
  $(".rolls-gallery").css("transform", "scale(0)");
});
$(".audi-img").click(function () {
  $(".audi-gallery").css("transform", "scale(1)");
});
$("#audi-cross").click(function () {
  $(".audi-gallery").css("transform", "scale(0)");
});
$("#audi-close").click(function () {
  $(".audi-gallery").css("transform", "scale(0)");
});
$(".mercedes-img").click(function () {
  $(".mercedes-gallery").css("transform", "scale(1)");
});
$("#mercedes-cross").click(function () {
  $(".mercedes-gallery").css("transform", "scale(0)");
});
$("#mercedes-close").click(function () {
  $(".mercedes-gallery").css("transform", "scale(0)");
});
$(".thar-img").click(function () {
  $(".thar-gallery").css("transform", "scale(1)");
});
$("#thar-cross").click(function () {
  $(".thar-gallery").css("transform", "scale(0)");
});
$("#thar-close").click(function () {
  $(".thar-gallery").css("transform", "scale(0)");
});
$(".bmw-img").click(function () {
  $(".bmw-gallery").css("transform", "scale(1)");
});
$("#bmw-cross").click(function () {
  $(".bmw-gallery").css("transform", "scale(0)");
});
$("#bmw-close").click(function () {
  $(".bmw-gallery").css("transform", "scale(0)");
});
$(".lambo-img").click(function () {
  $(".lambo-gallery").css("transform", "scale(1)");
});
$("#lambo-cross").click(function () {
  $(".lambo-gallery").css("transform", "scale(0)");
});
$("#lambo-close").click(function () {
  $(".lambo-gallery").css("transform", "scale(0)");
});
$('.btn1').click(function (){
	$('.video1').css('transform','scale(1)');
});
$('.btn2').click(function (){
	$('.video2').css('transform','scale(1)');
});
$('.btn3').click(function (){
	$('.video3').css('transform','scale(1)');
});
$('.btn4').click(function (){
	$('.video4').css('transform','scale(1)');
});
$('.btn5').click(function (){
	$('.video5').css('transform','scale(1)');
});
$('.btn6').click(function (){
	$('.video6').css('transform','scale(1)');
});
$('.btn7').click(function (){
	$('.video7').css('transform','scale(1)');
});
$('.btn8').click(function (){
	$('.video8').css('transform','scale(1)');
});
$('.off').click(function (){
	$('.vv').css('transform','scale(0)');
});