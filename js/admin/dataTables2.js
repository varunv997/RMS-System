
 var dataPatvan = [];

 var dataAllT = [];

 var borewellT = [];

 var farmerT=[];

 var bookingsT = [];

 var dataAllTB = [];

 var dataAllTP = [];

 var dataAllTF = [];

 var dataAll;

 var synCount = 0;

 var marker = [];

 var t=0, p=0, b1=0, f=0, b2=0;

var x, y;

 var buttonFarmer = "<button onclick='modalFarmer(this);'>click here</button>";
 var buttonBorewell = "<button onclick='modalBorewell(this);'>click here</button>";
 var buttonPatvan = "<button onclick='modalPatvan(this);'>click here</button>";
 var button2 = "<button onclick='zoom(this);'>Show in Map</button>";
 var button3 = "<button onclick='showFarmer(this);'>Show Details</button>";

$(document).ready(function() {
    $.ajax({
        url: 'Admin_DATA.json',
        dataType: 'json',
        type: 'get',

        success: function(data) {
            //alert();
            var l1 = data.RMS[2].DEVICE.length;
            document.getElementById("patvan-count").innerHTML=data.RMS[3].Count[0].PATVAN;
            document.getElementById("borewell-count").innerHTML=data.RMS[3].Count[0].BOREWELL;
            document.getElementById("farmer-count").innerHTML=data.RMS[3].Count[0].FARMER;
            document.getElementById("bookings-count").innerHTML=data.RMS[3].Count[0].BOOKING;
            document.getElementById("transaction-count").innerHTML=data.RMS[3].Count[0].TRANSACTION;
            dataAll = data;
            

            for (var i=0; i<l1; i++) {
                dataPatvan.push([data.RMS[2].DEVICE[i].IMEI, data.RMS[2].DEVICE[i].RATE, data.RMS[2].DEVICE[i].ID, data.RMS[2].DEVICE[i].STAMP]);
                //alert(data.RMS[0].TRANSACTION[0].UID);  
            } 

            var l2 = data.RMS[0].TRANSACTION.length;
            
            for (var i=0; i<l2; i++) {
                dataAllT.push([data.RMS[0].TRANSACTION[i].IMEI, data.RMS[0].TRANSACTION[i].UID, data.RMS[0].TRANSACTION[i].DATE, data.RMS[0].TRANSACTION[i].AMOUNT, data.RMS[0].TRANSACTION[i].LATITUDE, data.RMS[0].TRANSACTION[i].LONGITUDE, data.RMS[0].TRANSACTION[i].DURATION, data.RMS[0].TRANSACTION[i].Transaction_ID]);
            
            }

            var l3 = data.RMS[4].BOREWELL.length;
            var l = Number(data.RMS[4].BOREWELL[0].LATITUDE),
                lo = Number(data.RMS[4].BOREWELL[0].LONGITUDE);
            var centera = new google.maps.LatLng(l+2.6, lo-6);
            var map = document.getElementById("map2"); 
            var mapOptions = {center: centera, zoom:7};
            var map2 = new google.maps.Map(map, mapOptions);



            for (var i=0; i<l3; i++) {
                var latitude = data.RMS[4].BOREWELL[i].LATITUDE;
                var longitude = data.RMS[4].BOREWELL[i].LONGITUDE;
                var mc = new google.maps.LatLng(latitude, longitude);
                borewellT.push([data.RMS[4].BOREWELL[i].BOREWELL_ID, data.RMS[4].BOREWELL[i].STATE, data.RMS[4].BOREWELL[i].COMMUNITY_ID, data.RMS[4].BOREWELL[i].SUB_COMMUNITY, data.RMS[4].BOREWELL[i].LATITUDE, data.RMS[4].BOREWELL[i].LONGITUDE, data.RMS[4].BOREWELL[i].LANDMARK, data.RMS[4].BOREWELL[i].FILTER, data.RMS[4].BOREWELL[i].OWNER, data.RMS[4].BOREWELL[i].WELL_DEPTH, data.RMS[4].BOREWELL[i].BORING_DEPTH, data.RMS[4].BOREWELL[i].WELL_SIZE, button2]);

                
                
                marker[i] = new google.maps.Marker({position: mc,
                icon: 'img/admin/m1.png'});
                
                marker[i].setMap(map2);
            }     

        

            var l4 = data.RMS[5].FARMER.length;
            for (var i=0; i<l4; i++) {
                
                farmerT.push([data.RMS[5].FARMER[i].UID, data.RMS[5].FARMER[i].NAME, data.RMS[5].FARMER[i].BOREWELL, data.RMS[5].FARMER[i].STATE, data.RMS[5].FARMER[i].DISTRICT, data.RMS[5].FARMER[i].LAND_HOLDING, button3]);
            }

            var l5 = data.RMS[6].BOOKINGS.length;
            
            for (var i =0; i<l5; i++) {
                bookingsT.push([data.RMS[6].BOOKINGS[i].BOOKING_ID,data.RMS[6].BOOKINGS[i].UID,data.RMS[6].BOOKINGS[i].BOREWELL_ID, data.RMS[6].BOOKINGS[i].DATE_OF_BOOKING, data.RMS[6].BOOKINGS[i].BOOKING_DATE_FOR, data.RMS[6].BOOKINGS[i].BOOKING_TIME_FOR, data.RMS[6].BOOKINGS[i].DURATION, data.RMS[6].BOOKINGS[i].TIME_OF_BOOKING,data.RMS[6].BOOKINGS[i].IMEI,data.RMS[6].BOOKINGS[i].STATUS,data.RMS[6].BOOKINGS[i].REMARKS]);
                
            }

            //alert(len);
            
                
            

        },
        
        error: function() {
            alert("error");
        }
    });

});


