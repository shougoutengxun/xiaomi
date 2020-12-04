// mui.init({
//     swipeBack: true //启用右滑关闭功能
// });
// var slider = mui("#slider");
// document.getElementById("switch").addEventListener('toggle', function(e) {
//     if (e.detail.isActive) {
//         slider.slider({
//             interval: 5000
//         });
//     } else {
//         slider.slider({
//             interval: 0
//         });
//     }
// })
const headlist = document.getElementsByClassName('nav-list-left')[0]
const headlist2 = document.getElementsByClassName('nav-list-detail')[0]
const font = document.getElementsByClassName('nav-list-text')[0]
const fontli = document.querySelectorAll('.nav-list-text i')
let a = 0;
font.onclick = () => {
    a++;
    for (var i = 0; i < 2; i++) {
        headlist.classList.remove('blk')
        headlist2.classList.remove('blk')
        fontli[i].classList.remove('font')
    }
    if (a % 2 != 0) {
        headlist2.classList.add('blk')
        fontli[1].classList.add('font')
        a = 1;
    } else {
        headlist.classList.add('blk')
        fontli[0].classList.add('font')
    }
}