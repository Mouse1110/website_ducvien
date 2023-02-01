$(function() {

    $.get(`${document.location.origin}/client/category`,function(results){
        console.log(results)
        results.forEach(element => {
            $('#dropdown-nav').append(`<li><a class="dropdown-item" href="/product?c=${element._id}">${element.name}</a></li>`)
        });
    })

});