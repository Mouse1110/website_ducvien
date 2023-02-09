
$(document).ready(async function(){
    $.get(`/router/news`,function(results){
        console.log(results)
      if (results)  document.getElementById('list').innerHTML = ''
        results.forEach(e=>{
            let btn_update = $(`<td>
            <button type="button" class="btn btn-outline-secondary">Chỉnh sửa</button>
        </td>`).click(function(){
            window.location = `/news/put?id=${e._id}`
        })
            let btn_delete = $(`<td>
            <button type="button" class="btn btn-outline-secondary">Xóa</button>
        </td>`).click(function(){
            $.ajax({
                url: `/router/news/${e._id}`,
                type: 'DELETE',
                success: function(result) {
                    // Do something with the result
                    document.location = "/news"
                }
            });
        })
          let example =  $(`<tr></tr>`).append(`<td>
          <img src="${e.image}" alt="..." class="img-thumbnail" width="80">
      </td>`,` <td>${e.name.vn}</td>`,`<td>${e.content.en}</td>`,btn_update,btn_delete)
        example.appendTo($('#list'))
        })

        
    })
    
    $('#btnAddFormProduct').click(function(){
        window.location = '/news/post'
    })
  });