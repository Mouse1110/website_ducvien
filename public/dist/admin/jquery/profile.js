
$(document).ready(async function(){
  
    $.get(`/router/profile`,function(element){
      $('#time_open').val(element.time_open)
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
    })
    });