$(function() {
  let sub = getSearchParams("l") == "en" ? "l=en" : "l=vn"
    $.get(`${document.location.origin}/client/banner?l=${sub}`,function(results){
        console.log(results)
        results.forEach(element => {
            $('#banner').append(`<div class="item" style="width: 100%;">
            <img src="${element}" width="100%" alt="" sizes="" srcset="">
          </div>`)
        });
        $('#banner').owlCarousel({
            loop:true,
            margin:10,
            autoplay:true,
            dots:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                }
            }
        })
    })
    $.get(`${document.location.origin}/client/category?${sub}`,function(results){
        console.log(results)
        results.forEach(element => {
          console.log(element.name)
          let item = $(`<div class="item px-4" style="width: 100%;">
          <h2 style="font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 30px;text-align: center;">
            ${element.name}
          </h2>
          <div style="width: 100%;height: 1px;background-color: #000000;" class="my-2"></div>
          <img src="${element.image}" height="250px" width="100%" style="object-fit: cover;border-radius: 0px 0px 40px 40px;">
        </div>`).on("click",function(){
           window.location = `/product?c=${element._id}&${sub}`
        })
            $('#category').append(item)
        })
        $('#category').owlCarousel({
            navigation : true,
          
            margin:10,
            nav:true,
            autoplay:true,
            dots:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                900:{
                    items:5
                },
                1200:{
                    items:6
                }
            }
        })

       
    })

    let list = []
    let seemore = false

    $.get(`${document.location.origin}/client/product?${sub}`,function(results){
        console.log(results)
        list = results
        results.forEach((element,index) => {
          let item = $(`<div class="col-lg-3 col-md-4}" >
          <div class="item py-2" style="width: 100%;">
          <div style="width: 62px;height: 1px;background-color: #000000;" class="my-2"></div>
          <h2 style="font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 22px;
          letter-spacing: 0.1em;">
          ${element.name_sample}
          </h2>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src=" ${element.image_sample}" height="100%" width="100%" style="object-fit: cover;">
              </div>
                <div class="flip-card-back" style="height: 300px;">
                  <div style="width: 100%;height: 100%; 
                  background-image: url(' ${element.image_fabric}');
                  background-repeat: no-repeat;
                  background-attachment: fixed;
                  background-size: contain;
                  ">
                    <div style="width: 100%;height: 100%; background-color: rgba(255, 255, 255, 0.61);padding:70px 0;">
                      <a href="/product/index?c=${element.id_fabric}&p=${element._id}" style ="font-style: normal;
                      font-weight: 700;
                      font-size: 18px;
                      text-decoration:none;
                     
                      line-height: 30px;color:black"> ${element.name_fabric}</a> 
                    </div>
                  </div>
                </div>
            </div>
          </div>
          
        </div>
      </div>`)
            $('#product-list').append(item)
        });
    })

    $.get(`${document.location.origin}/client/profile?${sub}`,function(result){

        document.getElementById('about-text').innerHTML = result.content
    })

    $.get(`${document.location.origin}/client/news?${sub}`,function(results){
      console.log(results)
      results.forEach(element => {
          let item = $(`<div class="item mx-4">
          <div class="card" style="border-radius: 0;">
              <img class="card-img-top pb-2"  src="dist/files/icons/company.jpg" alt="Card image cap">
              <div class="card-body">
                <p class="card-text"  
                style="font-style: normal;
                  font-weight: 700;
                  font-size: 14px;
                  line-height: 40px;
                  color: #276C9D;">Tin T???c || ?????c Vi??n</p>
                <a href="/news/index?id=${element._id}" class="card-title" style="font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 40px;
                    text-decoration:none;
                    color: #000;">${element.name}</a>
                <p class="card-text" style="font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 30px;
                    text-align: justify;">${element.content.substring(0,250)}</p>
               
          </div>
        </div>
        
      </div>`)
          $('#news').append(item);
      });
      $('#news').owlCarousel({
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
    
});


function getSearchParams(k){
  var p={};
  location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
  return k?p[k]:p;
 }
