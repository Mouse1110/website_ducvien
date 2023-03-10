
$(document).ready(async function(){
    $('#list').sortable();
    $.get(`/router/category`,function(results){
        console.log(results)
        categorys = results
      if (results)  document.getElementById('list').innerHTML = ''
        results.forEach(e=>{
            let btn_update = $(`<td>
            <button type="button" class="btn btn-outline-secondary">Chỉnh sửa</button>
        </td>`).click(function(){
            window.location = `/category/put?id=${e._id}`
        })
            let btn_delete = $(`<td>
            <button type="button" class="btn btn-outline-secondary">Xóa</button>
        </td>`).click(function(){
            $.ajax({
                url: `/router/category/${e._id}`,
                type: 'DELETE',
                success: function(result) {
                    // Do something with the result
                    document.location = "/"
                }
            });
        })
          let example =  $(`<tr></tr>`).append(`<td>
            <img src="/${e.image}" alt="..." class="img-thumbnail" width="80">
        </td>`,` <td>${e.name.vn}</td>`,btn_update,btn_delete)
        example.appendTo($('#list'))
        })

        
    })

    $('#btnAddFormProduct').click(function(){
        window.location = '/category/post'
    })
    categorys = []
    const btnUpdate = document.querySelector('#btnUpdate');
    btnUpdate.addEventListener('click', function(e){
        let list = []
        let table = document.getElementById("category")

        for (let i = 1;i<table.rows.length;i++){
            var image = $(table.rows[i].cells[0].innerHTML)
            
           let data = categorys.find(e=>document.location.origin + "/" + e.image == image[0].src)
            if (data) list.push(data)
        }
        console.log(list)
         $.post(`/router/category/sort`,{ids:list.map(e=>e._id)},function(result){
            window.location = '/'
        })
       
    })
  });