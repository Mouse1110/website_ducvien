$(document).ready(function(){
    let sub = getSearchParams("l") == "en" ? "l=en" : "l=vn"
    $.get(`${document.location.origin}/client/news?${sub}`,function(results){
        console.log(results)
        results.forEach(element => {
            let item = $(`<div class="col-lg-4 col-md-6 col-sm-12;width: 18rem;">
    <div class="card" style="border: none;border-radius: 0;">
        <img class="card-img-top p-2"  src="/${element.image}" alt="Card image cap">
        <div class="card-body">
            <p class="card-text"  style="font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 40px;
            color: #276C9D;">Tin Tức || Vải Đức Viên</p>
            <a href="./news/index?id=${element._id}" class="card-title" style="font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 40px;
                text-decoration:none;
                color: #000;">${element.name}</a>
            <p class="card-text" style="font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 30px;
                text-align: justify;">${element.content.substring(0,250)}</p>
         
    </div>
    </div>
</div>`)
            $('#listt').append(item);
        });
        
    })
    
})

function getSearchParams(k){
    var p={};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
    return k?p[k]:p;
   }