function fillFarmer() {
    if (f == 0) {
    $('#example8').DataTable( {
        responsive: true,
        data: farmerT,
        columns: [
            { title: "UID" },
            { title: "Name" },
            { title: "Borewell" },
            { title: "State" },
            { title: "District" },
            { title: "Land" },
            { title: "Details" }
            
        ]
    } );
    f++;
}
}

function fillBooking() {
    if (b1==0) {
     $('#example').DataTable( {
        responsive: true,
        data: bookingsT,
        columns: [
            { title: "Booking ID" },
            { title: "UID" },
            { title: "Borewell ID" },
            { title: "Date of Booking" },
            { title: "Service Date" },
            { title: "Service Time" },
            { title: "Duration" },
            { title: "Time of Booking" },
            { title: "IMEI" },
            { title: "Status" },
            { title: "Remarks" }         
        ]
    } );}
     b1++;
}



    
function fillPatvan() {
    if (p==0) {
    $('#example12').DataTable( {
        responsive: true,
        data: dataPatvan,
        columns: [
            { title: "IMEI" },
            { title: "Rate" },
            { title: "ID" },
            { title: "Stamp" }
            
        ]
    } );}

    p++;

}


    
function fillTransaction() {

    if (t==0) {
    $('#example2').DataTable( {
        responsive: true,
        data: dataAllT,
        columns: [
            { title: "IMEI" },
            { title: "UID" },
            { title: "Date" },
            { title: "Amount" },
            { title: "Latitude" },
            { title: "Longitude" },
            { title: "Duration" },
            { title: "Transaction ID" },
           
        ]
    } );}
    t++;

}

function fillBorewell() {
    if (b2==0) {
    $('#example7').DataTable( {
        responsive: true,
        data: borewellT,
        columns: [
            { title: "Borewell id" },
            { title: "STATE" },
            { title: "Community" },
            { title: "Sub Community" },
            { title: "LATITUDE" },
            { title: "LONGITUDE" },
            { title: "Landmark" },
            { title: "Filter" },
            { title: "Owner" },
            { title: "Well Depth" },
            { title: "Boring Depth" },
            { title: "Well Size"},
            { title: "Details"}
        ]
    } );}
    b2++; 

}

