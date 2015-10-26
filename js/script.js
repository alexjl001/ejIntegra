function clima(){
				$(document).ready(function(){
				$.getJSON("http://api.openweathermap.org/data/2.5/group?id=3530597&units=metric&appid=bd82977b86bf27fb59a04b61b657fb6f&callback=?",function(result){
//    alert("City: "+result.list[0].main.temp);
  
	    // alert("City: "+result.list[0].name);
  
		var city= result.list[0].name;
    
  		// alert(city);
    	
  //  	alert("Weather: "+ result.list[0].weather[0].description);
    
//      var estadoTiempo= result.list[0].weather[0].description);
      var estadoTiempo= result.list[0].weather[0].description;
     // var tempActual= result.list[0].weather[0].main;

     var tempActual= result.list[0].main.temp;


      // echo "<h3> Ciudad: ".$city."</h3>";
        //$('.message').html("it's feels cold, get a jacket");
        //$('.city').html(response.list[0].name);
        //$('.country').html('( </span><span>'+response.list[0].sys.country+'</span><span> )');
        //$('.temp').html('<span>'+response.list[0].main.temp+'</span><span class="t">* C</span>');
       
    document.getElementById('ciudad').innerHTML = "Ciudad: " +city;
    document.getElementById('estadoTiempo').innerHTML = "Estado actual: " +estadoTiempo;
    document.getElementById('tempActual').innerHTML = "Temperatura actual: " +tempActual;


//     success: function( result ) {
  //  $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
  // } 
    	
    });
});
}

/*
// THIS FAILS - CALL DOES NOT SEEM TO BE SENT - Note the Caret in the querystring:
  $.getJSON("http://api.openweathermap.org/data/2.5/group?id=3530597&units=metric&appid=bd82977b86bf27fb59a04b61b657fb6f&callback=?", function (data) {
        alert(" DOES NOT WORK - IS IT THE CARET? " + data.base) });

//THIS SUCCEEDS - Only difference is the Caret was removed:
  $.getJSON("http://api.openweathermap.org/data/2.5/group?id=3530597&units=metric&appid=bd82977b86bf27fb59a04b61b657fb6f&callback=?", function (data) {
        alert(" THIS WORKS " + data.base) });
*/
/*
function gen_output(ad_content){
  document.getElementById('mb_ad').innerHTML = city;
}*/