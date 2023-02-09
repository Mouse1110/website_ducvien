
$(document).ready(async function(){
  
    $.get(`/router/profile`,function(element){
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