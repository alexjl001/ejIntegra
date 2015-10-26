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



function laHora(){
        $(document).ready(function(){




  $.getJSON("http://api.timezonedb.com/?zone=America/Mexico_City&format=json&key=KZJ77KJBIFW6&callback=?",function(result){


  //alert("La hora: "+result.timestamp);

  var horaUnix = result.timestamp;

  var timeTo = horaUnix;
  var date = new Date(timeTo*1000);
  var iso = date.toISOString().match(/(\d{2}:\d{2}:\d{2})/)
  //alert(iso[1]);


    document.getElementById('CiudadMexico').innerHTML = "Hora en Ciudad de México, México: " +iso[1];






        });

  $.getJSON("http://api.timezonedb.com/?zone=America/Los_Angeles&format=json&key=KZJ77KJBIFW6&callback=?",function(result){


  //alert("La hora: "+result.timestamp);

  var horaUnix = result.timestamp;

  var timeTo = horaUnix;
  var date = new Date(timeTo*1000);
  var iso = date.toISOString().match(/(\d{2}:\d{2}:\d{2})/)
  //alert(iso[1]);


    document.getElementById('LosAngeles').innerHTML = "Hora en Los Angeles, EEUU: " +iso[1];






        });






          
        $.getJSON("http://api.timezonedb.com/?zone=America/Toronto&format=json&key=KZJ77KJBIFW6&callback=?",function(result){


  //alert("La hora: "+result.timestamp);

  var horaUnix = result.timestamp;

  var timeTo = horaUnix;
  var date = new Date(timeTo*1000);
  var iso = date.toISOString().match(/(\d{2}:\d{2}:\d{2})/)
  //alert(iso[1]);


    document.getElementById('Toronto').innerHTML = "Hora en Toronto, Canadá: " +iso[1];



        });




  $.getJSON("http://api.timezonedb.com/?zone=Europe/Paris&format=json&key=KZJ77KJBIFW6&callback=?",function(result){


  //alert("La hora: "+result.timestamp);

  var horaUnix = result.timestamp;

  var timeTo = horaUnix;
  var date = new Date(timeTo*1000);
  var iso = date.toISOString().match(/(\d{2}:\d{2}:\d{2})/)
  //alert(iso[1]);


    document.getElementById('Paris').innerHTML = "Hora en Paris, Francia: " +iso[1];


        });

      
    });

}




function climaParis(){
        $(document).ready(function(){
        $.getJSON("http://api.openweathermap.org/data/2.5/group?id=2988507&units=metric&appid=bd82977b86bf27fb59a04b61b657fb6f&callback=?",function(result){

  
    var city= result.list[0].name;
    

     
      var estadoTiempo= result.list[0].weather[0].description;
     // var tempActual= result.list[0].weather[0].main;

     var tempActual= result.list[0].main.temp;


    document.getElementById('ciudad').innerHTML = "Ciudad: " +city;
    document.getElementById('estadoTiempo').innerHTML = "Estado actual: " +estadoTiempo;
    document.getElementById('tempActual').innerHTML = "Temperatura actual: " +tempActual;

      
    });
});
}


function climaNY(){
        $(document).ready(function(){
        $.getJSON("http://api.openweathermap.org/data/2.5/group?id=5128581&units=metric&appid=bd82977b86bf27fb59a04b61b657fb6f&callback=?",function(result){

  
    var city= result.list[0].name;
    

     
      var estadoTiempo= result.list[0].weather[0].description;
     // var tempActual= result.list[0].weather[0].main;

     var tempActual= result.list[0].main.temp;


    document.getElementById('ciudad').innerHTML = "Ciudad: " +city;
    document.getElementById('estadoTiempo').innerHTML = "Estado actual: " +estadoTiempo;
    document.getElementById('tempActual').innerHTML = "Temperatura actual: " +tempActual;

      
    });
});
}




function noticiasHoy(){
        $(document).ready(function(){
        $.getJSON("http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&q=http%3A%2F%2Fnews.google.com%2Fnews%3Foutput%3Drss&callback=?",function(result){

  //alert("Encabezado: "+result.responseData.feed.title);
  //  var city= result.list[0].name;
    
     
   //   var estadoTiempo= result.list[0].weather[0].description;
     // var tempActual= result.list[0].weather[0].main;

   //  var tempActual= result.list[0].main.temp;

   var encabezado1= result.responseData.feed.title;
   document.getElementById('encabezado1').innerHTML = "Encabezado: " +encabezado1;
   // document.getElementById('estadoTiempo').innerHTML = "Estado actual: " +estadoTiempo;
   // document.getElementById('tempActual').innerHTML = "Temperatura actual: " +tempActual;


   var encabezado2= result.responseData.feed.link;
   document.getElementById('encabezado2').innerHTML = "Fuente: " +encabezado2;



   var encabezado3= result.responseData.feed.entries[0].title;
   document.getElementById('encabezado3').innerHTML = "Noticia: " +encabezado3;


   var encabezado4= result.responseData.feed.entries[1].title;
   document.getElementById('encabezado4').innerHTML = "Noticia: " +encabezado4;
      

   var encabezado5= result.responseData.feed.entries[2].title;
   document.getElementById('encabezado5').innerHTML = "Noticia: " +encabezado5;


   var encabezado6= result.responseData.feed.entries[3].title;
   document.getElementById('encabezado6').innerHTML = "Noticia: " +encabezado6;



   var encabezado7= result.responseData.feed.entries[4].title;
   document.getElementById('encabezado7').innerHTML = "Noticia: " +encabezado7;


   var encabezado8= result.responseData.feed.entries[5].title;
   document.getElementById('encabezado8').innerHTML = "Noticia: " +encabezado8;


   var encabezado9= result.responseData.feed.entries[6].title;
   document.getElementById('encabezado9').innerHTML = "Noticia: " +encabezado9;


   var encabezado10= result.responseData.feed.entries[7].title;
   document.getElementById('encabezado10').innerHTML = "Noticia: " +encabezado10;

    });
});
}



/*

function laHora(){
        $(document).ready(function(){
        $.getJSON("http://timeapi.org/utc/now.json?callback=?",function(result){


  //alert("La hora: "+result.time);
        });/*
        $.getJSON("http://www.timeapi.org/cdt/now?format=%25a%20%25b%20%25d%20%25I:%25M:%25S%20%25Z%20%25Y&callback=?",function(result){
  alert("La hora: "+result);
        });
        $.getJSON("http://www.timeapi.org/cet/now?format=%25a%20%25b%20%25d%20%25I:%25M:%25S%20%25Z%20%25Y&callback=?",function(result){
  alert("La hora: "+result);
        });
        $.getJSON("http://www.timeapi.org/jst/now?format=%25a%20%25b%20%25d%20%25I:%25M:%25S%20%25Z%20%25Y&callback=?",function(result){
*/

  // alert("La hora: "+result);
  //  var city= result.list[0].name;
    

    /*


      <div class="hora" id="Ciudad-de-Mexico"></div>

      <div class="hora" id="Nueva-York"></div>

      <div class="hora" id="Japon"></div>

      <div class="hora" id="Paris"></div>

    */
     
   //   var estadoTiempo= result.list[0].weather[0].description;
     // var tempActual= result.list[0].weather[0].main;

    //var NuevaYork = result.list[0].main.temp;


   // document.getElementById('ciudad').innerHTML = "Ciudad: " +city;
   // document.getElementById('estadoTiempo').innerHTML = "Estado actual: " +estadoTiempo;
   // document.getElementById('tempActual').innerHTML = "Temperatura actual: " +tempActual;

/*
      
    };
};
}*/