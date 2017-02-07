/* Functions for the HighCharts Spline to plot Voltage, Current, Flow and Power */
var arr1 = [];
var arr2 = [];
var length, zerolength;



function openModal(container) {
    if (container.id == 'container1') {
        document.getElementById('myModal1').style.display = 'block';
    }
    if (container.id == 'container3') {
        document.getElementById('myModal2').style.display = 'block';
    }
    if (container.id == 'container5') {
        document.getElementById('myModal3').style.display = 'block';
    }
    if (container.id == 'container7') {
        document.getElementById('myModal4').style.display = 'block';
    }
}

function voltageUpdate(str) {

    arr1 = [];
    arr2 = [];

    var no = document.getElementById("patvan-list").value;
    if (str=='init')
        no =0;    

    $.getJSON("LIVE_DATA.json", function(res) {
        
        var d = (res.LIVE[no].TIME.length);


        if (res.LIVE[no].TIME.length >= 10) {
            for (var i = d - 11; i <= d - 1; i++) {
                arr2.push(Number(res.LIVE[no].VOLTAGE[i]));
                console.log(Number(res.LIVE[no].VOLTAGE[i]));

            }
        } else if (res.LIVE[no].TIME.length < 10) {

            for (var i = 0; i <= 10 - d; i++) {

                arr2.push(0);



            }
            for (var i = 0; i < d; i++) {

                arr2.push(Number(res.LIVE[no].VOLTAGE[i]));



            }


        }

        arr1.push(res.LIVE[no].TIME[d - 1]);

        my();
    });




}


function my() {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });



    Highcharts.chart('container1', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function() {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    
                    setInterval(function() {
                        
                        
                        $.getJSON("LIVE_DATA.json", function(result) {
                            var d = document.getElementById("patvan-list").value;
                            //alert("123546");
                            var i = (result.LIVE[d].TIME.length);
                            var s = result.LIVE[d].TIME[i - 1];

                            var arrlen = arr3.length;
                            if (arr1[arrlen - 1] == s) {

                            } else {
                                var x = (new Date()).getTime(), // current time
                                    y = Number(result.LIVE[d].VOLTAGE[i - 1]);

                                series.addPoint([x, y], true, true);
                                arr1.push(result.LIVE[d].TIME[i - 1])

                            }
                        });
                    }, 3000);

                }
            }
        },
        title: {
            text: 'Current'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 100
        },
        yAxis: {
            title: {
                text: 'Volt'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function() {
                return '<b>' +
                    this.series.name +
                    '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                        this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            color: '#FF0000',
            data: (function() {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -9; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: arr2[i + 10]

                    });
                }
                return data;
            }())
        }]
    });

    Highcharts.chart('container2', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function() {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    
                    setInterval(function() {
                        
                        
                        $.getJSON("LIVE_DATA.json", function(result) {
                            var d = document.getElementById("patvan-list").value;
                            //alert("123546");
                            var i = (result.LIVE[d].TIME.length);
                            var s = result.LIVE[d].TIME[i - 1];

                            var arrlen = arr3.length;
                            if (arr1[arrlen - 1] == s) {

                            } else {
                                var x = (new Date()).getTime(), // current time
                                    y = Number(result.LIVE[d].VOLTAGE[i - 1]);

                                series.addPoint([x, y], true, true);
                                arr1.push(result.LIVE[d].TIME[i - 1])

                            }
                        });
                    }, 3000);

                }
            }
        },
        title: {
            text: 'Current'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 100
        },
        yAxis: {
            title: {
                text: 'Volt'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function() {
                return '<b>' +
                    this.series.name +
                    '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                        this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            color: '#FF0000',
            data: (function() {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -9; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: arr2[i + 10]

                    });
                }
                return data;
            }())
        }]
    });


}


/*---------------------------------------------------*/


var arr3 = [];
var arr4 = [];

function currentUpdate(str) {

    arr3 = [];
    arr4 = [];

    var no = document.getElementById("patvan-list").value;
    if (str=='init')
        no =0;    

    $.getJSON("LIVE_DATA.json", function(res) {
        
        var d = (res.LIVE[no].TIME.length);


        if (res.LIVE[no].TIME.length >= 10) {
            for (var i = d - 11; i <= d - 1; i++) {
                arr4.push(Number(res.LIVE[no].CURRENT[i]));
                console.log(Number(res.LIVE[no].CURRENT[i]));

            }
        } else if (res.LIVE[no].TIME.length < 10) {

            for (var i = 0; i <= 10 - d; i++) {

                arr4.push(0);



            }
            for (var i = 0; i < d; i++) {

                arr4.push(Number(res.LIVE[no].CURRENT[i]));



            }


        }

        arr3.push(res.LIVE[no].TIME[d - 1]);

        my2();
    });




}


