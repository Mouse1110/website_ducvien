
$(document).ready(async function(){
    $.get(`/router/banner`,function(results){
        console.log(results)
        categorys = results
      if (results)  document.getElementById('list').innerHTML = ''
        results.forEach(e=>{
        
            let btn_delete = $(`<td>
            <button type="button" class="btn btn-outline-secondary">Xóa</button>
        </td>`).click(function(){
            $.ajax({
                url: `/router/banner/${e._id}`,
                type: 'DELETE',
                success: function(result) {
                    // Do something with the result
                    document.location = "/banner"
                }
            });
        })
          let example =  $(`<tr></tr>`).append(`<td>
            <img src="/${e.image}" alt="..." class="img-thumbnail" width="80">
        </td>`,btn_delete)
        example.appendTo($('#list'))
        })

        
    })

    $('#btnAddFormProduct').click(function(){
        window.location = '/banner/post'
    })
  });