function modalFarmer(element) {

    x = (element.parentNode.parentNode.rowIndex)-1;
    y = element.parentNode.cellIndex;

    var farmerUid = element.parentNode.parentNode.firstElementChild.innerHTML;
    alert(farmerUid);
    var tid;
    //alert(farmerUid);
    var latitude, longitude;
    var len = dataAll.RMS[0].TRANSACTION.length;
    for (var i=0; i<len; i++) {
        if (dataAll.RMS[0].TRANSACTION[i].UID == farmerUid) {
            tid = dataAll.RMS[0].TRANSACTION[i].Transaction_ID;
            document.getElementById("farmer-uid").innerHTML=dataAll.RMS[0].TRANSACTION[i].UID;
            document.getElementById("imei-no").innerHTML=dataAll.RMS[0].TRANSACTION[i].IMEI;
            document.getElementById("transaction-date").innerHTML=dataAll.RMS[0].TRANSACTION[i].DATE;
            document.getElementById("t-duration").innerHTML=dataAll.RMS[0].TRANSACTION[i].DURATION;
            document.getElementById("cost-modal").innerHTML='Rs. '+dataAll.RMS[0].TRANSACTION[i].AMOUNT;
            document.getElementById("transaction-name").innerHTML = dataAll.RMS[0].TRANSACTION[i].Transaction_ID;
            latitude = Number(dataAll.RMS[0].TRANSACTION[i].LATITUDE);

            longitude = Number(dataAll.RMS[0].TRANSACTION[i].LONGITUDE);
            //alert(latitude);
            
            break;
        }
    }
    var mapCanvas2 = document.getElementById("map1");
        var mapOptions2 = {
            center: {lat: latitude, lng: longitude},
            zoom: 2
        }
    var map2 = new google.maps.Map(mapCanvas2, mapOptions2);
    var marker = new google.maps.Marker({
    position: {lat: latitude, lng: longitude},
    map: map2
  });
    marker.setMap(map2);
    test1(farmerUid, "farmer"); 
    fillChart(tid);
    
       
}

function modalBorewell(element) {

    x = (element.parentNode.parentNode.rowIndex)-1;
    y = element.parentNode.cellIndex;
    var borewellId = element.parentNode.parentNode.firstElementChild.innerHTML;
    alert(borewellId);
    var tid;
    
    var len = dataAll.RMS[0].TRANSACTION.length;
    for (var i=0; i<len; i++) {
        if (dataAll.RMS[0].TRANSACTION[i].BOREWELL_ID == borewellId) {
            tid = dataAll.RMS[0].TRANSACTION[i].Transaction_ID;
            document.getElementById("farmer-uid").innerHTML=dataAll.RMS[0].TRANSACTION[i].UID;
            document.getElementById("imei-no").innerHTML=dataAll.RMS[0].TRANSACTION[i].IMEI;
            document.getElementById("transaction-date").innerHTML=dataAll.RMS[0].TRANSACTION[i].DATE;
            document.getElementById("t-duration").innerHTML=dataAll.RMS[0].TRANSACTION[i].DURATION;
            document.getElementById("cost-modal").innerHTML='Rs. '+dataAll.RMS[0].TRANSACTION[i].AMOUNT;
            document.getElementById("transaction-name").innerHTML = dataAll.RMS[0].TRANSACTION[i].Transaction_ID;
            latitude = Number(dataAll.RMS[0].TRANSACTION[i].LATITUDE);
            //alert(latitude);
            longitude = Number(dataAll.RMS[0].TRANSACTION[i].LONGITUDE);
            break;
        }
    }
    var mapCanvas2 = document.getElementById("map1");
        var mapOptions2 = {
            center: {lat: latitude, lng: longitude},
            zoom: 2
        }
    var map2 = new google.maps.Map(mapCanvas2, mapOptions2);
    var marker = new google.maps.Marker({
    position: {lat: latitude, lng: longitude},
    map: map2
  });
    marker.setMap(map2);
    test2(borewellId, "farmer"); 
    fillChart(tid);
    
       
}

function modalPatvan(element) {

    x = (element.parentNode.parentNode.rowIndex)-1;
    y = element.parentNode.cellIndex;

    var imei = element.parentNode.parentNode.firstElementChild.innerHTML;
    alert(imei);
    var tid;
    
    var len = dataAll.RMS[0].TRANSACTION.length;
    for (var i=0; i<len; i++) {
        if (dataAll.RMS[0].TRANSACTION[i].IMEI == imei) {
            tid = dataAll.RMS[0].TRANSACTION[i].Transaction_ID;
            document.getElementById("farmer-uid").innerHTML=dataAll.RMS[0].TRANSACTION[i].UID;
            document.getElementById("imei-no").innerHTML=dataAll.RMS[0].TRANSACTION[i].IMEI;
            document.getElementById("transaction-date").innerHTML=dataAll.RMS[0].TRANSACTION[i].DATE;
            document.getElementById("t-duration").innerHTML=dataAll.RMS[0].TRANSACTION[i].DURATION;
            document.getElementById("cost-modal").innerHTML='Rs. '+dataAll.RMS[0].TRANSACTION[i].AMOUNT;
            document.getElementById("transaction-name").innerHTML = dataAll.RMS[0].TRANSACTION[i].Transaction_ID;
            latitude = Number(dataAll.RMS[0].TRANSACTION[i].LATITUDE);
            longitude = Number(dataAll.RMS[0].TRANSACTION[i].LONGITUDE);
            break;
        }
    }
    
    test3(imei, "farmer"); 
    fillChart(tid);
    
       
}


