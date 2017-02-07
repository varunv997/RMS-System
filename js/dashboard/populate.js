//Populating the list
var len;
function populate () {
   
	$.ajax ({
		url: 'LIVE_DATA.json',
		dataType: 'json',
		type: 'get',
		success: function(data) {
			len = data.LIVE.length;
			//alert(len);
			var select = document.getElementById("patvan-list");
			for (var i=0; i<len; i++) {
				var option = document.createElement("option");
				option.value = i;
				option.innerHTML = data.LIVE[i].IMEI;
				option.id='option'+i;
				select.appendChild(option);
			}
			

		},
		error: function() {

		}
	});

}

function pollChange() {
  
	 $.ajax ({
               url: 'LIVE_DATA.json',
               dataType: 'json',
               type: 'get',
               success: function (data) {
               	var m = parseInt(document.getElementById("patvan-list").value);
               	document.getElementById("namejs").innerHTML=data.LIVE[m].NAME; 
                  document.getElementById("idjs").innerHTML=data.LIVE[m].UID; 
                  document.getElementById("addjs").innerHTML=data.LIVE[m].ADDRESS; 
                  document.getElementById("contactjs").innerHTML=data.LIVE[m].CONTACT_NO; 
                  document.getElementById("pidjs").innerHTML=data.LIVE[m].IMEI;
                  //document.getElementById("opidjs").innerHTML=data.LIVE[m].UID;
                  //document.getElementById("bidjs").innerHTML=data.LIVE[m].UID;  
                  document.getElementById("timejs").innerHTML=data.LIVE[m].TIME[data.LIVE[m].TIME.length-1];;
                  document.getElementById("balance").innerHTML=data.LIVE[m].CURRENT_BALANCE;
                  document.getElementById("diswa").innerHTML=data.LIVE[m].WATER_DISPENSED;
                  var d = parseInt(document.getElementById("patvan-list").value);
                  //alert(d);
                  fillwidget(data.LIVE[m].TEMPERATURE, 'temperature');
                  var status = data.LIVE[m].HUMIDITY;
                  if (status == 0) {
                     $( "#toggle" ).prop( "checked", false );
                  }
                  else if (status == 1) {
                     $('#toggle').prop("checked", true);
                  }
                  fillwidget(data.LIVE[m].HUMIDITY, 'humidity');
                  fillwidget(data.LIVE[m].REVENUE/100, 'money');
                  voltageUpdate();
                  currentUpdate();
                  powerUpdate();
                  flowUpdate();                  
               }
           });
}