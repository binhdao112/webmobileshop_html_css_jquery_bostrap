let phonebrand = "";
let laptopbrand = "";
let tabletbrand = "";
let pkmenu = "";
let getproduct = localStorage.getItem("product");
let product = JSON.parse(getproduct);
//show menu phong brand;
for (var i = 0; i < phone_brand.length; i++) {
    phonebrand += '<li role="presentation"><a role="menuitem" tabindex="-1" href="index.html?style=phone?brand=' + phone_brand[i] + '?trang=1" value="' + phone_brand[i] + '">' + phone_brand[i] + '</a></li>';
    document.getElementById("menuphone_content").innerHTML = phonebrand;
}
//show menu laptop brand
for (var i = 0; i < laptop_brand.length; i++) {
    laptopbrand += '<li role="presentation"><a role="menuitem" tabindex="-1" href="index.html?style=laptop?brand=' + laptop_brand[i] + '?trang=1" value="' + laptop_brand[i] + '">' + laptop_brand[i] + '</a></li>';
    document.getElementById("menulaptop_content").innerHTML = laptopbrand;
}
//showmenu tablet brand
for (var i = 0; i < tablet_brand.length; i++) {
    tabletbrand += '<li role="presentation"><a role="menuitem" tabindex="-1" href="index.html?style=tablet?brand=' + tablet_brand[i] + '?trang=1" value="' + tablet_brand[i] + '">' + tablet_brand[i] + '</a></li>';
    document.getElementById("menutablet_content").innerHTML = tabletbrand;
}
// show menu phu kiện
for (var i = 0; i < pk_menu.length; i++) {
    pkmenu += '<li role="presentation"><a role="menuitem" tabindex="-1" href="index.html?style=phukien?brand=' + pk_menu[i] + '?trang=1" value="' + pk_menu[i] + '">' + pk_menu[i] + '</a></li>';
    document.getElementById("menupk_content").innerHTML = pkmenu;
}
//show product
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '<strong><sup> VND</sup></strong>';
}
//nhứt đầu grummmmm
//delay dropdown
jQuery('li.dropdown').hover(function() {

    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
// pagination
/*let paging = "";
for (var i = 1; i <= Math.ceil(product.length / 9); i++) {
    paging = '<li id="' + i + '" class="page"><a href="index.html' + location.search.replace(location.search.slice(location.search.lastIndexOf("=") + 1), i) + '">' + i + '</a></li>';
    document.getElementById('demo').innerHTML += paging;
}*/
//show product

/*let countpag = location.search.slice('?trang='.length, location.search.length);

for (var i = 9 * parseInt(countpag) - 9; i < 9 * parseInt(countpag); i++) {
    phoneproduct += '<div class="col-sm-4"><div class="panel panel-primary"><div class="panel-heading">' + product[i].phone_name + '</div><div class="panel-body"><img src="' + product[i].product_img + '" class="img-responsive" style="width:100%" alt="Image"></div><div class="panel-footer">' + formatNumber(product[i].product_price) + '</div></div></div>';
    document.getElementById("showproduct").innerHTML = phoneproduct;
}*/
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '<strong><sup> VND</sup></strong>';
}
//Tìm kiếm


function search() {

    let searchvalue = document.getElementById("input-search").value;
    window.location = "index.html?timkiem=" + searchvalue + "?trang=1";

}
var getjsoncart = localStorage.getItem("currentcart");
if (JSON.parse(getjsoncart) == null) {
    var jsoncart = '[{"id": null, "soluong": null}]'
    localStorage.setItem("currentcart", jsoncart);
}

function show_content() {

    let show__content = "";
    for (var i = 0; i < product.length; i++) {
        if (location.search.slice(location.search.indexOf("?") + 1).toLowerCase().replace(/-/g, " ") == product[i].phone_name.toLowerCase()) {
            show__content += '<div class="row">' +
                '<div class="col-sm-6">' +
                '<div class="thumbnail">' +
                '<a href="#" target="_blank">' +
                '<img src="./img/phone/apple/content/636748771945393060_iPhone-Xs-Max-gold.jpg" alt="Nature" style="width:100%">' +
                '</a>' +
                '</div>' +
                '</div>' +
                '<div class="col-sm-6">' +
                '<div class="panel panel-default">' +
                '<div class="panel-heading h1" style="background-color: #ffff;">' + product[i].phone_name + '</div>' +
                '<div class="panel-body">' +
                '<div class="row" style="margin-bottom: 10px">' +
                '<div class="col-sm-5 text-left text-w" style="font-weight: bolder">Thương hiệu:</div>' +
                '<div class="col-sm-7" style="word-wrap: break-word;"><a href="#">' + product[i].product__brand + '</a></div>' +
                '</div>' +
                '<hr>' +
                '<div class="row" style="margin-bottom: 10px;font-weight: bolder" >' +
                '<div class="col-sm-5 text-left text-w">Giá:</div>' +
                '<div class="col-sm-7" style="word-wrap: break-word;font-size:40px;" >' + formatNumber(product[i].product_price) + '</div>' +
                '</div>' +
                '<button onclick="addcart();" class="col-sm-12 btn btn-danger btn-lg" style="height: 80px;" tyle="button" onclick="addcard();">Thêm vào giỏ hàng</button>' +

                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
        }
    }
    document.getElementById("show-content").innerHTML = show__content;
}

function addcart() {
    var getjsoncart = localStorage.getItem("currentcart");
    var text3 = localStorage.getItem("account");
    var taikhoan = JSON.parse(text3);
    var checklogin = localStorage.getItem("checklogin");
    var flag = JSON.parse(checklogin);
    var currentaccount = localStorage.getItem("currentaccount");
    var account = JSON.parse(currentaccount);

    if (flag == 1) {
        var cartshop = JSON.parse(getjsoncart);
        var selectitem = location.search.slice(location.search.indexOf("?") + 1).replace(/-/g, " ");

        for (var i = 0; i < product.length; i++) {
            if (selectitem == product[i].phone_name) {
                var item = { id: 0, soluong: 0 };
                item.id = product[i].product_id;
                item.soluong = 1;

            }
        }
        cartshop.push(item);
        for (var i = 0; i < cartshop.length - 1; i++) {
            if (cartshop[i].id == cartshop[cartshop.length - 1].id) {
                cartshop[i].soluong = cartshop[i].soluong + 1;
                delete cartshop[cartshop.length - 1];
                cartshop.length = cartshop.length - 1;
                break;
            }
        }
        localStorage.removeItem("currentcart");
        localStorage.setItem("currentcart", JSON.stringify(cartshop));
        alert("Thêm sản phẩm thành công");

    } else {
        alert("Cần đăng nhập trước");
    }

}