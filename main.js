
$.ajax({
    type: "GET",
    url: "https://api.unsplash.com/photos/random/",
    data: {
        client_id: "ewm3l0F_rrkdYnCojiFLn3aAK2JfBb5GNOb448WAkMU",
        orientation: 'landscape',
        count: 12
    },
    dataType: "json",
    success: function (poto) {
        $.each(poto, function (i, p) {
            $("#foto").append(`<div class="h-15 aspect-[4/3] group relative overflow-hidden">
                                   <div class="w-full h-full bg-[url(${p.urls.small})] bg-cover bg-center group-hover:scale-125 transition-all duration-500 absolute"></div> 
                               </div`)
        });
    }
});