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

//Tìm kiếm


function search() {

    let searchvalue = document.getElementById("input-search").value;
    window.location = "index.html?timkiem=" + searchvalue + "?trang=1";

}
let loai = "";
let thuonghieu = "";
let trang = "";
let phoneproduct = "";


function load() {



    /*else if (counturl == 1) {
        for (var i = 9 * parseInt(location.search.slice(location.search.lastIndexOf("=") + 1)) - 9; i < 9 * parseInt(location.search.slice(location.search.lastIndexOf("=") + 1)); i++) {
            phoneproduct += '<div class="col-sm-4"><div class="panel panel-primary"><div class="panel-heading">' + product[i].phone_name + '</div><div class="panel-body"><img src="' + product[i].product_img + '" class="img-responsive" style="width:100%" alt="Image"></div><div class="panel-footer">' + formatNumber(product[i].product_price) + '</div></div></div>';
            document.getElementById("showproduct").innerHTML = phoneproduct;
        }

    }*/

    var style_array = [];
    var pageofstyle = "";

    for (var i = 0; i < product.length; i++) {
        if ((location.search.slice(location.search.indexOf("=") + 1, location.search.lastIndexOf("?")) == product[i].product_style) ||
            (location.search.slice(location.search.indexOf("=", location.search.indexOf("=") + 1) + 1, location.search.lastIndexOf("?")) == product[i].product__brand) ||
            (product[i].phone_name.toLowerCase().search(location.search.slice(location.search.indexOf("=") + 1, location.search.lastIndexOf("?")).toLowerCase()) != -1)) {
            style_array.push(product[i].product_id);
        }
    }
    document.getElementById('demo1').innerHTML = '<li><a href="index.html' + location.search.replace(location.search.slice(location.search.lastIndexOf("=") + 1), parseInt(location.search.slice(location.search.lastIndexOf("=") + 1)) - 1) + '">Previous</a></li>';
    for (var i = 1; i <= Math.ceil(style_array.length / 9); i++) {
        pageofstyle = '<li id="' + i + '" class="page"><a href="index.html' + location.search.replace(location.search.slice(location.search.lastIndexOf("=") + 1), i) + '">' + i + '</a></li>';
        document.getElementById('demo').innerHTML += pageofstyle;
    }
    document.getElementById('demo2').innerHTML += '<li><a href="index.html' + location.search.replace(location.search.slice(location.search.lastIndexOf("=") + 1), parseInt(location.search.slice(location.search.lastIndexOf("=") + 1)) + 1) + '">Next</a></li>';
    for (var j = 9 * parseInt(location.search.slice(location.search.lastIndexOf("=") + 1)) - 9; j < 9 * parseInt(location.search.slice(location.search.lastIndexOf("=") + 1)); j++) {
        phoneproduct += '<a href="product.html?' + product[parseInt(style_array[j]) - 1].phone_name.replace(/ /g, "-") + '"><div class="col-sm-4"><div class="panel panel-primary"><div class="panel-heading" style="overflow: hidden; font-size:12px">' + product[parseInt(style_array[j]) - 1].phone_name +
            '</div><div class="panel-body"><img src="./' + product[parseInt(style_array[j]) - 1].product_img +
            '" class="img-responsive" style="width:100%" alt="Image"></div><div class="panel-footer">' +
            formatNumber(product[parseInt(style_array[j]) - 1].product_price) + '</div></div></div></a>';
        document.getElementById("showproduct").innerHTML = phoneproduct;
    }

}



function showhome() {
    if (location.search == '') {
        window.location.href = "index.html?trang=1";
    }
}