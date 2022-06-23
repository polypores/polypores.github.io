// Init tooltips
tippy('.link',{
    placement: 'bottom'
})

profilePicDir = "https://lh3.googleusercontent.com/tbHC08brj2N8f1dBfQg8pKjwMg4EiTcEOlhPiAgUQGXr1w9LazZmkf3mEgLi9XK3OwGX0C5SyHDYdJWb-6yYbz_f6-v7yIN4OpnfsxDF7mPwyENNu0jlcKwwt405AK0w-QuV7GpON9r9kNDQTfXtJtYQmm5_mUxclaN7pKl_MfEdD5UPGPOzkopdULPVR7wzJ3bXVrhbhHQCMqXraYn5YlmUtANLYg-5DJjNrLd8b4p71wKjrcN_ENyU5u2Bacp1ITvX5tOZGBAEkkcNe2ESg8N_lnDFntQQNLFxqz5-EKfbXtBXZrKgqlXcpRfq9in0hGcu6tOh89NaqrenHRlwa-kfISNwSC_5mt5O_opPUieDCWVepBD1Yun11rtyqUcGpBrUU3GySISdw2TgQlPkrw_tXPIENepJ3Re3UUfu-9SRjSLSodwoB4_QipSXaJPR_T0UG5GAkNi_93Gxs_2MMGDTGtSqenWfFduHzx9SVQnwkpPTk69fy6Wvqt3BLJjkOEGxUb4klGLZvLp6gTNU33CF1m9GRuS1afvdIlM6Pp6JrQiHdiG0GRBmDLi7M8lPJLECPy1nJCjRdzeP1N9woUKL08s8b8eLtCw1DWzDhOnp7yVbrBEJ473_j3PbohGM4Qap5SHRBqnRdcYcSrbY-vvGNJdFAujAXFtj4XVajfrMbykiJqUIzeLjCmmz9sSgk9sDRqYY2A7E7WIg2rcfPQ39y4M8-SlklIQ51HiY6PdALFum7LxyKlNcbhL5M9jTObLtUoygwApTl8-_LGZfzGqjj25IsWHvXzKGluDe3aqEagTLhQ_e4-0bsWlZEAYDgKPfQCE0ldI61GLLhn5XwPevDg621ZosROdTIZBy6A=w627-h840-no?authuser=0"
goldenStarsImg = "./img/golden-stars.png"

window.onload = () => {
    $("#profile-pic-mobile").attr("style", `background-image: url(${profilePicDir})`)
    toggleLight()
    $("#golden-stars-img").addClass("invisible")
    $("#golden-stars-img").removeClass("visible")
    $("#golden-stars-img").attr("src", goldenStarsImg)
    $("#golden-stars-img").attr("alt", "Golden Stats")
    
    $("#mail-but").click(() => {
        $('#mail-text-cont').html("Copied into clipboard")
        navigator.clipboard.writeText("huynhkhaphi.ltp20@gmail.com")
        setTimeout(() =>{ 
            $('#mail-text-cont').html("huynhkhaphi.ltp20@gmail.com")
        }, 1000)
    })
}

let darkBg = "bg-gray-700"
let gradientBgForLight = "bg-gradient-to-r from-green-500 to-blue-500"

function replaceCompo(compo, proper1, proper2) {
    $(compo).removeClass(proper1)
    $(compo).addClass(proper2)
}

function toggleDark() {
    $("#golden-stars-img").removeClass("invisible")
    $("#golden-stars-img").addClass("visible")
    $("#golden-stars-img").addClass("phiElementToFadeIn")
    
    $("body").removeClass(gradientBgForLight)
    $("body").addClass(darkBg)
    $("#js-change-theme").html("🌙")
    replaceCompo("#js-change-theme", "bg-gray-900", "bg-gray-100")
    replaceCompo("body", "text-gray-900", "text-gray-100")
    replaceCompo("#profile", "bg-white", "bg-gray-900")
    // $("body").removeClass('text-gray-900')
    // $("body").addClass('text-gray-100')
    // $("#profile").removeClass('bg-white')
    // $("#profile").addClass('bg-gray-900')		
}
function toggleLight() {
    $("#golden-stars-img").removeClass("phiElementToFadeIn")
    $("#golden-stars-img").addClass("invisible")
    $("#golden-stars-img").removeClass("visible")
    $("body").removeClass(darkBg)
    $("body").addClass(gradientBgForLight)
    $("#js-change-theme").html("☀️")
    $("#js-change-theme").removeClass("bg-gray-100")
    $("#js-change-theme").addClass("bg-gray-900")
    
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