function my2() {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });



    Highcharts.chart('container3', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function() {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    
                    setInterval(function() {
                        
                        
                        $.getJSON("LIVE_DATA.json", function(result) {
                            var d = document.getElementById("patvan-list").value;
                            //alert("123546");
                            var i = (result.LIVE[d].TIME.length);
                            var s = result.LIVE[d].TIME[i - 1];

                            var arrlen = arr3.length;
                            if (arr3[arrlen - 1] == s) {

                            } else {
                                var x = (new Date()).getTime(), // current time
                                    y = Number(result.LIVE[d].CURRENT[i - 1]);

                                series.addPoint([x, y], true, true);
                                arr3.push(result.LIVE[d].TIME[i - 1])

                            }
                        });
                    }, 3000);

                }
            }
        },
        title: {
            text: 'Current'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 100
        },
        yAxis: {
            title: {
                text: 'Volt'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function() {
                return '<b>' +
                    this.series.name +
                    '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                        this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            color: '#FF0000',
            data: (function() {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -9; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: arr4[i + 10]

                    });
                }
                return data;
            }())
        }]
    });

    Highcharts.chart('container4', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function() {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    
                    setInterval(function() {
                        
                        
                        $.getJSON("LIVE_DATA.json", function(result) {
                            var d = document.getElementById("patvan-list").value;
                            //alert("123546");
                            var i = (result.LIVE[d].TIME.length);
                            var s = result.LIVE[d].TIME[i - 1];

                            var arrlen = arr3.length;
                            if (arr3[arrlen - 1] == s) {

                            } else {
                                var x = (new Date()).getTime(), // current time
                                    y = Number(result.LIVE[d].CURRENT[i - 1]);

                                series.addPoint([x, y], true, true);
                                arr3.push(result.LIVE[d].TIME[i - 1])

                            }
                        });
                    }, 3000);

                }
            }
        },
        title: {
            text: 'Current'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 100
        },
        yAxis: {
            title: {
                text: 'Volt'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function() {
                return '<b>' +
                    this.series.name +
                    '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                        this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            color: '#FF0000',
            data: (function() {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -9; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: arr4[i + 10]

                    });
                }
                return data;
            }())
        }]
    });


}

/*-------------------------------------------------------*/
var arr5 = [];
var arr6 = [];


function flowUpdate(str) {

    arr5 = [];
    arr6 = [];

    var no = document.getElementById("patvan-list").value;
    if (str=='init')
        no =0;    

    $.getJSON("LIVE_DATA.json", function(res) {
        
        var d = (res.LIVE[no].TIME.length);


        if (res.LIVE[no].TIME.length >= 10) {
            for (var i = d - 11; i <= d - 1; i++) {
                arr6.push(Number(res.LIVE[no].FLOW[i]));
                console.log(Number(res.LIVE[no].FLOW[i]));

            }
        } else if (res.LIVE[no].TIME.length < 10) {

            for (var i = 0; i <= 10 - d; i++) {

                arr6.push(0);



            }
            for (var i = 0; i < d; i++) {

                arr6.push(Number(res.LIVE[no].FLOW[i]));



            }


        }

        arr5.push(res.LIVE[no].TIME[d - 1]);

        my3();
    });




}


