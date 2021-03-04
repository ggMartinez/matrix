$( document ).ready(function() {

    $( "#od1" ).click(function() {
        $("#content").empty();
        $("#content").html('<iframe src="/rockfa/s01/ondemand/index.html" scrolling=no width=500 height=850 frameborder="0"></iframe>');
    });

    $( "#p1" ).click(function() {
        $("#content").empty();
        $("#content").html('          <iframe src="/rockfa/s01/podcast/index.html" scrolling=no width=500 height=850 frameborder="0"></iframe>');
    });
});