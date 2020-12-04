// 倒计时
var hour = document.querySelectorAll('.hour')
var min = document.querySelectorAll('.minute')
var second = document.querySelectorAll('.second')

var futureTime = new Date('2020-12-10 20:00:00')
var tiemr = setInterval(function() {
    for (var i = 0; i < hour.length; i++) {


        // 当前时间
        var nowTime = new Date();
        var diff = futureTime - nowTime;
        // console.log(diff);
        var hourTime = parseInt(diff / 1000 / 60 / 60 % 24)
        var minTime = parseInt(diff / 1000 / 60 % 60)
        var secondTime = parseInt(diff / 1000 % 60)

        hour[i].innerText = hourTime < 10 ? '0' + hourTime : hourTime;
        min[i].innerText = minTime < 10 ? '0' + minTime : minTime;
        second[i].innerText = secondTime < 10 ? '0' + secondTime : secondTime;
        if (diff <= 0) {
            clearInterval(timer)
        }
    }
}, 1000)

// tab切换
var list = document.querySelectorAll('.navbar>div')
var main = document.querySelectorAll('.main')
console.log(main);
list.forEach((item, index) => {
        console.log(item, index);
        item.onclick = function() {
            for (var i = 0; i < list.length; i++) {
                list[i].classList.remove('active');
                main[i].classList.remove('active');
            }
            console.log(this);
            item.classList.add('active');
            main[index].classList.add('active')

        }
    })
    // 随机数
function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
}
// random(1, 100)
// console.log(random(1, 100));
// 渲染
var con = document.querySelectorAll('.goods-info-content')
console.log(con);
console.log(data)
con.forEach((item, index) => {
    for (var i = 0; i < data.length; i++) {
        var html = ''
        for (var j = 0; j < data[i].list.length; j++) {
            // console.log(data[i].list[j]);
            var num = random(1, 100);
            var name = random(0, 2);
            html += `
        <a class="goods">
                    <div class="goods-img">
                        <img src="${data[name].list[j].img}" />
                    </div>
                    <div class="goods-info">
                        <div class="goods-info-top">
                            <div class="name fz-xs">
                            ${data[name].list[j].goods_name}
                            </div>
                            <div class="desc fz-xxs">
                            ${data[name].list[j].desc}
                            </div>
                        </div>
                        <div class="goods-info-bottom">
                            <div class="goods-bottom-left">
                                <p class="mb1">
                                    <span class="price fz-s">￥${data[name].list[j].seckill_price}</span>
                                    <del class="price fz-xs">￥${data[name].list[j].goods_price}</del>
                                </p>
                                <div class="percent">
                                    <div class="percent-width" style="width:${num}%"></div>
                                    <div class="percent-text">${num}%</div>
                                </div>
                            </div>
                            <div class="goods-bottom-right">登录后抢购</div>
                        </div>
                    </div>
                </a>
        `
        }
        // console.log(data[i].list);
        con[index].innerHTML = html;
    }
})