function my3() {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });



    Highcharts.chart('container5', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function() {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    
                    setInterval(function() {
                        
                        
                        $.getJSON("LIVE_DATA.json", function(result) {
                            var d = document.getElementById("patvan-list").value;
                            //alert("123546");
                            var i = (result.LIVE[d].TIME.length);
                            var s = result.LIVE[d].TIME[i - 1];

                            var arrlen = arr5.length;
                            if (arr5[arrlen - 1] == s) {

                            } else {
                                var x = (new Date()).getTime(), // current time
                                    y = Number(result.LIVE[d].FLOW[i - 1]);

                                series.addPoint([x, y], true, true);
                                arr5.push(result.LIVE[d].TIME[i - 1])

                            }
                        });
                    }, 3000);

                }
            }
        },
        title: {
            text: 'Flow'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 100
        },
        yAxis: {
            title: {
                text: 'Volt'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function() {
                return '<b>' +
                    this.series.name +
                    '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                        this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            color: '#FF0000',
            data: (function() {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -9; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: arr6[i + 10]

                    });
                }
                return data;
            }())
        }]
    });

    Highcharts.chart('container6', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function() {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    
                    setInterval(function() {
                        
                        
                        $.getJSON("LIVE_DATA.json", function(result) {
                            var d = document.getElementById("patvan-list").value;
                            //alert("123546");
                            var i = (result.LIVE[d].TIME.length);
                            var s = result.LIVE[d].TIME[i - 1];

                            var arrlen = arr5.length;
                            if (arr5[arrlen - 1] == s) {

                            } else {
                                var x = (new Date()).getTime(), // current time
                                    y = Number(result.LIVE[d].FLOW[i - 1]);

                                series.addPoint([x, y], true, true);
                                arr5.push(result.LIVE[d].TIME[i - 1])

                            }
                        });
                    }, 3000);

                }
            }
        },
        title: {
            text: 'Flow'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 100
        },
        yAxis: {
            title: {
                text: 'Volt'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function() {
                return '<b>' +
                    this.series.name +
                    '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                        this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            color: '#FF0000',
            data: (function() {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -9; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: arr6[i + 10]

                    });
                }
                return data;
            }())
        }]
    });


}
/*---------------------------------------------------------------------------------*/

var arr7 = [];
var arr8 = [];


function powerUpdate(str) {

    arr7 = [];
    arr8 = [];

    var no = document.getElementById("patvan-list").value;
    if (str=='init')
        no =0;    

    $.getJSON("LIVE_DATA.json", function(res) {
        
        var d = (res.LIVE[no].TIME.length);


        if (res.LIVE[no].TIME.length >= 10) {
            for (var i = d - 11; i <= d - 1; i++) {
                arr8.push(Number(res.LIVE[no].POWER[i]));
                console.log(Number(res.LIVE[no].POWER[i]));

            }
        } else if (res.LIVE[no].TIME.length < 10) {

            for (var i = 0; i <= 10 - d; i++) {

                arr8.push(0);



            }
            for (var i = 0; i < d; i++) {

                arr8.push(Number(res.LIVE[no].POWER[i]));



            }


        }

        arr7.push(res.LIVE[no].TIME[d - 1]);

        my4();
    });




}


function my4() {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });



    Highcharts.chart('container7', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function() {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    
                    setInterval(function() {
                        
                        
                        $.getJSON("LIVE_DATA.json", function(result) {
                            var d = document.getElementById("patvan-list").value;
                            //alert("123546");
                            var i = (result.LIVE[d].TIME.length);
                            var s = result.LIVE[d].TIME[i - 1];

                            var arrlen = arr7.length;
                            if (arr7[arrlen - 1] == s) {

                            } else {
                                var x = (new Date()).getTime(), // current time
                                    y = Number(result.LIVE[d].POWER[i - 1]);

                                series.addPoint([x, y], true, true);
                                arr7.push(result.LIVE[d].TIME[i - 1])

                            }
                        });
                    }, 3000);

                }
            }
        },
        title: {
            text: 'Flow'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 100
        },
        yAxis: {
            title: {
                text: 'Volt'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function() {
                return '<b>' +
                    this.series.name +
                    '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                        this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            color: '#FF0000',
            data: (function() {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -9; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: arr8[i + 10]

                    });
                }
                return data;
            }())
        }]
    });


    Highcharts.chart('container8', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function() {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    
                    setInterval(function() {
                        
                        
                        $.getJSON("LIVE_DATA.json", function(result) {
                            var d = document.getElementById("patvan-list").value;
                            //alert("123546");
                            var i = (result.LIVE[d].TIME.length);
                            var s = result.LIVE[d].TIME[i - 1];

                            var arrlen = arr7.length;
                            if (arr7[arrlen - 1] == s) {

                            } else {
                                var x = (new Date()).getTime(), // current time
                                    y = Number(result.LIVE[d].POWER[i - 1]);

                                series.addPoint([x, y], true, true);
                                arr7.push(result.LIVE[d].TIME[i - 1])

                            }
                        });
                    }, 3000);

                }
            }
        },
        title: {
            text: 'Flow'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 100
        },
        yAxis: {
            title: {
                text: 'Volt'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function() {
                return '<b>' +
                    this.series.name +
                    '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                        this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            color: '#FF0000',
            data: (function() {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -9; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: arr8[i + 10]

                    });
                }
                return data;
            }())
        }]
    });


}

function update() {
    voltageUpdate('init');
    currentUpdate('init');
    flowUpdate('init');
    powerUpdate('init');
}