function test1(arg, y) {
    var f = 0;
    document.getElementById("card-table").innerHTML = "";
    var l = dataAll.RMS[0].TRANSACTION.length;
    for (var i=0; i<l; i++) {
        if (dataAll.RMS[0].TRANSACTION[i].UID == arg) {
            var td = document.createElement('td');
            td.className = "red-t";
            td.id=dataAll.RMS[0].TRANSACTION[i].Transaction_ID;
            td.innerHTML = '<center><div><a href="#"><table class="link-white"><tr"><td onclick="changeChart(this)">'+dataAll.RMS[0].TRANSACTION[i].Transaction_ID+'</td></tr><td>'+'Date : '+dataAll.RMS[0].TRANSACTION[i].DATE+'</td><tr><tr><td>'+'Amount : '+dataAll.RMS[0].TRANSACTION[i].AMOUNT+'</td></tr></tr></table></a></div></center>';
            document.getElementById("card-table").appendChild(td);
            f=1;
        }             
    }

    if (f==0) {
        alert("No Data to Show");
    }
    else {
        document.getElementById("all-transaction-modal").style.display="block";  
        google.maps.event.trigger(map1, 'resize');
    }
}

function test2(arg, y) {
    var f = 0;
    document.getElementById("card-table").innerHTML = "";
    var l = dataAll.RMS[0].TRANSACTION.length;
    for (var i=0; i<l; i++) {
        if (dataAll.RMS[0].TRANSACTION[i].BOREWELL_ID == arg) {
            var td = document.createElement('td');
            td.className = "red-t";
            td.id=dataAll.RMS[0].TRANSACTION[i].Transaction_ID;
            td.innerHTML = '<center><div><a href="#"><table class="link-white"><tr"><td onclick="changeChart(this)">'+dataAll.RMS[0].TRANSACTION[i].Transaction_ID+'</td></tr><td>'+'Date : '+dataAll.RMS[0].TRANSACTION[i].DATE+'</td><tr><tr><td>'+'Amount : '+dataAll.RMS[0].TRANSACTION[i].AMOUNT+'</td></tr></tr></table></a></div></center>';
            document.getElementById("card-table").appendChild(td);
            f=1;
        }             
    }

    if (f==0) {
        alert("No data to show");
    }
    else {
        document.getElementById("all-transaction-modal").style.display="block";  
        google.maps.event.trigger(map1, 'resize');
    }
}

function test3(arg, y) {
    var f = 0;
    document.getElementById("card-table").innerHTML = "";
    var l = dataAll.RMS[0].TRANSACTION.length;
    for (var i=0; i<l; i++) {
        if (dataAll.RMS[0].TRANSACTION[i].IMEI == arg) {
            var td = document.createElement('td');
            td.className = "red-t";
            td.id=dataAll.RMS[0].TRANSACTION[i].Transaction_ID;
            td.innerHTML = '<center><div><a href="#"><table class="link-white"><tr"><td onclick="changeChart(this)">'+dataAll.RMS[0].TRANSACTION[i].Transaction_ID+'</td></tr><td>'+'Date : '+dataAll.RMS[0].TRANSACTION[i].DATE+'</td><tr><tr><td>'+'Amount : '+dataAll.RMS[0].TRANSACTION[i].AMOUNT+'</td></tr></tr></table></a></div></center>';
            document.getElementById("card-table").appendChild(td);
            f=1;
        }             
    }

    if (f==0) {
        alert("No data to show");
    }
    else {
        document.getElementById("all-transaction-modal").style.display="block";  
        google.maps.event.trigger(map1, 'resize');
    }
}


