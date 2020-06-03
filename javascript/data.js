var phone_brand = ["Apple(iPhone)", "Samsung", "OPPO", "Huawei", "Xiaomi", "VSmart", "Nokia", "HONOR", "Vivo", "Realme", "Asus", "Wiko", "Masstel"];
var laptop_brand = ["Apple (Macbook)", "Asus", "Acer", "Dell", "HP", "Lenovo", "MSI", "Masstel", "Haier"];
var tablet_brand = ["iPhone", "iPad", "Macbook", "iMac", "Mac mini", "Mac Pro", "Watch", "Apple TV", "Phụ kiện", "Beats"];
var pk_menu = ["Bao da ốp lưng", "Sạc dự phòng", "Thẻ nhớ", "Phụ kiện Apple", "Miếng dán màn hình", "Tai nghe", "Loa", "USB - Ổ cứng", "Sạc cáp", "Chuột", "Balo - Túi xách", "TV BOX", "Phụ kiện khác"];
var product1 = [{ product_id: 1, phone_name: 'iPhone Xs Max 64GB', product_style: 'laptop', product__brand: 'Apple(iPhone)', product_price: 29990000, product_img: 'img/phone/apple/636526515750427366_1o-6splus-32.jpg', product_count: 20 },
    { product_id: 2, phone_name: 'iPhone Xs Max 256GB', product_style: 'laptop', product__brand: 'Apple(iPhone)', product_price: 35990000, product_img: 'img/phone/apple/636526515750427366_1o-6splus-32.jpg', product_count: 20 },
    { product_id: 3, phone_name: 'iPhone Xs Max 512GB', product_style: 'phone', product__brand: 'Apple(iPhone)', product_price: 46990000, product_img: 'img/phone/apple/636526515750427366_1o-6splus-32.jpg', product_count: 20 },
    { product_id: 4, phone_name: 'iPhone Xs 64GB', product_style: 'phone', product__brand: 'Apple(iPhone)', product_price: 26990000, product_img: 'img/phone/apple/636749593270587915_iphoneXS-1o.jpg', product_count: 20 },
    { product_id: 5, phone_name: 'iPhone XR 64GB', product_style: 'phone', product__brand: 'Apple(iPhone)', product_price: 18990000, product_img: 'img/phone/apple/636749593269651993_iphoneXR-1o.jpg', product_count: 20 },
    { product_id: 6, phone_name: 'iPhone XR 128GB', product_style: 'phone', product__brand: 'Apple(iPhone)', product_price: 19990000, product_img: 'img/phone/apple/636526515750427366_1o-6splus-32.jpg', product_count: 20 },
    { product_id: 7, phone_name: 'iPhone X 64GB', product_style: 'phone', product__brand: 'Apple(iPhone)', product_price: 22990000, product_img: 'img/phone/apple/636749593269651993_iphoneXR-1o.jpg', product_count: 20 },
    { product_id: 8, phone_name: 'iPhone 8 64GB', product_style: 'phone', product__brand: 'Apple(iPhone)', product_price: 16990000, product_img: 'img/phone/apple/636948129580162404_iphone-8.jpg', product_count: 20 },
    { product_id: 9, phone_name: 'iPhone 8 128GB', product_style: 'phone', product__brand: 'Apple(iPhone)', product_price: 19990000, product_img: 'img/phone/apple/636948129580162404_iphone-8.jpg', product_count: 20 },
    { product_id: 10, phone_name: 'iPhone 8 512GB', product_style: 'phone', product__brand: 'Apple(iPhone)', product_price: 22990000, product_img: '/img/phone/apple/636948129580162404_iphone-8.jpg', product_count: 20 },
    { product_id: 11, phone_name: 'iPhone 7 32GB', product_style: 'phone', product__brand: 'Apple(iPhone)', product_price: 9990000, product_img: 'img/phone/apple/636836629047810556_iphone-7-plus.jpg', product_count: 20 },
    { product_id: 12, phone_name: 'Samsung Galaxy S10+ (Plus)', product_style: 'phone', product__brand: 'Samsung', product_price: 18990000, product_img: 'img/phone/samsung/636863659522918468_ss-galaxy-s10-plus-xanh-1.webp', product_count: 20 },
    { product_id: 13, phone_name: 'Galaxy Note 10', product_style: 'phone', product__brand: 'Samsung', product_price: 26990000, product_img: 'img/phone/samsung/637008693100566121_SS-note-10-pl-dd-1.jpg', product_count: 20 },
    { product_id: 14, phone_name: 'Samsung Galaxy A80', product_style: 'phone', product__brand: 'Samsung', product_price: 16990000, product_img: 'img/phone/samsung/636907523746637260_samsung-galaxy-a80-vang-1.jpg', product_count: 20 },
    { product_id: 15, phone_name: 'Samsung Galaxy Note 9 128GB', product_style: 'phone', product__brand: 'Samsung', product_price: 18990000, product_img: 'img/phone/samsung/636703736254310068_note9-xanh-1.jpg', product_count: 20 },
    { product_id: 16, phone_name: 'Samsung Galaxy S9+ 128GB', product_style: 'phone', product__brand: 'Samsung', product_price: 19990000, product_img: 'img/phone/samsung/636808980507140561_s9plus-vangkim-1.jpg', product_count: 20 },
    { product_id: 17, phone_name: 'Samsung Galaxy S10e', product_style: 'phone', product__brand: 'Samsung', product_price: 19990000, product_img: 'img/phone/samsung/637008129845765817_SS-S10e-green-1.jpg', product_count: 20 },
    { product_id: 18, phone_name: 'Samsung Galaxy A9 2018', product_style: 'phone', product__brand: 'Samsung', product_price: 86990000, product_img: 'img/phone/samsung/636776104541101822_Galaxy-A7-Blue-5.jpg', product_count: 20 },
    { product_id: 19, phone_name: 'Samsung Galaxy A70', product_style: 'phone', product__brand: 'Samsung', product_price: 9990000, product_img: 'img/phone/samsung/636907475981220637_samsung-galaxy-a70-den-1.jpg', product_count: 20 },
    { product_id: 20, phone_name: 'Samsung Galaxy A8 Star (2018)', product_style: 'phone', product__brand: 'OPPO', product_price: 8990000, product_img: 'img/phone/samsung/636907523746637260_samsung-galaxy-a80-vang-1.jpg', product_count: 20 },
    { product_id: 20, phone_name: 'Samsung Galaxy A8 Star (2018)', product_style: 'phone', product__brand: 'OPPO', product_price: 8990000, product_img: 'img/phone/samsung/636907523746637260_samsung-galaxy-a80-vang-1.jpg', product_count: 20 },

]
var parseproduct = JSON.parse(localStorage.getItem("product"));
if (parseproduct == null) {
    var setproduct = JSON.stringify(product1);
    localStorage.setItem("product", setproduct);
}