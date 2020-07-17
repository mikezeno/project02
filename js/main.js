$(document).ready(function () {

    console.log("document ready...")

    $("#searchGifs").click(function (event) {

        //prevents page from reloading on ajax call
        //event.preventDefault(); 
        
        var url = "http://api.giphy.com/v1/gifs/search?";
        var params = $("#searchForm").serialize(); 
        var req = url + params;
        console.log("calling... " + req );

        // Call to server
        $.ajax({
            type: "GET",
            url: req
        })

        // Successful response
        .done( function(response) {
            console.log("Response data:", response);
            var gifs = response.data;
            var numGifs = response.pagination.count;
            var gif = "";
            for (i in gifs){
                gif += '<a target="_blank" href="'+ gifs[i].url +'"><img class="mediaImg" src="'
                + gifs[i].images.fixed_width_downsampled.url +'" alt="' + gifs[i].title + '"/></a>\n';
            };
            console.log(response.pagination.count);
            $("#numGifs").text(`Number of GIFs: ${numGifs}`);
            $("#gifOutput").html(gif);
        });
    });
});
