// 动态渲染
const list = document.querySelector('.list')

console.log(data)
var str = ''
for (var i = 0; i < data.length; i++) {
    // console.log(data);
    str += `
        <div class="goods-item">
            <a href="">
                <div class="goods-img">
                    <img src="http:${data[i].image_url}" alt="">
                </div>
                <div class="goods-info">
                    <div class="goods-name">${data[i].name}</div>
                    <div class="goods-price">￥${data[i].price}</div>
                </div>
            </a>
        </div>
         `

}
list.innerHTML = str