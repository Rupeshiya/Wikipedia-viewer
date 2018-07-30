$(document).ready(function(){

  $("#search").click(function(){

    var searchterm = $("#in").val();


    var url= "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchterm +"&format=json&callback=?";

    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType:"json",
      success: function(data){
      //console.log(data);

      for(var i=0;i<data[1].length;i++)
      {
        $("#ans").append("<li><a href=" + data[3][i] + ">" + data[1][i] + "</a><p>"+ data[2][i] + "</p></li>" );
      }
        $("#in").val(" ");
      },
      error: function(error){
      alert("error");
      }
       });
    });
    $("#in").keypress(function(e){
      if(e.which===13){
        $("#search").click();
      }
    });

});
