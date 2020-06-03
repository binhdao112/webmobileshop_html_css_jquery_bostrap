var tt = location.search.split("?")[1].split("tt=")[1];
let trang = location.search.slice(location.search.lastIndexOf("=") + 1);
let getsanpham = localStorage.getItem("product");
let parsesanpham = JSON.parse(getsanpham);

function xoa(num) {
    if (confirm("Bạn có thật sự muốn xóa!!") == true) {
        delete parsesanpham[num];
        parsesanpham[num] = parsesanpham[num + 1];
        parsesanpham.length = parsesanpham.length - 1;
        localStorage.removeItem("product");
        var setproduct = JSON.stringify(parsesanpham);
        localStorage.setItem("product", setproduct);
        location.reload();
    }
}

function sua(num) {
    parsesanpham[num].phone_name = $("#name" + num).val();
    parsesanpham[num].product__brand = $("#brand" + num).val();
    parsesanpham[num].product_price = $("#price" + num).val();
    parsesanpham[num].product_count = $("#count" + num).val();
    var y = $("#anh" + num).attr("src");
    var x = $("#img" + num).val();
    if (x == '') {
        parsesanpham[num].product_img = y.slice(y.indexOf("/") + 1);

    } else {
        parsesanpham[num].product_img = 'img/phone/' + x.replace(/C:\\fakepath\\/i, '');
    }

    var setitem = JSON.stringify(parsesanpham);
    localStorage.removeItem("product");
    localStorage.setItem("product", setitem);
    location.reload();
}

