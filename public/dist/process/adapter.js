$(function() {
    let params = '';
    if (!getSearchParams("l") || getSearchParams("l")=="vn"){
        params = "?l=vn" 
    } else if (getSearchParams("l")=="en"){
        params = "?l=en"
    }
    $('#btn_en').click(function(){
        
        window.location = "/?l=en"
    })

    $('#btn_vn').click(function(){
        window.location = "/?l=vn"
    })
    $.get(`${document.location.origin}/client/category${params}`,function(results){
        console.log(results)
        results.forEach(element => {
            $('#dropdown-nav').append(`<li><a class="dropdown-item" href="/product?c=${element._id}&${params}">${element.name}</a></li>`)
        });

        
        $('#btn_home').click(function(){
            window.location = "/"+params
        })

    
    
   
   document.getElementById("tabbar_home").innerHTML = getSearchParams("l")=="en"?"HOME":"TRANG CHỦ"
   document.getElementById("tabbar_home").href = `/${params}`
   document.getElementById("tabbar_about").innerHTML = getSearchParams("l")=="en"?"ABOUT US":"GIỚI THIỆU"
   document.getElementById("tabbar_about").href = `/about${params}`
   document.getElementById("tabbar_product").innerHTML = getSearchParams("l")=="en"?"PRODUCT":"SẢN PHẨM"
   document.getElementById("tabbar_contact").innerHTML = getSearchParams("l")=="en"?"CONTACT US":"LIÊN HỆ"
   document.getElementById("tabbar_contact").href = `/contact${params}`
   document.getElementById("tabbar_news").innerHTML = getSearchParams("l")=="en"?"NEWS":"TIN TỨC"
   document.getElementById("tabbar_news").href = `/news${params}`
   document.getElementById("tabbar_recruitment").innerHTML = getSearchParams("l")=="en"?"RECRUITMENT":"TUYỂN DỤNG"
   document.getElementById("tabbar_recruitment").href = `/recruitment${params}`
    if (document.getElementById("title_category")){
        document.getElementById("title_category").innerHTML =  getSearchParams("l")=="en"?`LIST OF ${results.length} HIGHLIGHTS OF FABRICS`:`DANH SÁCH ${results.length} LOẠI VẢI NỔI BẬT`
        document.getElementById("hint_category").innerHTML = getSearchParams("l")=="en"?`Products that fully meet the needs of customers`:`Sản phẩm đáp ứng đầy đủ nhu cầu lựa chọn cho khách hàng`
        document.getElementById("title_product").innerHTML =  getSearchParams("l")=="en"?`NEW PRODUCT`:`SẢN PHẨM MỚI`
        document.getElementById("hint_product").innerHTML = getSearchParams("l")=="en"?`Products that fully meet the needs of customers`:`Sản phẩm đáp ứng đầy đủ nhu cầu lựa chọn cho khách hàng`
        document.getElementById("title_about").innerHTML =  getSearchParams("l")=="en"?`ABOUT US`:`GIỚI THIỆU VỀ CHÚNG TÔI`
        document.getElementById("title_news").innerHTML =  getSearchParams("l")=="en"?`FABRIC AND FASHION NEWS`:`TIN TỨC VỀ VẢI VÀ THỜI TRANG`
        document.getElementById("title_review").innerHTML =  getSearchParams("l")=="en"?`CUSTOMER REVIEW`:`ĐÁNH GIÁ KHÁCH HÀNG`
        document.getElementById("hint_review").innerHTML = getSearchParams("l")=="en"?`Customer comments for our products`:`Bình luận của khách hàng cho sản phẩm của chúng tôi`
    }else 
    if (document.getElementById("page_title_about")){
    document.getElementById("page_title_about").innerHTML = getSearchParams("l")=="en"? data.profile.en:data.profile.vn
    } else if (document.getElementById("page_title_contact")){
        document.getElementById("page_title_contact").innerHTML = getSearchParams("l")=="en"? "Contact Us":"Liên Hệ Với Chúng Tôi"
    } else if (document.getElementById("page_title_news")){
        document.getElementById("page_title_news").innerHTML = getSearchParams("l")=="en"? data.news.en:data.news.vn
    }else if (document.getElementById("page_title_recruitment")){
        document.getElementById("page_title_recruitment").innerHTML = getSearchParams("l")=="en"? data.recruitment.en:data.recruitment.vn
    }else if (document.getElementById("page_title_product")){
        document.getElementById("page_title_product").innerHTML = getSearchParams("l")=="en"? "PRODUCT PORTFOLIO":"DANH MỤC SẢN PHẨM"
    }else if (document.getElementById("page_hint_product")){
        document.getElementById("page_hint_product").innerHTML = getSearchParams("l")=="en"? "RELATED PRODUCTS":"SẢN PHẨM LIÊN QUAN"
    }
    })
    
});



let data = {
    "navbar":{
        "tabbar":{
            "vn":["TRANG CHỦ","GIỚI THIỆU","SẢN PHẨM","LIÊN HỆ","TIN TỨC","TUYỂN DỤNG"],
            "en":["HOME","ABOUT US","PRODUCT","CONTACT US","NEWS","RECRUITMENT"]
        }
    },
    "home":{
        "vn":[" DANH SÁCH 0 LOẠI VẢI NỔI BẬT","Đáp ứng các loại vải theo nhu cầu của khách hàng","Sản Phẩm","Công Ty Li Liang Việt Nam chuyên cung cấp các loại vải Trung Quốc, đa dạng về màu sắc cũng như chất liệu như: Nylon, Cotton, Polyester, Spandex, Pique, Bamboo,...","TIN MỚI","TIN TỨC VỀ THỜI TRANG","ĐÁNH GIÁ KHÁCH HÀNG","Trải nghiệm và đánh giá của các khách hàng"],
        "en":["TOP SELLING FABRICS","Satisfy the fabrics according to the needs of customers","Product","Li Liang Vietnam Company specializes in providing Chinese fabrics, diverse in colors and materials such as: Nylon, Cotton, Polyester, Spandex, Pique, Bamboo,...","NEWS","NEWS ABOUT FASHION","CUSTOMER REVIEWS","Testimonials and reviews from customers"]
    },
    "contact":{
        "vn":["Liên Hệ Với Chúng Tôi","Tên của bạn","Số điện thoại liên lạc","Địa chỉ của bạn","Ghi chú","Xác nhận"],
        "en":["Contact Us","Your name","Phone number","Your address","Note","Submit"]
    },
    "profile":{
        "vn":"Giới Thiệu Về VẢI ĐỨC VIÊN",
        "en":"About DUC VIEN FABRIC"
    },
    "news":{
        "vn":"Tin tức mới nhất",
        "en":"News"
    },
    "recruitment":{
        "vn":"TIN TỨC TUYỂN DỤNG",
        "en":"RECRUITMENT NEWS"
    }
}

function getSearchParams(k){
    var p={};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
    return k?p[k]:p;
   }
