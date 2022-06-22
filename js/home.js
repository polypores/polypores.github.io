// Init tooltips
tippy('.link',{
    placement: 'bottom'
})

window.onload = () => {
    $("#mail-but").click(() => {
        $('#mail-text-cont').text = "Copied into clipboard"
        setTimeout(() =>{ 
            $('#mail-text-cont').text = "huynhkhaphi.ltp20@gmail.com"
        }, 2000)
    })
}

function toggleDark() {
    $("#js-change-theme").html("🌙")
    // console.log('toggle dark func triggered')
    $("body").removeClass('text-gray-900')
    $("body").addClass('text-gray-100')
    $("#profile").removeClass('bg-white')
    $("#profile").addClass('bg-gray-900')		
}
function toggleLight() {
    $("body").addClass('bg-gray-900')
    $("#js-change-theme").html("☀️")
    // console.log('toggle light func triggered')
    $("body").removeClass('text-gray-100')
    $("body").addClass('text-gray-900')
    $("#profile").removeClass('bg-gray-900')		
    $("#profile").addClass('bg-white')
}

$("#js-change-theme").click(() => {
    if ($("body").hasClass('text-gray-900')) 
        toggleDark()
    else 
        toggleLight()
})

$(document).ready(() => {
    $(window).scroll(() => {
        $("#phi-on-scroll").css("opacity", 1 - $(window).scrollTop() / ($("#phi-on-scroll").height() /2))
    })
})