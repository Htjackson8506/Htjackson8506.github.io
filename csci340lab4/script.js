
$(document).ready(function() {
    $('#duckClicker').click(function() {
        $.ajax({
            url: 'https://random-d.uk/api/quack',
            dataType: 'jsonp',
            success: function(results) {
                console.log(results["url"]);
                if (results["url"].endsWith(".mp4")) {
                    $('#duckImage').attr("src", "images/blank.png");
                } else {
                    $('#duckImage').attr("src", results["url"]);
                }
            },
            error: function(xhr,status,error) {
                console.log(error);
            }
    });
});
});