function showsanpham() {
    var text = "";
    var text1 = "";
    var text2 = "";
    var text3 = "";
    for (var i = 1; i <= Math.ceil(parsesanpham.length / 9); i++) {
        text1 += '<li><a href="' + location.search.replace(location.search.slice(location.search.lastIndexOf("=") + 1), i) + '">' + i + '</a></li>';
    }

    if (tt == 'all') {
        text = '<h2 style="text-align: center; font-weight: bolder;">TẤT CẢ SẢN PHẨM</h2>' +
            '<table class="table">' +
            '<thead>' +
            '<tr>' +
            '<th>Số thứ tự</th>' +
            '<th>Tên sản phẩm</th>' +
            '<th>Thương hiệu</th>' +
            '<th>Hình ảnh</th>' +
            '<th>Giá cả</th>' +
            '<th>Số lượng</th>' +
            '<th>Thao tác</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody id="tablebody">' +
            '</tbody>' +
            '</table>' +
            '<ul class="pager" id="paging">' +
            '</ul>';
        $("#show").html(text);
        for (var j = 9 * parseInt(trang) - 9; j < parseInt(trang) * 9; j++) {
            text2 += '<tr>' +
                '<td>' + parsesanpham[j].product_id + '</td>' +
                '<td>' + parsesanpham[j].phone_name + '</td>' +
                '<td>' + parsesanpham[j].product__brand + '</td>' +
                '<td><img src="../' + parsesanpham[j].product_img + '" style="width:40px;height:40px"></td>' +
                '<td>' + parsesanpham[j].product_price + '</td>' +
                '<td>' + parsesanpham[j].product_count + '</td>' +
                '<td><button class="btn btn-danger" onclick="xoa(' + j + ');">Xóa</button></td>';
            $("#tablebody").html(text2);
            $("#paging").html(text1);
        }

    } else if (tt == 'add') {
        text = '<h2 style="text-align: center; font-weight: bolder">THÊM SẢN PHẨM</h2>' +
            '<h4>vì web mới làm nên chỉ có thể thêm ảnh từ file phone tối ưu code sau</h4>' +
            '<div class="row form-group" style="margin-bottom: 10px">' +
            '<div class="col-sm-4 text-right" style="font-weight: bold; font-size: 20px">Tên sản phẩm:</div>' +
            '<div class="col-sm-8"><input id="product_name" type="text" class="form-control"></div>' +
            '</div>' +
            '<div class="row form-group" style="margin-bottom: 10px">' +
            '<div class="col-sm-4 text-right" style="font-weight: bold; font-size: 20px">Thương hiệu:</div>' +
            '<div class="col-sm-8"><input id="product_brand" type="text" class="form-control"></div>' +
            '</div>' +
            '<div class="row form-group" style="margin-bottom: 10px">' +
            '<div class="col-sm-4 text-right" style="font-weight: bold; font-size: 20px">Giá</div>' +
            '<div class="col-sm-8"><input id="product_price" type="text" class="form-control"></div>' +
            '</div>' +
            '<div class="row form-group" style="margin-bottom: 10px">' +
            '<div class="col-sm-4 text-right" style="font-weight: bold; font-size: 20px">Số lượng</div>' +
            '<div class="col-sm-8"><input id="product_count" type="text" class="form-control"></div>' +
            '</div>' +
            '<div class="row form-group" style="margin-bottom: 10px">' +
            '<div class="col-sm-4 text-right" style="font-weight: bold; font-size: 20px">Hình ảnh</div>' +
            '<div class="col-sm-8"><input id="product_img" type="file" class="form-control"></div>' +
            '</div>' +
            '<div class="col-sm-offset-4 col-sm-8 text-left"><button id="add" class="btn btn-danger btn-lg">THÊM</button></div>';
        $("#show").html(text);
    } else if (tt == 'repair') {
        text = '<h2 style="text-align: center; font-weight: bolder;">TẤT CẢ SẢN PHẨM</h2>' +
            '<table class="table">' +
            '<thead>' +
            '<tr>' +
            '<th>Số thứ tự</th>' +
            '<th>Tên sản phẩm</th>' +
            '<th>Thương hiệu</th>' +
            '<th>Hình ảnh</th>' +
            '<th>Giá cả</th>' +
            '<th>Số lượng</th>' +
            '<th>Thao tác</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody id="tablebody1">' +
            '</tbody>' +
            '</table>' +
            '<ul class="pager" id="paging">' +
            '</ul>';
        $("#show").html(text);
        for (var j = 9 * parseInt(trang) - 9; j < parseInt(trang) * 9; j++) {
            text3 += '<tr>' +
                '<td>' + parsesanpham[j].product_id + '</td>' +
                '<td><input id="name' + j + '" type="text" value="' + parsesanpham[j].phone_name + '"></td>' +
                '<td><input id="brand' + j + '" type="text" value="' + parsesanpham[j].product__brand + '"></td>' +
                '<td><img id="anh' + j + '"  src="../' + parsesanpham[j].product_img + '" style="width:40px;height:40px"><input id="img' + j + '" value="' + parsesanpham[j].product_img + '" type="file" class="form-control"></td>' +
                '<td><input id="price' + j + '" type="text" value="' + parsesanpham[j].product_price + '" style="width:90px"></td>' +
                '<td><input id="count' + j + '" type="text" value="' + parsesanpham[j].product_count + '" style="width:40px"></td>' +
                '<td><button onclick="sua(' + j + ')" class="btn btn-success">Sửa</button></td>';
            $("#tablebody1").html(text3);
            $("#paging").html(text1);

        }


    }



}
$(document).ready(function() {
    $("#add").click(function() {
        if (confirm("Bạn có muốn thêm") == true) {
            var obj = { product_id: null, phone_name: 'null', product__brand: 'null', product_price: 'null', product_count: 'null', product_img: 'null' };
            obj.product_id = parsesanpham[parsesanpham.length - 1].product_id + 1;
            obj.phone_name = $("#product_name").val();
            obj.product__brand = $("#product_brand").val();
            obj.product_price = $("#product_price").val();
            obj.product_count = $("#product_count").val();
            var x = $("#product_img").val();
            obj.product_img = 'img/phone/' + x.replace(/C:\\fakepath\\/i, '');
            parsesanpham.push(obj);
            var setitem = JSON.stringify(parsesanpham);
            localStorage.removeItem("product");
            localStorage.setItem("product", setitem);
            alert("Thêm sản phẩm thành công!!");
            location.reload();
        }
    });

});

function xoaaccount(num) {
    if (confirm("Bạn có muốn xóa!!!") == true) {
        let getaccount = localStorage.getItem("account");
        let parseaccount = JSON.parse(getaccount);
        delete parseaccount[num];
        parseaccount[num] = parseaccount[num + 1];
        parseaccount.length = parseaccount.length - 1;
        let setaccount = JSON.stringify(parseaccount);
        localStorage.setItem("account", setaccount);
        location.reload();
    }
}

