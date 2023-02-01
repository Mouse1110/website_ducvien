
function handleSelect(elm)
{
   window.location = `/${elm.value}`;
}
$(document).ready(function() {
    let arr = []
    $.get(`${document.location.origin}/client/category`,function(results){
        console.log(results)
        arr = results
    //    document.getElementById('category_count').innerHTML = results.length
    //     results.forEach(element => {
    //       console.log(element._id)
    //       let item = $(`<div class="item px-4" style="width: 100%;">
    //       <h2 style="font-style: normal;
    //       font-weight: 700;
    //       font-size: 16px;
    //       line-height: 30px;text-align: center;">
    //       ${element.name}
    //       </h2>
    //       <div style="width: 100%;height: 1px;background-color: #000000;" class="my-2"></div>
    //       <img src="${element.image}" height="250px" width="100%" style="object-fit: cover;border-radius: 0px 0px 40px 40px;">
    //     </div>`).on("click",function(){
    //        window.location = `/product?c=${element._id}`
    //     })
    //         $('#category').append(item)
    //     })
    })
    $('.js-example-basic-multiple').select2();
    $('#search').on('keypress',function(e) {
        if(e.which == 13) {
           if ($('#search').val().length>0){
            let index = $.inArray($('#search').val().toLowerCase(), arr.map(e=>e.name.toLowerCase()))
            if (index>-1){
            window.location = `/product?c=${arr[index]._id}`
            } else window.location = `/product`
           }
        }
    });
    $('#btn_search').click(function(){
        let index = $.inArray($('#search').val().toLowerCase(), arr.map(e=>e.name.toLowerCase()))
        if (index>-1){
            window.location = `/product?c=${arr[index]._id}`
        } else window.location = `/product`
    })
});


function arrayContains(needle, arrhaystack)
{
    return (arrhaystack.indexOf(needle) > -1);
}