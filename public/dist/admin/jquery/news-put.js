
$(document).ready(async function(){
  
    $.get(`/router/news`,function(results){
      results.forEach(element => {
        if (element._id == getSearchParams("id")){
          $('#name_vn').val(element.name.vn);
          $('#name_en').val(element.name.en);
          $('#name_zh').val(element.name.zh);
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
    })
      $('#form').submit(function(eventObj) {
          $(this).append(`<input type="hidden" name="id" value="${getSearchParams("id")}" />`);
          return true;
      });
    });
  
  
    function getSearchParams(k){
      var p={};
      location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
      return k?p[k]:p;
     }
   