function checkaddaccount() {
    let getaccount = localStorage.getItem("account");
    let parseaccount = JSON.parse(getaccount);
    for (var i = 1; i < parseaccount.length; i++) {
        if ($("#email").val() == '') {
            alert("Email không được để trống");
            return false;
        } else if ($("#pwd").val() == '') {
            alert("Mật khẩu không được để trống!!");
            return false;
        } else {
            for (var i = 1; i < parseaccount.length; i++) {
                if ($("#email").val() == parseaccount[i].username) {
                    alert("Email này đã được sử dụng");
                    return false;
                }
            }
            return true;
        }
    }

}

function repairaccount(num) {
    if (confirm("Bạn có muốn sửa!!") == true) {
        let getaccount = localStorage.getItem("account");
        let parseaccount = JSON.parse(getaccount);
        parseaccount[num].username = $("#username" + num).val();
        parseaccount[num].password = $("#pwd" + num).val();
        parseaccount[num].phanquyen = $("#sel" + num).val();
        let setaccount = JSON.stringify(parseaccount);
        localStorage.removeItem("account");
        localStorage.setItem("account", setaccount);
        alert("Sửa thành công!!");
        location.reload();
    }
}

function showaccount() {
    let getaccount = localStorage.getItem("account");
    let parseaccount = JSON.parse(getaccount);
    var text = '';
    var text1 = '';
    var text2 = '';
    if (tt == 'all') {
        text = '<h2 style="text-align: center; font-weight: bolder;">TẤT CẢ SẢN PHẨM</h2>' +
            '<table class="table">' +
            '<thead>' +
            '<tr>' +
            '<th>Số thứ tự</th>' +
            '<th>Tên tài khoản</th>' +
            '<th>Mật khẩu</th>' +
            '<th>Phân quyền</th>' +
            '<th>Thao tác</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody id="tablebody">' +
            '</tbody>' +
            '</table>' +
            '<ul class="pager" id="paging">' +
            '</ul>';
        for (var i = 1; i < parseaccount.length; i++) {

            text1 += '<tr id="body1">' +
                '<td>' + i + '</td>' +
                '<td>' + parseaccount[i].username + '</td>' +
                '<td >' + parseaccount[i].password + '</td>' +
                '<td id="phanquyen' + i + '"></td>' +
                '<td><button class="btn btn-danger" onclick="xoaaccount(' + i + ')" >Xóa</button></td>';
            $("#showaccount").html(text);
            $("#tablebody").html(text1);

        }
        for (var i = 1; i < parseaccount.length; i++) {
            if (parseaccount[i].phanquyen == 0) {
                console.log("true");
                $("#phanquyen" + i).html("Khách hàng");
                console.log($("#phanquyen" + i));
                console.log(i);
            } else {
                $("#phanquyen" + i).html("Admin");
            }

        }
    } else if (tt == 'add') {
        text = '<h2 style="text-align: center; font-weight: bolder">THÊM TÀI KHOẢN</h2>' +
            '<div class="row form-group" style="margin-bottom: 10px">' +
            '<div class="col-sm-4 text-left" style="font-weight: bold; font-size: 20px">Email:</div>' +
            '<div class="col-sm-8"><input id="email" type="text" class="form-control"></div>' +
            '</div>' +
            '<div class="row form-group" style="margin-bottom: 10px">' +
            '<div class="col-sm-4 text-left" style="font-weight: bold; font-size: 20px">Mật khẩu:</div>' +
            '<div class="col-sm-8"><input id="pwd" type="password" class="form-control"></div>' +
            '</div>' +

            '<div class="row form-group" style="margin-bottom: 10px">' +
            '<div class="col-sm-4 text-left" style="font-weight: bold; font-size: 20px">Phân quyền</div>' +
            '<div class="col-sm-8" style="margin-bottom:10px">' +
            '<select class="form-control" id="sel1">' +
            '<option value="0">Khách hàng</option>' +
            '<option value="1">Admin</option>' +
            '</select>' +
            '</div>' +
            '<div class="col-sm-offset-4 col-sm-8 text-left"><button  id="addaccount" class="btn btn-danger btn-lg">THÊM</button></div>';
        $("#showaccount").html(text);
    } else if (tt == 'repair') {
        console.log('true');
        text = '<h2 style="text-align: center; font-weight: bolder;">TẤT CẢ SẢN PHẨM</h2>' +
            '<table class="table">' +
            '<thead>' +
            '<tr>' +
            '<th>Số thứ tự</th>' +
            '<th>Tên tài khoản</th>' +
            '<th>Mật khẩu</th>' +
            '<th>Phân quyền</th>' +
            '<th>Thao tác</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody id="tablebody">' +
            '</tbody>' +
            '</table>' +
            '<ul class="pager" id="paging">' +
            '</ul>';
        for (var i = 1; i < parseaccount.length; i++) {

            text1 += '<tr id="body1">' +
                '<td>' + i + '</td>' +
                '<td><input type="text" id="username' + i + '" value="' + parseaccount[i].username + '"></td>' +
                '<td ><input type="text" id="pwd' + i + '" value="' + parseaccount[i].password + '"></td>' +
                '<td id="phanquyen' + i + '"></td>' +
                '<td><button class="btn btn-primary" onclick="repairaccount(' + i + ');" >Sửa</button></td>';
            $("#showaccount").html(text);
            $("#tablebody").html(text1);


        }

        for (var i = 1; i < parseaccount.length; i++) {
            text2 = '<select class="form-control" id="sel' + i + '">' + '</select>';
            if (parseaccount[i].phanquyen == 0) {
                console.log('true');
                $("#phanquyen" + i).html(text2);
                $("#sel" + i).html('<option value="0" >Khách hàng</option><option value="1">Admin</option>');
            } else {
                $("#phanquyen" + i).html(text2);
                $("#sel" + i).html('<option value="1">Admin</option><option value="0" >Khách hàng</option>');
            }

        }
    }
}
$(document).ready(function() {
    $("#addaccount").click(function() {
        if (checkaddaccount() == true) {
            if (confirm("Bạn có muốn thêm!!!") == true) {
                let acccount = { username: 'null', password: 'null', phanquyen: null };
                let getaccount = localStorage.getItem("account");
                let parseaccount = JSON.parse(getaccount);
                acccount.username = $("#email").val();
                acccount.password = $("#pwd").val();
                acccount.phanquyen = $("#sel1").val()
                parseaccount.push(acccount);
                let setaccount = JSON.stringify(parseaccount);
                localStorage.removeItem("account");
                localStorage.setItem("account", setaccount);
                alert("Thêm thành công")
                location.reload();
            }
        }
    });
});

