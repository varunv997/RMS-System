         function confirmation(s) {
            if (s==1)
                  txt = 'OFF';
               else if(s==0)
                  txt = 'ON';
            var r = confirm("Doing this will turn the motor "+txt);
            if (r==true){
               //code to submit form
               submitform(s);
            }
            else if(r==false) {
            $.ajax ({
            url: 'LIVE_DATA.json',
            dataType: 'json',
            type: 'get',
            success: function(data1) {
               //alert(data1.status);
               var s = data1.pumpStatus;
               if (s == 0) {
                     $( "#toggle" ).prop( "checked", false );
                  }
                  else if (s == 1) {
                     $('#toggle').prop("checked", true);
                  }
            }
                       
         });
            }
         }

        function generate() {
         var txt;
         $.ajax ({
            url: 'LIVE_DATA.json',
            dataType: 'json',
            type: 'get',
            success: function(data1) {
               //alert(data1.status);
               var s = data1.pumpStatus;
               
               confirmation(s);
            }
                       
         });
        } 



        function submitform(s) {
         $(document).ready(function() {
            $.ajax({
               method: "POST",
               url: "action.php",
               data: {status: s},
               success: function(status) {
                  alert("Successfully Submitted");
               }
            });
      });
   }