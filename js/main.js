$(document).ready(function () {

    console.log("document ready...")

    $("#searchGifs").click(function (event) {

        //prevents page from reloading on ajax call
        event.preventDefault(); 
        
        var url = "http://api.giphy.com/v1/gifs/search?";
        var params = $("#searchForm").serialize(); 
        var req = url + params + "&limit=8";
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
            var gif = "";
            for (i in gifs){
                gif += '<img class="mediaImg" src="'+ gifs[i].images.original.url +'" alt="' + gifs[i].title + '"/>\n';
            };

            $("#gifOutput").html(gif);
        });
    });
});
