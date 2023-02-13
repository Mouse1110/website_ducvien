$(function() {
    let sub = getSearchParams("l") == "en" ? "l=en" : "l=vn"
    let categoru_params = getSearchParams('c')
    let product_params = getSearchParams('p')
    $.get(`${document.location.origin}/client/product?${sub}`,function(results){
        console.log(results)
        list = results
        results.forEach((element,index) => {
           if (element.id_fabric==categoru_params){
            $('#product-list').append(`<div class="item py-2" style="width: 100%;">
            <div style="width: 62px;height: 1px;background-color: #000000;" class="my-2"></div>
            <h2 style="font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: 0.1em;">
            ${element.name_fabric}
            </h2>
            <img src="${element.image_fabric}" height="300px" width="100%" style="object-fit: cover;">
          </div>`).find('div').on("click", function()
          {
              window.location = `/product/index?c=${categoru_params}&p=${element._id}&${sub}`
          }).end();
           }
        });
        $('#product-list').owlCarousel({
            navigation : true,
            margin:10,
            nav:true,
            autoplay:true,
            dots:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                900:{
                    items:5
                }
            }
        })
    })
    if (product_params){
        $.get(`${document.location.origin}/client/product/${product_params}?${sub}`,function(result){
            console.log(result)
            let anh1 = $(`<img src="${result.image_fabric}" height="120px" width="120px" style="object-fit: cover;">`)
            let anh2 = $(`<img src="${result.image_sample}" height="120px" width="120px" style="object-fit: cover;">`)
            let anh_duoi1 = $(`<img  src="${result.image_fabric}" height="80px" width="80px" style="object-fit: cover;">`)
            let anh_duoi2 = $(`<img  src="${result.image_sample}" height="80px" width="80px" style="object-fit: cover;">`)

            $('#anh1').html(anh1).find('img').on("click", function()
            {
                console.log('hello')
                $('#anh_chinh').html($(`<img class="zoom" src="${result.image_fabric}" height="520px" width="100%" style="object-fit: cover;">`)).find('img').on("click", zoom).end();
        
            }).end();
            $('#anh2').html(anh2).find('img').on("click", function()
            {
                console.log('hello')
                $('#anh_chinh').html($(`<img class="zoom" src="${result.image_sample}" height="520px" width="100%" style="object-fit: cover;">`)).find('img').on("click", zoom).end();
        
            }).end();
        
            $('#anh_chinh').html($(`<img class="zoom" src="${result.image_fabric}" height="520px" width="100%" style="object-fit: cover;">`)).find('img').on("click", zoom).end();
            $('#anh_duoi1').html(anh_duoi1).find('img').on("click", function()
            {
                console.log('hello')
                $('#anh_chinh').html($(`<img class="zoom" src="${result.image_fabric}" height="520px" width="100%" style="object-fit: cover;">`)).find('img').on("click", zoom).end();
        
            }).end();
        
            $('#anh_duoi2').html(anh_duoi2).find('img').on("click", function()
            {
                console.log('hello')
                $('#anh_chinh').html($(`<img class="zoom" class="zoom" src="${result.image_sample}" height="520px" width="100%" style="object-fit: cover;">`)).find('img').on("click", zoom).end();
        
            }).end();
            

            $('#title_fabric').html(result.name_fabric)
            $('#content').html(result.content)
        })
    }
    
    
});

function zoom(){
    var zoom = false;
    var src = $(this).attr('src');
    var modal;
  
    function removeModal() {
      modal.remove();
      $('body').off('keyup.modal-close');
    }
    modal = $('<div>').css({
      background: 'RGBA(0,0,0,.5)',
      backgroundSize: 'contain',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: '10000',
      top: '0',
      left: '0',
      cursor: 'zoom-out',
      textAlign:'center'
    })
    var btn = $('<button>').css($( window ).width()<600?{'margin-top': '120px', 'margin-right': '20px','border':'none','background-color':'transparent'}:{'margin-top': '20px', 'margin-right': '20px','border':'none','background-color':'transparent'}).html('<i class="fa fa-times fa-3x" aria-hidden="true"></i>').click(function(){
      modal.remove();
  })
  btn.addClass("position-absolute top-0 end-0")
  btn.appendTo(modal)
  var image = $('<img>').attr("src", src).css($( window ).width()<600?{'width':'100%','margin-top':$( window ).height()*0.2}:{'height':'100%'}).click(function(){
    console.log("dbclick")
    zoom = !zoom
    zoom?$(this).addClass('zoom-full-hover'):$(this).removeClass('zoom-full-hover')
    
  }).dblclick(function() {
    console.log("dbclick")
    zoom = !zoom
    zoom?$(this).css({'-ms-transform':'scale(1.8)','-webkit-transform':'scale(1.8)','transform':'scale(1.8)',}):$(this).css({'-ms-transform':'','-webkit-transform':'','transform':'',})
  });
  image.appendTo(modal)
  image.addClass("zoom-full")
  modal.appendTo('body')

    //handling ESC
    $('body').on('keyup.modal-close', function(e) {
      if (e.key === 'Escape') {
        removeModal();
      }
    });
 }



function getSearchParams(k){
    var p={};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
    return k?p[k]:p;
   }
