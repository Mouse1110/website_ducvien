$(function() {
    let categoru_params = getSearchParams('c')
    let sub = getSearchParams("l") == "en" ? "l=en" : "l=vn"
    $.get(`${document.location.origin}/client/category?${sub}`,function(results){
        console.log(results)
        results.forEach(element => {
            if (categoru_params==element._id){
                $('#category').append(` <div class="px-2">
                <img src="/dist/files/icons/or.png" height="24" alt="" srcset="">
                <span style="font-style: normal;
                font-weight: bold;
                font-size: 16px;
                color: #637281;
                line-height: 30px;">${element.name}</span>
            </div>`)
            document.getElementById('title-category').innerHTML = element.name
            } else 
            $('#category').append(`<div class="px-2">
            <a href="/product?c=${element._id}&${sub}" style="font-style: normal;
            font-weight: 700;
            font-size: 14px;
            color: #637281;
            text-decoration:none;
            line-height: 30px;">${element.name}</a>
        </div>`)
        });
    })

    $.get(`${document.location.origin}/client/product?${sub}`,function(results){
        console.log(results)
        list = results
        results.forEach((element,index) => {
            let item = $(`<div class="col-lg-4 col-md-4 col-6" >
            <div class="item py-2" style="width: 100%;">
              <img src=" ${element.image_fabric}" width="100%" height="300px" style="object-fit: cover;">
              <a href="/product/index?c=${categoru_params}&p=${element._id}&${sub}" class="mt-4" style="font-style: normal;
              font-weight: 700;
              font-size: 14px;
              line-height: 22px;
              text-decoration:none;
              padding-top:20px;
              letter-spacing: 0.1em;color:black;">
              ${element.name_fabric}
              </a>
            </div>
          </div>`).find('div').on("click", function()
          {
              window.location = `/product/index?c=${categoru_params}&p=${element._id}&${sub}`
          }).end();
            if (!categoru_params){
              
                $('#product-list').append(item)
            } else {
                if (element._id == categoru_params) {
                   
                    $('#product-list').append(item)
                }
            }
           
        });
    })
    
});

function getSearchParams(k){
    var p={};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
    return k?p[k]:p;
   }

