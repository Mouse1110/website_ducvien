$(function() {
    let sub = getSearchParams("l") == "en" ? "l=en" : "l=vn"

      $.get(`${document.location.origin}/client/profile?${sub}`,function(result){
            document.getElementById("about-more").innerHTML = result.content
         
      })
      
  });
  
  
  function getSearchParams(k){
    var p={};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
    return k?p[k]:p;
   }
  