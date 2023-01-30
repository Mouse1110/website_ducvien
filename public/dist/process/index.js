$(function() {
    // $( "td" ).hover(
    //     function() {
    //       $( this ).addClass( "hover" );
    //     }, function() {
    //       $( this ).removeClass( "hover" );
    //     }
    //   );
    $.get(`${document.location.origin}/client/banner`,function(results){
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
    $.get(`${document.location.origin}/client/category`,function(results){
        console.log(results)
       document.getElementById('category_count').innerHTML = results.length
        results.forEach(element => {
            $('#category').append(`<div class="item px-4" style="width: 100%;">
            <h2 style="font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 30px;text-align: center;">
            ${element.name}
            </h2>
            <div style="width: 100%;height: 1px;background-color: #000000;" class="my-2"></div>
      
            <img src="${element.image}" height="250px" width="100%" style="object-fit: cover;border-radius: 0px 0px 40px 40px;">
          </div>`)
        });
        $('#category').owlCarousel({
            navigation : true,
            loop:true,
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

    $.get(`${document.location.origin}/client/product`,function(results){
        console.log(results)
        list = results
        results.forEach((element,index) => {
            $('#product-list').append(`<div class="col-lg-3 col-md-4 ${(index+1)%3==0?"":"col-6"}" >
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
                    background-size: cover;
                    ">
                      <div style="width: 100%;height: 100%; background-color: rgba(255, 255, 255, 0.61);padding:20px 0;">
                        <a href="#" style ="font-style: normal;
                        font-weight: 700;
                        font-size: 18px;
                        line-height: 30px;color:black"> ${element.name_fabric}</a> 
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            
          </div>
        </div>`)
        });
    })

    $.get(`${document.location.origin}/client/profile`,function(result){

        document.getElementById('about-text').innerHTML = result.content
    })
    
});