function zoom(vari) {
    var x1 = vari.parentNode.parentNode.rowIndex-1;
    var y1 = vari.parentNode.cellIndex;

    var latitude = borewellT[x1][4];
    var longitude = borewellT[x1][5];
    var myCenter = new google.maps.LatLng(latitude, longitude);
    var mapCanvas = document.getElementById("map2");
    var mapOptions = {center: myCenter, zoom:10};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var markerPrior = new google.maps.Marker({position: myCenter, icon:'img/admin/m1.png'});
    markerPrior.setMap(map);
    for (var i=0; i<marker.length; i++) {
        marker[i].setMap(map);
    }
    showHide();
}



function showFarmer(arg) {
    var x1 = arg.parentNode.parentNode.rowIndex-1;
    var y1 = arg.parentNode.cellIndex;
    document.getElementsByClassName("f-details")[0].innerHTML=dataAll.RMS[5].FARMER[x1].NAME;
    document.getElementsByClassName("f-details")[1].innerHTML=dataAll.RMS[5].FARMER[x1].IRRIGATION_COST;
    document.getElementsByClassName("f-details")[2].innerHTML=dataAll.RMS[5].FARMER[x1].REVENUE;
    document.getElementsByClassName("f-details")[3].innerHTML=dataAll.RMS[5].FARMER[x1].BUY_SEEDS;
    document.getElementsByClassName("f-details")[4].innerHTML=dataAll.RMS[5].FARMER[x1].ADHAR_CARD_NUMBER;
    document.getElementsByClassName("f-details")[5].innerHTML=dataAll.RMS[5].FARMER[x1].INCOME_FROM_LAND;
    document.getElementsByClassName("f-details")[6].innerHTML=dataAll.RMS[5].FARMER[x1].BALANCE;
    document.getElementsByClassName("f-details")[7].innerHTML=dataAll.RMS[5].FARMER[x1].TYPE_OF_HOUSE;
    document.getElementsByClassName("f-details")[8].innerHTML=dataAll.RMS[5].FARMER[x1].UID;
    document.getElementsByClassName("f-details")[9].innerHTML=dataAll.RMS[5].FARMER[x1].BOREWELL;
    document.getElementsByClassName("f-details")[10].innerHTML=dataAll.RMS[5].FARMER[x1].YEARLY_INCOME;
    document.getElementsByClassName("f-details")[11].innerHTML=dataAll.RMS[5].FARMER[x1].WHERE_TO_SALE;
    document.getElementsByClassName("f-details")[12].innerHTML=dataAll.RMS[5].FARMER[x1].ADDRESS;
    document.getElementsByClassName("f-details")[13].innerHTML=dataAll.RMS[5].FARMER[x1].GOVT_CARD_HOLDER;
    document.getElementsByClassName("f-details")[14].innerHTML=dataAll.RMS[5].FARMER[x1].LAND_HOLDING;
    document.getElementsByClassName("f-details")[15].innerHTML=dataAll.RMS[5].FARMER[x1].STATE;
    document.getElementsByClassName("f-details")[16].innerHTML=dataAll.RMS[5].FARMER[x1].DISTRICT;
    document.getElementsByClassName("f-details")[17].innerHTML=dataAll.RMS[5].FARMER[x1].PLACE_OF_REGISTERATION;
    document.getElementsByClassName("f-details")[18].innerHTML=dataAll.RMS[5].FARMER[x1].CROPS;
    document.getElementsByClassName("f-details")[19].innerHTML=dataAll.RMS[5].FARMER[x1].FATHER_NAME;
    document.getElementsByClassName("f-details")[20].innerHTML=dataAll.RMS[5].FARMER[x1].BUY_FERTILIZER;
    document.getElementsByClassName("f-details")[21].innerHTML=dataAll.RMS[5].FARMER[x1].CONTACT_NO;

    document.getElementById("farmer-details-modal").style.display='block';
}


function fillAllTB() {
    
    dataAllTB = [];
    var len = dataAll.RMS[4].BOREWELL.length;
    for (var i =0; i<len; i++) {
        
       
            dataAllTB.push([dataAll.RMS[4].BOREWELL[i].BOREWELL_ID,dataAll.RMS[4].BOREWELL[i].COMMUNITY_ID,dataAll.RMS[4].BOREWELL[i].SUB_COMMUNITY,dataAll.RMS[4].BOREWELL[i].OWNER,dataAll.RMS[4].BOREWELL[i].STATE,dataAll.RMS[4].BOREWELL[i].WELL_DEPTH,dataAll.RMS[4].BOREWELL[i].TOTAL_FLOW,dataAll.RMS[4].BOREWELL[i].TOTAL_REVENUE, buttonBorewell]);
    
    }


    $('#example3').DataTable( {
        "bDestroy": true,
        responsive: true,
         
        data: dataAllTB, 
        columns: [
            { title: "Borewell ID" },
            { title: "Community ID" },
            { title: "Sub Community" },
            { title: "Owner" },
            { title: "State" },
            { title: "Well Depth" },
            { title: "Total Flow" },
            { title: "Total Revenue" },
            { title: "Details"}    
        ]
    } );
}


