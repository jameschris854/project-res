webApp = document.querySelector('.web-dev');
apps = document.getElementsByClassName('list1')
anim = document.getElementsByClassName('list2')
blender = document.querySelector('.blender');
preview = document.querySelector('.toggleImg')
theme = document.querySelector('.theme')
body = document.querySelector('body')
sMedia = document.getElementsByClassName("sm")

let defaultImg = '/images/project.png'
let defaultImgWeb = '/images/webBg.png'
let defaultImgblend = '/images/blenderImg.png'

//Click event for web-dev projects//

const show = function (sel) {
    for (let i = 0; i < sel.length; i++) {
        sel[i].classList.add("show")
        sel[i].classList.remove("hide")
    }
}
const hide = function (sel) {
    for (let i = 0; i < sel.length; i++) {
        sel[i].classList.add("hide")
        sel[i].classList.remove("show")
    }
}






webApp.addEventListener('click', () => {
    console.log(document.querySelector('.list1').classList[document.querySelector('.list1').classList.length - 1]);
    if ("hide" === document.querySelector('.list1').classList[document.querySelector('.list1').classList.length - 1]) {
        show(apps)
        hide(anim)
        defaultImg = '/images/webBg.png'

        preview.src = defaultImg

    }
    else {
        defaultImg = '/images/project.png'

        hide(apps)
        preview.src = defaultImg
    }
})
//Click event for blender projects//
blender.addEventListener('click', () => {

    if ("hide" == document.querySelector('.list2').classList[document.querySelector('.list2').classList.length - 1]) {
        show(anim)
        hide(apps)
        defaultImg = '/images/blenderImg.png'

        preview.src = defaultImg
    } else {
        defaultImg = '/images/project.png'

        hide(anim)
        preview.src = defaultImg
    }

})

console.log(defaultImg)
webApp.addEventListener('mouseover', () => {
    preview.src = defaultImgWeb

})
webApp.addEventListener('mouseout', () => {
    preview.src = defaultImg

})
blender.addEventListener('mouseover', () => {
    preview.src = defaultImgblend
    console.log(defaultImgblend)

})
blender.addEventListener('mouseout', () => {
    preview.src = defaultImg

})
//click event for theme changer//
// theme.addEventListener('click', () => {
//     if (theme.style.color != "white") {
//         theme.style.color = "white";
//         theme.style.background = "black";
//         body.style.background = "black"
//         document.querySelector(".header").style.background = "rgb(27 27 27)"
//         document.querySelector(".heading").style.textShadow = "none";
//         document.querySelector(".title1").style.boxShadow = "none";
//         document.querySelector(".title1").style.color = "white";
//         document.querySelector(".title1").style.background = "rgb(27 27 27)";
//         document.querySelector(".title2").style.background = "rgb(27 27 27)";
//         document.querySelector(".title2").style.color = "white";
//         document.querySelector(".title2").style.boxShadow = "none";
//         document.querySelector(".preview>img").style.boxShadow = "none";
//         for (let i = 0; i < sMedia.length; i++) {
//             sMedia[i].style.color = "white";
//         }
//     } else {
//         theme.style.color = "";
//         theme.style.background = "";
//         body.style.background = ""
//         document.querySelector(".header").style.background = ""
//         document.querySelector(".heading").style.textShadow = "";
//         document.querySelector(".title1").style.boxShadow = "";
//         document.querySelector(".title1").style.color = "";
//         document.querySelector(".title1").style.background = "";
//         document.querySelector(".title2").style.background = "";
//         document.querySelector(".title2").style.color = "";
//         document.querySelector(".title2").style.boxShadow = "";
//         for (let i = 0; i < sMedia.length; i++) {
//             sMedia[i].style.color = "";
//         }
//     }
// })
//scroll effect event//
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
