
$(document).ready(async function(){
    $.get(`/router/recruitment`,function(results){
        console.log(results)
      if (results)  document.getElementById('list').innerHTML = ''
        results.forEach(e=>{
            let btn_update = $(`<td>
            <button type="button" class="btn btn-outline-secondary">Chỉnh sửa</button>
        </td>`).click(function(){
            window.location = `/recruitment/put?id=${e._id}`
        })
            let btn_delete = $(`<td>
            <button type="button" class="btn btn-outline-secondary">Xóa</button>
        </td>`).click(function(){
            $.ajax({
                url: `/router/recruitment/${e._id}`,
                type: 'DELETE',
                success: function(result) {
                    // Do something with the result
                    document.location = "/recruitment"
                }
            });
        })
          let example =  $(`<tr></tr>`).append(`<td>
          <img src="${e.image}" alt="..." class="img-thumbnail" width="80">
      </td>`,` <td>${e.name.vn.substring(0,50)}</td>`,`<td>${e.content.vn.substring(0,50)}</td>`,btn_update,btn_delete)
        example.appendTo($('#list'))
        })

        
    })

    
    $('#btnAddFormProduct').click(function(){
        window.location = '/recruitment/post'
    })
  });