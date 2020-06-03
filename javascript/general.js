var email = document.getElementById("email");
var password = document.getElementById("password");
var repassword = document.getElementById("repassword");
var address = document.getElementById("Address");

function checksignin() {

    var rexemail = /[a-zA-Z1-9]{2,200}/i;
    var rexpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (email.value == '') {
        alert("Email không được bỏ trống");
        return false;
    } else if (!rexemail.test(email.value)) {
        alert("Email phải có ít nhất 15 ký tự");
        return false;
    } else if (password.value == '') {
        alert("Mật khẩu không được để trống");
        return false;
    } else if (!rexpassword.test(password.value)) {
        alert("Mật khẩu phải có tối thiểu 8 ký tự thượng và ít nhất 1 ký tự số và IN HOA")
        return false;
    } else if (repassword.value == '') {
        alert("Điền Mật khẩu xác nhận");
        return false;
    } else if (repassword.value != password.value) {
        alert("Nhập khẩu xác nhận không trùng với Mật khẩu");
        return false;
    } else if (address.value == '') {
        alert("Địa chỉ không được bỏ trống");
        return false;
    } else {

        var text3 = localStorage.getItem("account");
        var taikhoan = JSON.parse(text3);
        for (var i = 0; i < taikhoan.length; i++) {
            if (email.value == taikhoan[i].username) {
                alert("Email này đã được dùng xin nhập Email khác");
                return false;
                break;
            }
        }
        return true;

    }
}
//khi chưa có json tạo 1 json rỗng để làm mảng
var text = localStorage.getItem("account")
if (JSON.parse(text) == null) {
    var text2 = '[{"username":"null", "password":"null","phanquyen":"null"}]'
    localStorage.setItem("account", text2);
}

function signin() {
    if (checksignin() == true) {
        var text3 = localStorage.getItem("account");
        var taikhoan = JSON.parse(text3);
        var accountOjb = ({ username: "null", password: "null", phanquyen: null });
        accountOjb.username = email.value;
        accountOjb.password = password.value;
        accountOjb.phanquyen = 0;
        taikhoan.push(accountOjb);

        var myJSON = JSON.stringify(taikhoan);
        localStorage.removeItem("account");
        localStorage.setItem("account", myJSON);
        alert("Đăng ký thành công");
        window.location.assign("index.html");

    }

}
var loginusername = document.getElementById("email1");
var loginpass = document.getElementById("password1");


function checklogin() {
    var text3 = localStorage.getItem("account");
    var taikhoan = JSON.parse(text3);
    for (var i = 0; i < taikhoan.length; i++) {
        if (loginusername.value == taikhoan[i].username) {
            if (loginpass.value != taikhoan[i].password) {
                return false;
                break;
            }
            return true;
            break;

        }
    }
}

function login() {

    if (checklogin() == true) {
        var text3 = localStorage.getItem("account");
        var taikhoan = JSON.parse(text3);
        var taikhoanhientai = '{ "username": "null", "phanquyen": "null" }';
        localStorage.setItem("currentaccount", taikhoanhientai);
        for (var i = 0; i < taikhoan.length; i++) {
            if (loginusername.value == taikhoan[i].username) {
                var taikhoanhientai1 = localStorage.getItem("currentaccount");
                var taikhoan1 = JSON.parse(taikhoanhientai1);
                taikhoan1.username = taikhoan[i].username;
                taikhoan1.phanquyen = taikhoan[i].phanquyen;
                localStorage.removeItem("currentaccount");
                var text = JSON.stringify(taikhoan1);
                localStorage.setItem("currentaccount", text);


            }
        }
        localStorage.removeItem("checklogin");
        localStorage.setItem("checklogin", 1);
        alert("Đăng nhập thành công");
        var getcurrentaccount = localStorage.getItem("currentaccount");
        var parsecurrentaccount = JSON.parse(getcurrentaccount);
        if (parsecurrentaccount.phanquyen == 1) {
            location.href = "./admin/index.html"
        } else {
            location.reload();
        }

    } else {
        alert("Tai khoản hoặc mật khẩu sai");
    }
}

function logout() {
    localStorage.removeItem("checklogin");
    localStorage.removeItem("currentcart")
    localStorage.setItem("checklogin", 0);
    location.reload();
}

function showlogin() {
    var showaccount = "";
    var text3 = localStorage.getItem("account");
    var taikhoan = JSON.parse(text3);
    var checklogin = localStorage.getItem("checklogin");
    var flag = JSON.parse(checklogin);
    var currentaccount = localStorage.getItem("currentaccount");
    var account = JSON.parse(currentaccount);
    if (flag == 1) {
        document.getElementById("login1").classList.add("navbar-right");
        showaccount = '<div class="dropdown showaccount" >' +
            '<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"><span class="glyphicon glyphicon-user"></span>' +
            '<span class="caret"></span></button>' +
            '<ul class="dropdown-menu menulogin" style="width:auto;" >' +
            ' <li><p style="cursor: pointer;font-weight: bolder;color: lightblue;text-align: right">Xin chào! ' + account.username + '</p></li>' +
            '<li><button class="btn btn-danger" style="width:100%;margin-bottom:10px;" onclick="logout();">Thay đổi mật khẩu</button></li>' +
            '<li><button class="btn btn-danger" style="width:100%;" onclick="logout();">Đăng xuất</button></li>' +
            '</ul>' +
            '</div>';
    } else {
        document.getElementById("login1").classList.add("navbar-left");

        showaccount = '    <li><button class="btn btn-danger" style="margin: 10px 0px 0px 5px;" data-toggle="modal" data-target="#signin"><span class="glyphicon glyphicon-user"></span> Đăng ký</button></li>' +
            '<li><button class="btn btn-danger" style="margin: 10px -10px 0px 5px;" data-toggle="modal" data-target="#login"><span class="glyphicon glyphicon-user"></span> Đăng nhập</button></li>'
    }
    document.getElementById("login1").innerHTML = showaccount;

}