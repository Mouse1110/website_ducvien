$(function() {
    $.get(`${document.location.origin}/client/category`,function(results){
        console.log(results)
        results.forEach(element => {
            $('#category').append(`<div class="px-2">
            <span style="font-style: normal;
            font-weight: 700;
            font-size: 14px;
            color: #637281;
            line-height: 30px;">${element.name}</span>
        </div>`)
        });
    })

    $.get(`${document.location.origin}/client/product`,function(results){
        console.log(results)
        list = results
        results.forEach((element,index) => {
            $('#product-list').append(`<div class="col-lg-4 col-md-4 col-6" >
            <div class="item py-2" style="width: 100%;">
              <img src=" ${element.image_fabric}" width="100%" height="300px" style="object-fit: cover;">
              <a href="/product/1/data/1" class="mt-4" style="font-style: normal;
              font-weight: 700;
              font-size: 14px;
              line-height: 22px;
              letter-spacing: 0.1em;color:black;">
              ${element.name_fabric}
              </a>
            </div>
          </div>`)
        });
    })
    
});