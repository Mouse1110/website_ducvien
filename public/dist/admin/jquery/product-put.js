
$(document).ready(async function(){
    let id = ''
    $('.dropdown-toggle').dropdown();
   
      $('#form').submit(function(eventObj) {
        $(this).append(`<input type="hidden" name="id_fabric" value="${id}" />`);
          $(this).append(`<input type="hidden" name="id" value="${getSearchParams("id")}" />`);
          return true;
      });
      $.get(`/router/product`,function(r){
        let it;
        r.forEach(e => {
          if (e._id == getSearchParams("id")){
            if (e._id==getSearchParams("id")) it = e
            $('#nameFabricVN').val(e.name_fabric.vn);
            $('#nameFabricEN').val(e.name_fabric.en);
            $('#nameFabricZH').val(e.name_fabric.zh);
            $('#nameSampleVN').val(e.name_sample.vn);
            $('#nameSampleEN').val(e.name_sample.en);
            $('#nameSampleZH').val(e.name_sample.zh);
            ClassicEditor
          .create( document.querySelector( '#content_vn' ) )
          .then( editor => {
            editor.setData(element.content.vn)
            } )
          ClassicEditor
          .create( document.querySelector( '#content_en' ) )
          .then( editor => {
            editor.setData(element.content.en)
            } )
          ClassicEditor
          .create( document.querySelector( '#content_zh' ) )
          .then( editor => {
            editor.setData(element.content.zh)
            } )
          }
        });
        $.get(`/router/category`,function(results){
            console.log(results)
           
            results.forEach(element => {
                if (it.id_fabric==element._id) $('#dropdownMenuButton').html(element.name.vn);
                let item = $(`<button type="button" class="dropdown-item">${element.name.vn}</button>`).click(function(){
                    id = element._id
                    $('#dropdownMenuButton').html(`${element.name.vn}`)
                    $(".dropdown-menu").hide()
                })
                $('.dropdown-menu').append(item)
               
            });
            console.log(it)
           
        })
      })
      
    $('.dropdown-toggle').click(function(){
        $(".dropdown-menu").show()
    })
    });
  
  
    function getSearchParams(k){
      var p={};
      location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
      return k?p[k]:p;
     }
   