/*function hiengia(num) {
    var gethoadon = localStorage.getItem("hoadon");
    var parsehoadon = JSON.parse(gethoadon);
    var gia = 0;
    for (var j = 1; j < parsehoadon[num].chitiethoadon.length; j++) {
        gia = gia + parsesanpham[parsehoadon[num].chitiethoadon[j].id].product_price * parsehoadon[num].chitiethoadon[j].soluong;

    }
    console.log(gia);
    $("#price" + num).text(gia);
}*/
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '<strong><sup> VND</sup></strong>';
}

function showhoadon() {
    var gethoadon = localStorage.getItem("hoadon");
    var parsehoadon = JSON.parse(gethoadon);
    var gia = null;
    var text = '';
    var text1 = '';
    var text2 = '';
    if (tt == 'all') {
        text = '<h2 style="text-align: center; font-weight: bolder;">TẤT CẢ HÓA ĐƠN</h2>' +
            '<table class="table">' +
            '<thead>' +
            '<tr>' +
            '<th>Số hóa đơn</th>' +
            '<th>Tên tài khoản mua</th>' +
            '<th>Chi tiết hóa đơn</th>' +
            '<th>Giá</th>' +
            '<th>Trạng thái</th>' +
            '<th>Thao tác</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody id="body">' +
            '</tbody>' +
            '</table>' +
            '<ul class="pager" id="paging">' +
            '</ul>';
        for (var i = 0; i < parsehoadon.length; i++) {

            text1 += '<tr id="body1">' +
                '<td>' + parsehoadon[i].sohoadon + '</td>' +
                '<td >' + parsehoadon[i].account + '</td>' +
                '<td id="chitietsanpham' + i + '"><button onclick="chitietsanpham(' + i + ')" type="button" class="btn btn-info btn-md">Hiện chi tiết</button></td>' +
                '<td id="price' + i + '"></td>' +
                '<td id="trangthai' + i + '"></td>' +
                '<td><button id="xacnhan' + i + '" class="btn btn-success btn-md" style="margin-right: 10px" onclick="xacnhan(' + i + ')" >Xác nhận</button>' +
                '<button class="btn btn-danger btn-md" onclick="xoa(' + i + ')" >Xóa</button></td></tr>';

        }
        $("#showhoadon").html(text);
        $("#body").html(text1);
        for (var i = 0; i < parsehoadon.length; i++) {
            var gia = 0;
            for (var j = 1; j < parsehoadon[i].chitiethoadon.length; j++) {
                gia = gia + parsesanpham[parsehoadon[i].chitiethoadon[j].id].product_price * parsehoadon[i].chitiethoadon[j].soluong;

            }
            console.log(gia);
            $("#price" + i).html(formatNumber(gia));
        }
        for (var i = 0; i < parsehoadon.length; i++) {
            var trangthai = '';
            if (parsehoadon[i].trangthai == 0) {
                trangthai = 'Chưa xác nhận';
            } else if (parsehoadon[i].trangthai == 1) {
                trangthai = 'Đang vận chuyển';
            } else if (parsehoadon[i].trangthai == 2) {
                trangthai = 'Đã thanh toán';
                document.getElementById("xacnhan" + i).disabled = true;
            }
            $("#trangthai" + i).text(trangthai);
        }


    } else if (tt == 'notactived') {
        text = '<h2 style="text-align: center; font-weight: bolder;">TẤT CẢ HÓA ĐƠN</h2>' +
            '<table class="table">' +
            '<thead>' +
            '<tr>' +
            '<th>Số hóa đơn</th>' +
            '<th>Tên tài khoản mua</th>' +
            '<th>Chi tiết hóa đơn</th>' +
            '<th>Giá</th>' +
            '<th>Trạng thái</th>' +
            '<th>Thao tác</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody id="body">' +
            '</tbody>' +
            '</table>' +
            '<ul class="pager" id="paging">' +
            '</ul>';
        for (var i = 0; i < parsehoadon.length; i++) {
            if (parsehoadon[i].trangthai == 0) {
                text1 += '<tr id="body1">' +
                    '<td>' + parsehoadon[i].sohoadon + '</td>' +
                    '<td >' + parsehoadon[i].account + '</td>' +
                    '<td id="chitietsanpham' + i + '"><button onclick="chitietsanpham(' + i + ')" type="button" class="btn btn-info btn-md">Hiện chi tiết</button></td>' +
                    '<td id="price' + i + '"></td>' +
                    '<td id="trangthai' + i + '"></td>' +
                    '<td><button id="xacnhan' + i + '" class="btn btn-success btn-md" style="margin-right: 10px" onclick="xacnhan(' + i + ')" >Xác nhận</button>' +
                    '<button class="btn btn-danger btn-md" onclick="xoa(' + i + ')" >Xóa</button></td></tr>';
            }

        }
        $("#showhoadon").html(text);
        $("#body").html(text1);
        for (var i = 0; i < parsehoadon.length; i++) {
            if (parsehoadon[i].trangthai == 0) {
                var gia = 0;
                for (var j = 1; j < parsehoadon[i].chitiethoadon.length; j++) {
                    gia = gia + parsesanpham[parsehoadon[i].chitiethoadon[j].id].product_price * parsehoadon[i].chitiethoadon[j].soluong;

                }
                console.log(gia);
                $("#price" + i).html(formatNumber(gia));
            }
        }
        for (var i = 0; i < parsehoadon.length; i++) {
            if (parsehoadon[i].trangthai == 0) {
                var trangthai = '';
                if (parsehoadon[i].trangthai == 0) {
                    trangthai = 'Chưa xác nhận';
                } else if (parsehoadon[i].trangthai == 1) {
                    trangthai = 'Đang vận chuyển';
                } else if (parsehoadon[i].trangthai == 2) {
                    trangthai = 'Đã thanh toán';
                    document.getElementById("xacnhan" + i).disabled = true;
                }
                $("#trangthai" + i).text(trangthai);
            }
        }
    } else if (tt == 'tranfer') {
        text = '<h2 style="text-align: center; font-weight: bolder;">TẤT CẢ HÓA ĐƠN</h2>' +
            '<table class="table">' +
            '<thead>' +
            '<tr>' +
            '<th>Số hóa đơn</th>' +
            '<th>Tên tài khoản mua</th>' +
            '<th>Chi tiết hóa đơn</th>' +
            '<th>Giá</th>' +
            '<th>Trạng thái</th>' +
            '<th>Thao tác</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody id="body">' +
            '</tbody>' +
            '</table>' +
            '<ul class="pager" id="paging">' +
            '</ul>';
        for (var i = 0; i < parsehoadon.length; i++) {
            if (parsehoadon[i].trangthai == 1) {
                text1 += '<tr id="body1">' +
                    '<td>' + parsehoadon[i].sohoadon + '</td>' +
                    '<td >' + parsehoadon[i].account + '</td>' +
                    '<td id="chitietsanpham' + i + '"><button onclick="chitietsanpham(' + i + ')" type="button" class="btn btn-info btn-md">Hiện chi tiết</button></td>' +
                    '<td id="price' + i + '"></td>' +
                    '<td id="trangthai' + i + '"></td>' +
                    '<td><button id="xacnhan' + i + '" class="btn btn-success btn-md" style="margin-right: 10px" onclick="xacnhan(' + i + ')" >Xác nhận</button>' +
                    '<button class="btn btn-danger btn-md" onclick="xoa(' + i + ')" >Xóa</button></td></tr>';
            }

        }
        $("#showhoadon").html(text);
        $("#body").html(text1);
        for (var i = 0; i < parsehoadon.length; i++) {
            if (parsehoadon[i].trangthai == 1) {
                var gia = 0;
                for (var j = 1; j < parsehoadon[i].chitiethoadon.length; j++) {
                    gia = gia + parsesanpham[parsehoadon[i].chitiethoadon[j].id].product_price * parsehoadon[i].chitiethoadon[j].soluong;

                }
                console.log(gia);
                $("#price" + i).html(formatNumber(gia));
            }
        }
        for (var i = 0; i < parsehoadon.length; i++) {
            if (parsehoadon[i].trangthai == 1) {
                var trangthai = '';
                if (parsehoadon[i].trangthai == 0) {
                    trangthai = 'Chưa xác nhận';
                } else if (parsehoadon[i].trangthai == 1) {
                    trangthai = 'Đang vận chuyển';
                } else if (parsehoadon[i].trangthai == 2) {
                    trangthai = 'Đã thanh toán';
                    document.getElementById("xacnhan" + i).disabled = true;
                }
                $("#trangthai" + i).text(trangthai);
            }
        }
    } else if (tt == 'actived') {
        text = '<h2 style="text-align: center; font-weight: bolder;">TẤT CẢ HÓA ĐƠN</h2>' +
            '<table class="table">' +
            '<thead>' +
            '<tr>' +
            '<th>Số hóa đơn</th>' +
            '<th>Tên tài khoản mua</th>' +
            '<th>Chi tiết hóa đơn</th>' +
            '<th>Giá</th>' +
            '<th>Trạng thái</th>' +
            '<th>Thao tác</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody id="body">' +
            '</tbody>' +
            '</table>' +
            '<ul class="pager" id="paging">' +
            '</ul>';
        for (var i = 0; i < parsehoadon.length; i++) {
            if (parsehoadon[i].trangthai == 2) {
                text1 += '<tr id="body1">' +
                    '<td>' + parsehoadon[i].sohoadon + '</td>' +
                    '<td >' + parsehoadon[i].account + '</td>' +
                    '<td id="chitietsanpham' + i + '"><button onclick="chitietsanpham(' + i + ')" type="button" class="btn btn-info btn-md">Hiện chi tiết</button></td>' +
                    '<td id="price' + i + '"></td>' +
                    '<td id="trangthai' + i + '"></td>' +
                    '<td><button id="xacnhan' + i + '" class="btn btn-success btn-md" style="margin-right: 10px" onclick="xacnhan(' + i + ')" >Xác nhận</button>' +
                    '<button class="btn btn-danger btn-md" onclick="xoa(' + i + ')" >Xóa</button></td></tr>';
            }

        }
        $("#showhoadon").html(text);
        $("#body").html(text1);
        for (var i = 0; i < parsehoadon.length; i++) {
            if (parsehoadon[i].trangthai == 2) {
                var gia = 0;
                for (var j = 1; j < parsehoadon[i].chitiethoadon.length; j++) {
                    gia = gia + parsesanpham[parsehoadon[i].chitiethoadon[j].id].product_price * parsehoadon[i].chitiethoadon[j].soluong;

                }
                console.log(gia);
                $("#price" + i).html(formatNumber(gia));
            }
        }
        for (var i = 0; i < parsehoadon.length; i++) {
            if (parsehoadon[i].trangthai == 2) {
                var trangthai = '';
                if (parsehoadon[i].trangthai == 0) {
                    trangthai = 'Chưa xác nhận';
                } else if (parsehoadon[i].trangthai == 1) {
                    trangthai = 'Đang vận chuyển';
                } else if (parsehoadon[i].trangthai == 2) {
                    trangthai = 'Đã thanh toán';
                    document.getElementById("xacnhan" + i).disabled = true;
                }
                $("#trangthai" + i).text(trangthai);
            }
        }
    }
}

