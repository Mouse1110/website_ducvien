$(document).ready(function(){
    let id = getSearchParams("id")
    let sub = getSearchParams("l") == "en" ? "l=en" : "l=vn"
    $.get(`${document.location.origin}/client/recruitment/${id}?${sub}`,function(element){
        $('#name').html(element.name)
        $('#content').html(element.content)
        $('#image').html(`<img src="/${element.image}" style="width: 50%;" alt="" srcset="">`)
    })
    $.get(`${document.location.origin}/client/recruitment?${sub}`,function(results){
        console.log(results)
        results.forEach(element => {
            let item = $(`<div class="item">
            <div class="item-news">
                <img class="item-news-img" src="/${element.image}" alt="">
                <div class="contain-item-news">
                    <div><span>Tin tức Đức Viên</span></div>
                    <a href="/recruitment/index?id=${element._id}" class="card-title" style="font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 40px;
                    text-decoration:none;
                    color: #000;">${element.name}</a>
                    <p>Liên hệ với chúng tôi để biết thêm chi tiết</p>
                </div>
            </div>
        </div>`)
            $('#list').append(item);
            
        });
        $('#list').owlCarousel({
            navigation : true,
            margin:10,
            nav:true,
            loop:true,
            autoplay:true,
            dots:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                900:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
        })
        
    })
})

function getSearchParams(k){
    var p={};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
    return k?p[k]:p;
   }

