let getproduct = localStorage.getItem("product");
let product = JSON.parse(getproduct);

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '<strong><sup>VND</sup></strong>';
}

function showcart() {
    var getjsoncart = localStorage.getItem("currentcart");
    var cartshop = JSON.parse(getjsoncart);
    var showcart = "";
    var sumprice = "";
    var tonggia = 0;
    //tạo 1 phần tử json rỗng
    let gethoadon = localStorage.getItem("hoadon");
    if (gethoadon == null) {
        var hoadon = [];
        var sethoadon = JSON.stringify(hoadon);
        localStorage.setItem("hoadon", sethoadon);

    }


    for (var i = 1; i < cartshop.length; i++) {
        showcart += '<tr>' +
            '<td>' + product[cartshop[i].id - 1].phone_name + '</td>' +
            '<td><button type="button" onclick="tru(' + i + ')"  class="btn btn-danger">-</button>' +
            '<input id="soluong" type="text" style="width: 30px;margin: 0px 5px 0px 5px; text-align:center" value="' + cartshop[i].soluong + '">' +
            '<input type="button" onclick="cong(' + i + ')" value="+" class="btn btn-success"></td>' +
            '<td>' + formatNumber(product[cartshop[i].id - 1].product_price * cartshop[i].soluong) + '</td>' +
            '<td>' + '<button type="button" class="btn btn-danger" onclick="xoa(' + i + ')">Xóa</button>' + '</td>' +
            '</tr>';
    }
    for (var i = 1; i < cartshop.length; i++) {
        tonggia = tonggia + (product[cartshop[i].id - 1].product_price * cartshop[i].soluong);
    }
    sumprice = '<hr><strong style="font-size:15px">Tổng số tiền: ' + formatNumber(tonggia) + '</strong>';
    document.getElementById("showcartshop").innerHTML = showcart;
    document.getElementById('sumprice').innerHTML = sumprice;
}

function tru(num) {
    var getjsoncart = localStorage.getItem("currentcart");
    var cartshop = JSON.parse(getjsoncart);
    if (cartshop[num].soluong >= 1) {
        cartshop[num].soluong = cartshop[num].soluong - 1;
        var parsecart = JSON.stringify(cartshop);
        localStorage.removeItem("currentcart");
        localStorage.setItem("currentcart", parsecart);
        location.reload();
    } else {
        alert("Số đã đạt giớ hạn");
    }
}

function cong(num) {
    var getjsoncart = localStorage.getItem("currentcart");
    var cartshop = JSON.parse(getjsoncart);
    cartshop[num].soluong = cartshop[num].soluong + 1;
    var parsecart = JSON.stringify(cartshop);
    localStorage.removeItem("currentcart");
    localStorage.setItem("currentcart", parsecart);
    location.reload();
}

function xoa(num) {
    var getjsoncart = localStorage.getItem("currentcart");
    var cartshop = JSON.parse(getjsoncart);
    if (confirm("Bạn có thật sự muốn xóa") == true) {
        delete cartshop[num];
        cartshop[num] = cartshop[num + 1];
        cartshop.length = cartshop.length - 1;
        var parsecart = JSON.stringify(cartshop);
        localStorage.removeItem("currentcart");
        localStorage.setItem("currentcart", parsecart);
        location.reload();
    }
}

function thanhtoan() {
    if (confirm("Bạn có muốn thanh toán!!") == true) {
        let gethoadon = localStorage.getItem("hoadon");
        var parsehoadon = JSON.parse(gethoadon);
        var objhoadon = { sohoadon: null, chitiethoadon: [], trangthai: 0, account: 'null' };
        var getcart = localStorage.getItem("currentcart");
        var parsecart = JSON.parse(getcart);
        var getaccount = localStorage.getItem("currentaccount");
        var parseaccount = JSON.parse(getaccount);
        objhoadon.sohoadon = parsehoadon.length + 1;
        objhoadon.chitiethoadon = parsecart;
        objhoadon.account = parseaccount.username;
        parsehoadon.push(objhoadon);
        var sethoadon = JSON.stringify(parsehoadon);
        localStorage.removeItem("currentcart");
        localStorage.removeItem("hoadon");
        localStorage.setItem("hoadon", sethoadon);
        alert("Bạn Đã Thanh Toán Thành Công");
        window.location.href = "index.html";
    }
}