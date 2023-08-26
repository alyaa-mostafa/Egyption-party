
$("#open").click(function(){
    $("#leftMenu").css("left", "0")
    $("#open").css("left", "270px")
    $(".homeContent").css("marginLeft", "250px")
})

$("#close").click(function(){
    $("#leftMenu").css("left", "-250px")
    $("#open").css("left", "10px")
    $(".homeContent").css("marginLeft", "0")

})



$(".toggle").click(function(){
    $(this).next().slideToggle() //display-block
    $(".inner").not($(this).next()).slideUp()
})


$("textarea").keyup(function(){
    let length = $("textarea").val().length
    $("#number").text(
        100-length <=0 ?"Your available character finished":100-length
    )
})




let countDownDate = new Date("october 25 2023 00:00:00").getTime();

let counter = setInterval( ()=>{
    // Get date now
let dateNow = new Date().getTime()
// find the date differnce between now and countDown date
let dateDiff= countDownDate - dateNow;
// Get time units
let days= Math.floor(dateDiff/1000/60/60/24);
document.querySelector(".days").innerHTML=days;
let hours = Math.floor(dateDiff %(1000*60*60*24) / 1000/60/60);
document.querySelector(".hours").innerHTML=hours;
let minutes = Math.floor(dateDiff %(1000*60*60)/(1000*60))
document.querySelector(".minutes").innerHTML=minutes;
let seconds = Math.floor(dateDiff %(1000*60)/(1000));
document.querySelector(".seconds").innerHTML=seconds;
if(dateDiff < 0){
clearInterval(counter)
}

},1000)