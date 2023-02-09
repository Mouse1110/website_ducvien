
$(document).ready(async function(){
    $.get(`/router/product`,function(results){
        console.log(results)
      if (results)  document.getElementById('list').innerHTML = ''
        results.forEach(e=>{
            let btn_update = $(`<td>
            <button type="button" class="btn btn-outline-secondary">Chỉnh sửa</button>
        </td>`).click(function(){
            window.location = `/product/put?id=${e._id}`
        })
            let btn_delete = $(`<td>
            <button type="button" class="btn btn-outline-secondary">Xóa</button>
        </td>`).click(function(){
            $.ajax({
                url: `/router/product/${e._id}`,
                type: 'DELETE',
                success: function(result) {
                    // Do something with the result
                    document.location = "/product"
                }
            });
        })
          let example =  $(`<tr></tr>`).append(`<td>
          <img src="/${e.image_fabric}" alt="..." class="img-thumbnail" width="80">
      </td>`,`<td>${e.name_fabric.vn}</td>`,`<td><img src="/${e.image_sample}" alt="..." class="img-thumbnail" width="80"></td>`,`<td>${e.name_sample.vn}</td>`,btn_update,btn_delete)
        example.appendTo($('#list'))
        })

        
    })

    
    $('#btnAddFormProduct').click(function(){
        window.location = '/product/post'
    })
  });