function chitietsanpham(num) {
    var text1 = '';
    var text = '<table><thead><tr><th>Tên sản phẩm</th><th>Số lượng</th></tr></thead><tbody id="tbbody' + num + '"></tbody><tbody id="tbbody1' + num + '"></tbody></table>';
    var gethoadon = localStorage.getItem("hoadon");
    var parsehoadon = JSON.parse(gethoadon);
    for (var j = 1; j < parsehoadon[num].chitiethoadon.length; j++) {
        text1 += '<tr><td>' + parsesanpham[parsehoadon[num].chitiethoadon[j].id].phone_name + '</td><td class="text-right">' + parsehoadon[num].chitiethoadon[j].soluong + '</td></tr>';
    }
    $("#chitietsanpham" + num).html(text);
    $("#tbbody" + num).html(text1);
    $("#tbbody1" + num).html('<tr><td><button onclick="hide(' + num + ')" class="btn btn-md btn-basic">ẨN</button></td></tr>')
}

function hide(num) {
    $("#chitietsanpham" + num).html('<button onclick="chitietsanpham(' + num + ')" type="button" class="btn btn-info btn-md">Hiện chi tiết</button>');
}

function xacnhan(num) {
    if (confirm("Bạn có muốn xác nhận!!") == true) {

        var gethoadon = localStorage.getItem("hoadon");
        var parsehoadon = JSON.parse(gethoadon);
        parsehoadon[num].trangthai = parsehoadon[num].trangthai + 1;
        var sethoadon = JSON.stringify(parsehoadon);
        localStorage.removeItem("hoadon");
        localStorage.setItem("hoadon", sethoadon);
        alert("Đã xác nhận thành công");
        location.reload();
    }
}

function xoa(num) {
    if (confirm("Bạn có thực sự muốn xóa!!") == true) {
        var gethoadon = localStorage.getItem("hoadon");
        var parsehoadon = JSON.parse(gethoadon);
        delete parsehoadon[num];
        parsehoadon[num] = parsehoadon[num + 1];
        parsehoadon.length = parsehoadon.length - 1;
        var sethoadon = JSON.stringify(parsehoadon);
        localStorage.removeItem("hoadon");
        localStorage.setItem("hoadon", sethoadon);
        alert("Xóa thành công");
        location.reload();
    }
}

function logout() {
    localStorage.removeItem("checklogin");
    localStorage.removeItem("currentcart")
    localStorage.setItem("checklogin", 0);
    location.href = "./../index.html";
}