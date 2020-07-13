$(document).ready(function () {

    console.log("document ready...")

    $("#searchGifs").click(function (event) {

        event.preventDefault();
        var url = "http://api.giphy.com/v1/gifs/search?"
        var params = $("#searchForm").serialize(); //serialized portion of your code *see Ajax example
        var req = url + params + "&limit=10";
        console.log("calling... " + req )
        $.ajax( {
            url: req,
            type: "GET",
        })
        .then( function(response) {
            $.each(response.data, function (i, obj) {
                console.log("index", i, "obj", obj)

                let gifUrl = obj.images.original.url;
                let title = obj.title;
                // var gif = "";
                // gif += `<span><img src="${gifUrl}" alt="${title}" /></span>`
                $("#gifOutput").html(`<span><img src="${gifUrl}" alt="${title}" /></span>`);
    
             });
        }), function(err) {
            alert(err);
        }
    })
});
