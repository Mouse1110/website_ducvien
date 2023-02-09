$(document).ready(function(){
    let id = ''
    $('.dropdown-toggle').dropdown();
    $.get(`/router/category`,function(results){
        console.log(results)
        results.forEach(element => {
            let item = $(`<button type="button" class="dropdown-item">${element.name.vn}</button>`).click(function(){
                id = element._id
                $('#dropdownMenuButton').html(`${element.name.vn}`)
                $(".dropdown-menu").hide()
            })
            $('.dropdown-menu').append(item)
        });
    })
    $('.dropdown-toggle').click(function(){
        $(".dropdown-menu").show()
    })

    $('#form').submit(function(eventObj) {
        $(this).append(`<input type="hidden" name="id_fabric" value="${id}" />`);
        return true;
    });
    
})