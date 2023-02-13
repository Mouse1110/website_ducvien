$(document).ready(function(){
    let sub = getSearchParams("l") == "en" ? "l=en" : "l=vn"
    $.get(`${document.location.origin}/client/recruitment?${sub}`,function(results){
        console.log(results)
        results.forEach(element => {
            let item = $(`<div class="col-12 px-4">
            <div class="card" style="border: none;border-radius: 0;width: 100%;">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <img class="card-img p-2" height="200px" src="/${element.image}" alt="Card image cap">
                    </div>
                    <div class="card-body col-md-8 col-sm-12">
                        <p class="card-text"  style="font-style: normal;
                        font-weight: 700;
                        font-size: 14px;
                        line-height: 40px;
                        color: #276C9D;">Tuyển dụng || Đức Viên</p>
                       <a href="/recruitment/index?id=${element._id}" class="card-title" style="font-style: normal;
                       font-weight: 700;
                       font-size: 18px;
                       line-height: 40px;
                       text-decoration:none;
                       color: #000;">${element.name.substring}</a>
                        <p class="card-text" style="font-style: normal;
                            font-weight: 500;
                            font-size: 14px;
                            line-height: 30px;
                            text-align: justify;">Liên hệ ngay với chúng tôi để biết thêm chi tiết</p>
                    </div>
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

