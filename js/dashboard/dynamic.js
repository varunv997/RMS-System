
         (function() {
            var poll = function(v) {

               var u = parseInt(v);
            $.ajax ({
               url: 'LIVE_DATA.json',
               dataType: 'json',
               type: 'get',
               success: function (data) {
                  //alert(data.water);
                  document.getElementById("namejs").innerHTML=data.LIVE[u].NAME; 
                  document.getElementById("idjs").innerHTML=data.LIVE[u].UID; 
                  document.getElementById("addjs").innerHTML=data.LIVE[u].ADDRESS; 
                  document.getElementById("contactjs").innerHTML=data.LIVE[u].CONTACT_NO;  
                  document.getElementById("pidjs").innerHTML=data.LIVE[u].IMEI; 
                  document.getElementById("timejs").innerHTML=data.LIVE[u].TIME[data.LIVE[u].TIME.length-1]; 
                  document.getElementById("balance").innerHTML=data.LIVE[u].CURRENT_BALANCE; 
                  document.getElementById("diswa").innerHTML=data.LIVE[u].WATER_DISPENSED; +'KL';
                  fillwidget(data.LIVE[u].TEMPERATURE, 'temperature');
                  
                  var status = data.LIVE[u].STATUS;
                  if (status-1 == 0) {
                     $( "#toggle" ).prop( "checked", false );
                  }
                  else if (status-1 == 1) {
                     $('#toggle').prop("checked", true);
                  }
                  fillwidget(data.LIVE[u].HUMIDITY , 'humidity');
                  fillwidget(data.LIVE[u].REVENUE/100 , 'money');

               },
               error: function() {
                  //error
               }
            });
         };   
         
         poll(0);
         
         
         })();




