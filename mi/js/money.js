// 动态渲染
const wrap = document.querySelector('.con-wrap')
const list = document.getElementById('wrap')

var data = data[0].labels
console.log(data)
var str = ''
for (var i = 0; i < data.length; i++) {
    // console.log(data);
    str += `
            <div class="item-wrap">
                <div class="item-title">
                    <p>${data[i].label_name}</p>
                    <span>更多<i class="iconfont icon-youjiantou_huaban"></i></span>
                </div>
                <div class="item-list">
                    <ul id="wrap">
            `
    for (var j = 0; j < data[i].recommend_products.length; j++) {
        str += ` <li>
                                <img src="${data[i].recommend_products[j].img_url}" alt="">
                                <div class="detail">
                                    <div class="desc">${data[i].recommend_products[j].name}</div>
                                    <div class="price">￥${data[i].recommend_products[j].price_min}</div>
                                </div>
                            </li>
                            `
    }
    str += `
                        </ul>
                    </div>
                </div>
        `

}
wrap.innerHTML = str