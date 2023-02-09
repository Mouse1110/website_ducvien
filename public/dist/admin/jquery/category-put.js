
$(document).ready(async function(){
  
  $.get(`/router/category`,function(results){
    results.forEach(element => {
      if (element._id == getSearchParams("id")){
        $('#productNameVN').val(element.name.vn);
        $('#productNameEN').val(element.name.en);
        $('#productNameZH').val(element.name.zh);
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
 