function fillAllTF() {
    
    dataAllTF = [];
    var len = dataAll.RMS[5].FARMER.length;
    for (var i =0; i<len; i++) {
        {
            //alert(dataAll.RMS[5].FARMER[i].UID);
            dataAllTF.push([dataAll.RMS[5].FARMER[i].UID,dataAll.RMS[5].FARMER[i].NAME,dataAll.RMS[5].FARMER[i].STATE,dataAll.RMS[5].FARMER[i].DISTRICT,dataAll.RMS[5].FARMER[i].BOREWELL,dataAll.RMS[5].FARMER[i].BALANCE,dataAll.RMS[5].FARMER[i].TOTAL_FLOW,dataAll.RMS[5].FARMER[i].TOTAL_REVENUE, buttonFarmer]);
        }
    }


    $('#example4').DataTable( {
        "bDestroy": true,
        responsive: true,
        data: dataAllTF, 
         
        columns: [
            { title: "UID" },
            { title: "NAME"},
            { title: "State" },
            { title: "District" },
            { title: "Borewells" },
            { title: "Balance" },
            { title: "Total Flow" },
            { title: "Total Revenue" },
            { title: "Details"}       
        ]
    } );
}

function fillAllTP() {
    
    dataAllTP = [];
    var len = dataAll.RMS[2].DEVICE.length;

    for (var i =0; i<len; i++) {
        {   
            dataAllTP.push([dataAll.RMS[2].DEVICE[i].IMEI,dataAll.RMS[2].DEVICE[i].ID,dataAll.RMS[2].DEVICE[i].STAMP,dataAll.RMS[2].DEVICE[i].TOTAL_REVENUE,dataAll.RMS[2].DEVICE[i].TOTAL_FLOW, buttonPatvan]);
        }
    }


    $('#example5').DataTable( {
        "bDestroy": true,
        responsive: true,
        data: dataAllTP,
        
        columns: [
            { title: "IMEI" },
            { title: "ID" },
            { title: "Stamp" },
            { title: "Total Revenue" },
            { title: "Total Flow" },
            { title: "Details" }
        ]
    } );
}

function changeChart(arg) {
  
    fillChart(arg.innerHTML);
    var len = dataAll.RMS[0].TRANSACTION.length;
    var latitude, longitude;
    for (var i=0; i<len; ++i) {
        if (arg.innerHTML == dataAll.RMS[0].TRANSACTION[i].Transaction_ID)
        {
            document.getElementById("farmer-uid").innerHTML=dataAll.RMS[0].TRANSACTION[i].UID;
            document.getElementById("imei-no").innerHTML=dataAll.RMS[0].TRANSACTION[i].IMEI;
            document.getElementById("transaction-date").innerHTML=dataAll.RMS[0].TRANSACTION[i].DATE;
            document.getElementById("t-duration").innerHTML=dataAll.RMS[0].TRANSACTION[i].DURATION;
            document.getElementById("cost-modal").innerHTML='Rs. '+dataAll.RMS[0].TRANSACTION[i].AMOUNT;
            document.getElementById("transaction-name").innerHTML = dataAll.RMS[0].TRANSACTION[i].Transaction_ID;
            latitude = Number(dataAll.RMS[0].TRANSACTION[i].LATITUDE);
            longitude = Number(dataAll.RMS[0].TRANSACTION[i].LONGITUDE);
        }
    }

    var mapCanvas2 = document.getElementById("map1");
        var mapOptions2 = {
            center: {lat: latitude, lng: longitude},
            zoom: 16
        }
    var map2 = new google.maps.Map(mapCanvas2, mapOptions2);
    var marker = new google.maps.Marker({
    position: {lat: latitude, lng: longitude},
    map: map2
  });
    marker.setMap(map2);
}






