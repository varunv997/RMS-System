 /* JavaScript for the admin Website.
      Author: Varun
      Organization: CLARO ENERGY Pvt. Ltd.
   */

var g= 
{
    "xData": [0.001567,0.011765,0.022194,0.032316,0.04266,0.063668,0.074477,0.085323,0.09576,0.106078,0.116096,0.137524,0.148342,0.159059,0.170005,0.180716,0.191407,0.212538,0.222819,0.233929,0.244239,0.255301,0.266081,0.287527,0.298115,0.309392,0.320217,0.330928,0.341401,0.361717,0.372173,0.382337,0.39294,0.403072,0.413454,0.434618,0.444845,0.455745,0.465785,0.475987,0.486064,0.507086,0.517517,0.527961,0.538242,0.548414,0.558444,0.578941,0.589212,0.599472,0.60977,0.620178,0.630189,0.650782,0.661001,0.671137,0.681175,0.691235,0.702012,0.722644,0.733166,0.743824,0.754059,0.764109,0.774519,0.795597,0.805721,0.81592,0.826139,0.836369,0.846826,0.86771,0.87803,0.888342,0.898695,0.908723,0.91922,0.939802,0.950378,0.960776,0.971377,0.981843,0.992312,1.013125,1.023302,1.033488,1.043822,1.054203,1.065019,1.086078,1.09635,1.106421,1.117028,1.127541,1.138599,1.159588,1.170167,1.180741,1.190794,1.201112,1.211355,1.233278,1.243477,1.254957,1.265227,1.276378,1.285656,1.297311,1.308367,1.318715,1.329589,1.340834,1.352388,1.375063,1.385369,1.396291,1.408156,1.418989,1.429535,1.451141,1.462205,1.473011,1.483844,1.494311,1.514761,1.525336,1.535858,1.546476,1.557325,1.567512,1.590091,1.600925,1.612303,1.622558,1.633071,1.643555,1.66484,1.675722,1.685986,1.696733,1.706895,1.719102,1.741295,1.752144,1.762688,1.773713,1.784052,1.795705,1.817305,1.827465,1.838408,1.849369,1.860023,1.871438,1.89257,1.90323,1.914398,1.924634,1.934642,1.945212,1.966275,1.976294,1.986422,1.996652,2.008005,2.018309,2.041139,2.051221,2.0613,2.072507,2.08342,2.094075,2.114574,2.125286,2.135765,2.146845,2.157966,2.169391,2.190921,2.200899,2.212709,2.222671,2.232908,2.244001,2.264898,2.275703,2.286885,2.298115,2.310186,2.32059,2.344695,2.354843,2.366387,2.379001,2.390328,2.402215,2.423134,2.433156,2.444912,2.457061,2.468253,2.478978,2.499832,2.513223,2.52561,2.538429,2.548659,2.560809,2.581308,2.592816,2.603963,2.615992,2.626242,2.638223,2.660346,2.671583,2.681938,2.69265,2.70588,2.716296,2.740081,2.75085,2.761319,2.772027,2.782659,2.793531,2.816194,2.828031,2.839243,2.851443,2.863884,2.874359,2.895246,2.906506,2.91761,2.92786,2.938937,2.950218,2.973357,2.98366,2.994639,3.005213,3.01666,3.02761,3.050025,3.061713,3.071828,3.082787,3.093422,3.105289,3.127231,3.138982,3.149755,3.160217,3.171299,3.191571,3.202226,3.213225,3.223987,3.234092,3.244644,3.265939,3.276411,3.286489,3.297156,3.307909,3.319018,3.34064,3.351107,3.361683,3.373136,3.384768,3.395457,3.417722,3.429096,3.439122,3.449679,3.459868,3.469997,3.492679,3.503647,3.514941,3.525858,3.538746,3.550422,3.572255,3.58452,3.595367,3.605736,3.617401,3.628324,3.652523,3.663679,3.67378,3.684605,3.695595,3.705843,3.728706,3.739169,3.750205,3.761258,3.771771,3.781911,3.804724,3.81631,3.826313,3.837847,3.85049,3.860999,3.88262,3.892937,3.903053,3.913656,3.924698,3.935126,3.956362,3.966543,3.976899,3.98752,3.997644,4.008721,4.029852,4.040633,4.051006,4.06126,4.071761,4.083526,4.10749,4.117855,4.128661,4.13934,4.151117,4.1624,4.184736,4.194826,4.205098,4.215261,4.225325,4.236367,4.262012,4.273794,4.285743,4.297226,4.308086,4.318245,4.340246,4.351486,4.363196,4.374465,4.387109,4.398635,4.421101,4.432135,4.444666,4.456226,4.467413,4.477804,4.498505,4.510413,4.522595,4.534044,4.545944,4.558048,4.580379,4.59312,4.605616,4.618065,4.631266,4.644086,4.667943,4.67948,4.691266,4.703019,4.715923,4.725932,4.752312,4.765224,4.777128,4.787361,4.800435,4.823353,4.836044,4.848602,4.860302,4.871112,4.882779,4.904695,4.914823,4.927074,4.938111,4.949586,4.960761,4.982911,4.9942,5.004246,5.016296,5.027215,5.038043,5.058885,5.070303,5.080649,5.093865,5.104424,5.114903,5.134965,5.146346,5.15634,5.168547,5.179066,5.191167,5.214242,5.224914,5.237573,5.249537,5.261586,5.272517,5.296154,5.306348,5.316773,5.327153,5.339961,5.350638,5.376502,5.389277,5.402142,5.412197,5.42399,5.434873,5.458466,5.470907,5.482679,5.493339,5.50574,5.516349,5.538897,5.549552,5.56083,5.571879,5.583764,5.59509,5.619028,5.629925,5.640716,5.650957,5.661787,5.671957,5.693974,5.704919,5.717491,5.731152,5.744728,5.755687,5.778668,5.791951,5.80409,5.815697,5.828482,5.840501,5.864145,5.875704,5.887893,5.900147,5.912517,5.924894,5.948897,5.959155,5.970262,5.981632,5.992996,6.00356,6.027256,6.038776,6.050959,6.061351,6.071864,6.082436,6.104054,6.115602,6.127623,6.139058,6.150639,6.161323,6.183013,6.194359,6.206269,6.218033,6.2281,6.240494,6.262584,6.275326,6.287166,6.298953,6.310644,6.321583,6.345676,6.356738,6.366782,6.377931,6.388519,6.397159],
    "datasets": [{
        "name": "Flow",
        "data": [13.833,12.524,11.441,1000.651,9.961,4.566,4.617,4.728,4.823,4.844,4.856,4.87,4.702,4.679,4.674,4.641,4.47,4.688,4.798,4.756,4.903,4.919,5.017,4.938,4.879,4.831,4.623,3.887,3.502,3.083,3.123,3.073,2.922,2.827,2.805,2.605,2.743,2.698,2.513,2.41,2.17,2.288,2.308,2.222,2.183,2.224,2.163,2.223,2.142,2.257,2.015,1.971,1.894,1.848,1.835,1.85,2.036,1.827,1.904,1.803,1.852,1.866,1.906,1.956,1.954,1.734,1.904,1.899,2.001,1.966,1.844,1.879,1.856,1.837,1.827,1.907,1.729,1.74,1.68,1.797,1.811,1.941,2.026,2.217,2.281,2.517,2.673,2.702,2.893,3.016,3.073,3.126,3.283,3.361,3.33,3.465,3.916,4.49,5.074,5.717,6.523,7.012,6.726,7.095,7.471,7.824,7.802,4.441,4.625,4.696,4.861,4.768,4.889,5.281,5.36,5.419,5.137,5.278,5.151,4.934,4.952,4.742,4.666,4.525,4.126,4.228,4.334,4.383,5.287,5.088,5.28,5.274,5.251,5.413,5.365,5.372,5.512,4.839,5.099,5.196,5.219,5.094,5.582,5.91,5.952,6.012,5.854,5.789,5.465,5.525,5.659,5.67,5.173,5.033,5.318,5.289,5.226,5.15,5.106,4.989,5.103,5.288,5.428,5.363,5.026,5,4.941,4.872,4.751,4.408,4.425,4.301,4.134,4.171,4.272,4.34,4.543,4.826,5.381,5.374,5.433,5.483,5.539,5.869,6.956,7.443,7.654,8.005,8.181,8.386,9.202,9.51,9.66,9.141,8.79,8.747,8.949,9.188,9.625,10.154,10.173,10.361,11.186,11.226,11.091,10.899,10.945,10.892,9.618,9.092,8.465,7.864,7.396,7.076,7.053,6.772,6.958,7.202,6.93,6.857,7.007,7.059,7.099,7.025,6.95,7.116,6.331,6.39,6.571,6.571,6.604,6.407,6.371,6.348,6.348,5.995,6.162,6.287,6.241,6.033,6.083,6.313,6.118,5.78,5.698,5.804,5.743,5.655,5.976,6.005,6.06,5.988,6.021,6.049,5.882,5.296,5.142,4.701,4.701,4.647,4.491,4.48,4.384,4.263,4.515,4.721,5.084,6.225,6.302,6.409,6.52,6.462,6.525,6.816,6.656,6.566,6.34,6.177,6.143,7.462,7.783,7.885,7.998,8.182,8.352,8.32,8.5,8.967,8.474,8.178,7.89,7.436,7.634,7.777,7.628,7.189,6.787,6.048,6.003,6.189,6.216,6.389,6.353,7.341,7.899,7.849,7.757,7.314,7.134,6.858,6.689,6.526,5.909,5.138,4.617,4.339,4.558,4.493,4.545,4.419,4.245,4.468,5.093,5.737,6.215,6.613,6.876,7.566,7.586,7.901,7.736,7.23,6.703,5.896,5.73,6.032,6.263,6.458,7.107,7.766,7.911,7.794,7.776,7.876,7.866,7.462,7.298,6.898,6.62,6.747,7.285,8.139,8.411,8.776,8.946,9.155,9.296,10.15,9.96,9.885,9.99,10.203,10.401,10.935,11.071,11.274,11.566,11.851,12.187,12.363,12.426,12.478,12.486,12.117,12.132,11.791,11.332,11.441,11.38,11.309,10.985,10.627,10.355,9.899,9.833,9.747,9.693,9.514,9.502,9.888,9.98,10.255,10.667,10.531,10.452,10.267,10.2,10.437,10.553,10.577,10.661,11.022,11.213,11.311,11.572,11.708,11.176,10.857,10.754,10.629,10.185,10.052,10.083,10.31,10.478,10.626,11.121,11.141,11.221,11.299,11.435,11.599,11.353,11.299,11.288,11.279,11.208,11.307,11.685,11.58,11.379,11.096,11.144,10.947,10.699,10.881,10.746,10.276,9.994,9.629,9.76,9.749,10.012,10.184,10.336,10.473,10.848,11.349,11.978,12.167,12.327,12.339,12.064,12.09,12.12,11.94,11.562,11.208,10.974,10.948,10.983,10.76,10.694,10.534,10.273,10.364,10.421,10.357,10.316,10.472,10.94,11.314,11.485,11.488,11.606,11.479,11.091,11.288,11.354,11.501,11.302,10.968,11.026,10.944,11.08,11.388,11.504,11.279,10.683,10.533,10.505,10.305,10.146,10.148,9.501,9.366,9.23,9.067,8.956,8.935],
        "unit": "km/h",
        "type": "area",
        "valueDecimals": 1
    }, {
        "name": "Voltage",
        "data": [26.857,27,27.111,27.2,27.272,30.545,32.181,33.818,35.272,36.545,37.818,41.818,44.545,47.272,48.545,49.818,53.545,61,64.909,68.818,72.727,75.09,77.454,82.181,84.545,84.454,86.181,87.909,89.636,93.09,96.727,100.363,104,107.636,111.272,116.727,121.09,125.454,129.818,134.181,136.727,151.636,159.09,166.545,174,181.454,186.363,201.636,209.272,216.909,222.818,228.727,234.636,249.363,258.181,267,273.09,279.181,288.181,303,308.818,314.636,326.909,336.272,345.636,364.363,373.727,380.181,389.818,399.454,409.09,425.727,432.727,439.727,446.727,453.727,460.727,473.272,478.818,484.363,489.909,491.636,493.363,498.272,500.727,503.181,506.454,508,509.545,512.636,514.363,516.09,517.909,519.727,521.545,525.636,527.272,528.909,529.636,530.363,530.909,531.181,531.3,531.444,530.75,529.857,528.666,521,521,521.777,522.4,522.909,522.818,522.636,522.545,522.454,522.363,522.272,522.181,520.727,520.545,521.09,521.636,522.181,523.272,523.818,524.363,524.909,525.454,528.09,532.272,534.363,536.454,537.909,539.363,540.818,543.727,545.909,544.818,543.727,542.636,541.545,540,539.545,539.09,538.636,537.272,535.181,533.363,532.454,531.545,530.636,529.727,528.818,526.272,525.909,525.545,525.181,524.818,524.454,523.727,522.363,521,520,519,516.545,511.636,510.636,509.636,506.909,504.181,502.454,499,497.272,497,496.727,497.454,496.727,493.818,491.636,489.454,487.272,487.09,486.909,486.545,485.363,484.181,484.09,481.545,479,478.181,477.909,477.636,477.363,477.09,476.818,476.363,481.818,487.272,492.727,493.909,493.181,491.727,491,490.272,489.545,487.636,485.727,482.363,474.454,468.454,462.454,456.454,450.454,439.727,435,430.272,425.545,418.727,418.363,418.545,419.09,419.636,420.181,419.454,418.727,413.818,413,412.181,411.363,409.636,407.909,405,403.818,397.454,392.818,388.181,383.545,374.272,369.636,365,358.363,351.181,344,340,338,336,334,332,328.636,323.909,322.545,321.181,319.818,318.272,315.181,313.636,312.09,311.909,311.727,310.545,308.181,307,306,305,302.818,300.636,297.545,296.636,296.727,296.181,295.636,295.09,294,294.636,293.09,291.545,291.545,291.545,292.181,292.818,293.454,294.09,292.545,291,292.272,292.363,292.454,292.545,289.818,287.09,281.636,281.09,280.545,277,273.454,271.454,267.454,265.181,262.909,260.636,258.363,256.09,248.909,246.818,240.909,235,229.09,226.272,220.636,217.818,215,215,211.545,208.09,201.181,197.727,194.272,190.818,187.363,183.909,170.818,173,175.181,177.363,179.545,181.727,186.09,182.727,179.363,179.09,178.818,173.272,160.272,152.818,145.363,137.909,130.454,126.818,116.272,111,107.363,101.909,98.363,94.818,87,82.818,80.363,79.545,78.272,77,73,71.454,69.636,67.909,66.727,65.454,62.909,62.09,61.272,60.363,59.454,59,58.545,58.272,58.09,57.909,57.727,57.545,57.272,57.181,56.909,56.636,56.454,56.272,55.909,55.727,55.818,55.545,55.272,54.909,54.818,54.727,54.636,54.545,54.454,54,54,54,54,54,53.636,52.909,52.545,52.636,52.727,52.818,52.909,52.636,52.272,52.272,52.272,52.272,52.818,53,53.09,53.181,53.272,53.818,54.363,55.09,55.454,55.272,55.09,54.909,54.727,54.363,53.727,53.09,52.636,52.181,51.727,50.818,50.363,50.363,50.363,50.363,50.818,51.727,51.272,50.818,50.363,50.636,50.909,50.545,50.363,50.181,50,49.818,50.818,52.818,53.09,53.363,53.636,53.909,54.181,53.272,52.818,52.09,51.363,50.636,49.909,47.818,46.09,44.363,43.363,42.363,41.363,39.363,37.636,35.909,35.181,35.09,35.363,35.909,36.181,36.545,36.909,37.272,38.363,39.545,39.636,39.727,39.818,38.636,37.454,34.909,33.636,32.363,31.09,29.818,27.181,21.909,20.545,19.181,17.818,16.454,15.09,10.727,8.545,8.636,8.727,8.818,8.909,9.09,8.9,8.666,9.5,10.571,12],
        "unit": "m",
        "type": "area",
        "valueDecimals": 0
    }, {
        "name": "Current",
        "data": [101,98,103,115,124,128,133,138,138,141,143,149,149,148,146,147,152,149,155,152,153,153,156,152,151,151,149,148,150,157,161,156,160,158,156,159,164,162,160,165,165,167,167,163,166,165,161,164,163,164,162,163,164,166,166,166,166,166,164,167,166,162,164,163,161,166,168,168,169,169,165,166,167,163,167,167,169,171,167,169,171,175,174,167,168,171,167,169,169,167,166,165,163,161,163,166,162,164,166,162,162,164,163,162,162,163,161,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,113,117,121,119,117,120,121,124,125,127,125,129,130,131,135,135,135,135,134,136,139,142,142,145,145,150,153,155,156,157,157,154,153,152,148,130,123,123,120,123,119,115,114,114,115,115,113,112,111,113,113,113,113,110,110,109,110,110,109,108,108,109,107,107,107,109,109,111,111,111,111,111,112,112,112,112,112,114,113,113,113,113,113,113,112,111,114,118,124,127,128,128,129,131,133,131,130,133,130,136,135,135,136,136,135,136,135,134,135,137,138,139,138,134,130,130,129,129,132,132,131,130,133,132,132,128,128,132,132,128,128,129,130,130,130,130,131,133,134,132,132,130,131,129,133,133,130,130,133,133,131,130,130,130,129,129,129,126,128,126,129,129,124,125,120,120,123,125,125,124,124,125,125,126,126,126,127,126,130,134,135,126,123,124,123,127,130,130,132,133,133,133,133,130,130,129,128,124,123,124,124,127,135,139,139,134,134,133,130,130,127,129,126,126,126,129,129,123,123,128,128,125,125,125,123,123,122,122,122,125,125,125,126,126,128,128,129,129,124,125,125,125,129,131,131,131,131,131,131,131,129,129,126,126,126,126,126,125,125,126,126,126,125,126,127,130,130,130,130,132,132,132,132,132,132,129,130,132,133,132,132,129,128,128,132,133,135,137,138,139,139,142,142,141,143,144,144,143,145,145,147,150,153,158,159,160,159,160,160,160,162,162,163,162,161,161,162,161,164,166,166,165,162,162,159,157,160,159,160,160,161,161,162,162,163,163,165,166,166,164,164,166,165,166,163,162,162,161,159,159,159,159,159,156,154,153,152,152,151,154,153,151,151],
        "unit": "bpm",
        "type": "area",
        "valueDecimals": 0
    },
        {
        "name": "Power",
        "data": [101,98,103,115,124,1118,133,138,138,141,143,149,149,148,146,147,152,149,155,152,153,153,156,152,151,151,149,148,150,157,161,156,160,158,156,159,164,162,160,165,165,167,167,163,166,165,161,164,163,164,162,163,164,166,166,166,166,166,164,167,166,162,164,163,161,166,168,168,169,169,165,166,167,163,167,167,169,171,167,169,171,175,174,167,168,171,167,169,169,167,166,165,163,161,163,166,162,164,166,162,162,164,163,162,162,163,161,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,121,113,117,121,119,117,120,121,124,125,127,125,129,130,131,135,135,135,135,134,136,139,142,142,145,145,150,153,155,156,157,157,154,153,152,148,130,123,123,120,123,119,115,114,114,115,115,113,112,111,113,113,113,113,110,110,109,110,110,109,108,108,109,107,107,107,109,109,111,111,111,111,111,112,112,112,112,112,114,113,113,113,113,113,113,112,111,114,118,124,127,128,128,129,131,133,131,130,133,130,136,135,135,136,136,135,136,135,134,135,137,138,139,138,134,130,130,129,129,132,132,131,130,133,132,132,128,128,132,132,128,128,129,130,130,130,130,131,133,134,132,132,130,131,129,133,133,130,130,133,133,131,130,130,130,129,129,129,126,128,126,129,129,124,125,120,120,123,125,125,124,124,125,125,126,126,126,127,126,130,134,135,126,123,124,123,127,130,130,132,133,133,133,133,130,130,129,128,124,123,124,124,127,135,139,139,134,134,133,130,130,127,129,126,126,126,129,129,123,123,128,128,125,125,125,123,123,122,122,122,125,125,125,126,126,128,128,129,129,124,125,125,125,129,131,131,131,131,131,131,131,129,129,126,126,126,126,126,125,125,126,126,126,125,126,127,130,130,130,130,132,132,132,132,132,132,129,130,132,133,132,132,129,128,128,132,133,135,137,138,139,139,142,142,141,143,144,144,143,145,145,147,150,153,158,159,160,159,160,160,160,162,162,163,162,161,161,162,161,164,166,166,165,162,162,159,157,160,159,160,160,161,161,162,162,163,163,165,166,166,164,164,166,165,166,163,162,162,161,159,159,159,159,159,156,154,153,152,152,151,154,153,151,151],
        "unit": "bgn",
        "type": "area",
        "valueDecimals": 0
    }]
};

 /*--------------------------------------------------------------------------------Global Variables-------------------------------------------------------------------------------------*/
 var show = 0; //variable show is used to show or display the dragup table in borewell menu. It assumes values 0 and 1 to hide and show resp.
 var pane = 1; //variable pane is used to show of display the left pane in the dashboard. It assumes values 0 or 1 to hide or show resp.
 var no1 = 0,
     no2 = 0; //no1 & no2 are used to assign index to 'name' attribute of dynamically generated form fields of add-farmer and add-borewell resp.


 //The above variables are used by functions newFarmer() and newField().

 /*-----------------------------------------------------------------------------End of Global Variables----------------------------------------------------------------------------------*/



 /*-------------------------------------------------------------------Dropdown Toggle Button ('signed in as' button)---------------------------------------------------------------------*/

 /* When the user clicks on the button, 
 toggle between hiding and showing the dropdown content */
 function myFunction() {
     document.getElementById("myDropdown").classList.toggle("show");
 }

 // Close the dropdown if the user clicks outside of it
 window.onclick = function(event) {
     if (!event.target.matches('.dropbtn')) {

         var dropdowns = document.getElementsByClassName("dropdown-content");
         var i;
         for (i = 0; i < dropdowns.length; i++) {
             var openDropdown = dropdowns[i];
             if (openDropdown.classList.contains('show')) {
                 openDropdown.classList.remove('show');
             }
         }
     }
 }

 /*-----------------------------------------------------------------------------End of Drop Down Toggle Button---------------------------------------------------------------------------*/

 /*--------------------------------------------------------------------------------------HIGHCHARTS--------------------------------------------------------------------------------------*/

 /*-----------------------------------------------------------------------------Applying Theme for HighCharts----------------------------------------------------------------------------*/

 Highcharts.theme = {
     colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#F2F45B', '#aaeeee', '#ff0066', '#eeaaee',
         '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'
     ], //The colors you want to use in your Highcharts Theme. Edit in here to change Colors of Area charts in all transactions modal.
     chart: {
         backgroundColor: 'rgba(0,0,0,0.3)', //Background color of the chart
         style: {
             fontFamily: '\'Unica One\', sans-serif' //Font of the chart
         },
         plotBorderColor: '#606063'
     },
     title: {
         style: {
             color: '#E0E0E3',
             textTransform: 'uppercase',
             fontSize: '20px'
         }
     },
     subtitle: {
         style: {
             color: '#E0E0E3',
             textTransform: 'uppercase'
         }
     },
     xAxis: {
         gridLineColor: '#707073',
         labels: {
             style: {
                 color: '#E0E0E3'
             }
         },
         lineColor: '#707073',
         minorGridLineColor: '#505053',
         tickColor: '#707073',
         title: {
             style: {
                 color: '#A0A0A3'

             }
         }
     },
     yAxis: {
         gridLineColor: '#707073',
         labels: {
             style: {
                 color: '#E0E0E3'
             }
         },
         lineColor: '#707073',
         minorGridLineColor: '#505053',
         tickColor: '#707073',
         tickWidth: 1,
         title: {
             style: {
                 color: '#A0A0A3'
             }
         }
     },
     tooltip: {
         backgroundColor: 'rgba(0, 0, 0, 0.85)',
         style: {
             color: '#F0F0F0'
         }
     },
     plotOptions: {
         series: {
             dataLabels: {
                 color: '#B0B0B3'
             },
             marker: {
                 lineColor: '#333'
             }
         },
         boxplot: {
             fillColor: '#505053'
         },
         candlestick: {
             lineColor: 'white'
         },
         errorbar: {
             color: 'white'
         }
     },
     legend: {
         itemStyle: {
             color: '#E0E0E3'
         },
         itemHoverStyle: {
             color: '#FFF'
         },
         itemHiddenStyle: {
             color: '#606063'
         }
     },
     credits: {
         style: {
             color: '#666'
         }
     },
     labels: {
         style: {
             color: '#707073'
         }
     },

     drilldown: {
         activeAxisLabelStyle: {
             color: '#F0F0F3'
         },
         activeDataLabelStyle: {
             color: '#F0F0F3'
         }
     },

     navigation: {
         buttonOptions: {
             symbolStroke: '#DDDDDD',
             theme: {
                 fill: '#505053'
             }
         }
     },

     // scroll charts
     rangeSelector: {
         buttonTheme: {
             fill: '#505053',
             stroke: '#000000',
             style: {
                 color: '#CCC'
             },
             states: {
                 hover: {
                     fill: '#707073',
                     stroke: '#000000',
                     style: {
                         color: 'white'
                     }
                 },
                 select: {
                     fill: '#000003',
                     stroke: '#000000',
                     style: {
                         color: 'white'
                     }
                 }
             }
         },
         inputBoxBorderColor: '#505053',
         inputStyle: {
             backgroundColor: '#333',
             color: 'silver'

         },
         labelStyle: {
             color: 'silver'
         }
     },

     navigator: {
         handles: {
             backgroundColor: '#666',
             borderColor: '#AAA'
         },
         outlineColor: '#CCC',
         maskFill: 'rgba(255,255,255,0.1)',
         series: {
             color: '#7798BF',
             lineColor: '#A6C7ED'
         },
         xAxis: {
             gridLineColor: '#505053'
         }
     },

     scrollbar: {
         barBackgroundColor: '#808083',
         barBorderColor: '#808083',
         buttonArrowColor: '#CCC',
         buttonBackgroundColor: '#606063',
         buttonBorderColor: '#606063',
         rifleColor: '#FFF',
         trackBackgroundColor: '#404043',
         trackBorderColor: '#404043'
     },

     // special colors for some of the
     legendBackgroundColor: 'rgba(0, 0, 0, 0)',
     background2: '#505053',
     dataLabelsColor: '#B0B0B3',
     textColor: '#C0C0C0',
     contrastTextColor: '#F0F0F3',
     maskColor: 'rgba(255,255,255,0.3)'
 };

 // Apply the theme
 Highcharts.setOptions(Highcharts.theme); //Set the themes to the charts.

 /*--------------------------------------------------------------------------------End of Highcharts Theme-------------------------------------------------------------------------------*/

 /*---------------------------------------------------------------------Synchronized Charts for all transactions Modal-------------------------------------------------------------------*/

 
function fillChart(tid) {
    var len = dataAll.RMS[0].TRANSACTION.length;
    for (var i=0; i<len; i++) {
        if (dataAll.RMS[0].TRANSACTION[i].Transaction_ID == tid) {
            var voltageData = dataAll.RMS[0].TRANSACTION[i].VOLTAGE;
            var currentData = dataAll.RMS[0].TRANSACTION[i].CURRENT;
            var flowData = dataAll.RMS[0].TRANSACTION[i].FLOW;
            var powerData = dataAll.RMS[0].TRANSACTION[i].POWER;

            //change1
            var TIME = dataAll.RMS[0].TRANSACTION[i].TIME;
        }
    }

    var chart1 = Highcharts.chart('voltage', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Voltage Data'
        },
        xAxis: {
            categories: TIME    },
        series: [{
            showInLegend: false,
            color: Highcharts.theme.colors[0],
            data: voltageData
        }]
    });

    var chart2 = Highcharts.chart('current', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Current Data'
        },
        xAxis: {
            categories: TIME    },
        series: [{
            showInLegend: false,
            color: Highcharts.theme.colors[1],
            data: currentData
        }]
    });

    var chart3 = Highcharts.chart('flow', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Flow Data'
        },
        xAxis: {
            categories: TIME    },
        series: [{
            showInLegend: false,
            color: Highcharts.theme.colors[2],
            data: flowData
        }]
    });

    var chart4 = Highcharts.chart('power', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Power Data'
        },
        xAxis: {
            categories: TIME    },
        series: [{
            showInLegend: false,
            color: Highcharts.theme.colors[3],
            data: powerData
        }]
    });

}






 /*-------------------------------------------------------------------------------End of Synchronized Charts-----------------------------------------------------------------------------*/

 /*---------------------------------------------------------------------Drilldown at Home Page Code for various levels-------------------------------------------------------------------*/

 //Numerous levels can be added to the drilldown.

 $(function() {

     // Create the chart
     Highcharts.chart('container1', {

         credits: {
             enabled: false
         },

         chart: {
             type: 'column'
         },
         title: {
             text: 'Revenue'
         },

         xAxis: {
             type: 'category'
         },
         yAxis: {
             title: {
                 text: 'Revenue'
             }


         },
         legend: {
             enabled: false
         },

         plotOptions: {
             series: {
                 borderWidth: 0,
                 dataLabels: {
                     enabled: true,
                     format: '{point.y:.1f}%'
                 }
             }
         },

         tooltip: {
             headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
             pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
         },

         series: [{
             name: 'Things',
             colorByPoint: true,
             data: [{
                 name: '2017',
                 y: 5,
                 drilldown: 'animals' //Drilldown ID for level 1
             }, ]
         }],
         drilldown: {
             series: [{
                 id: 'animals', //Drilldown Description of level 1
                 name: 'Monthly Revenue',
                 data: [{
                         name: 'January',
                         y: 4,
                         drilldown: 'cats' //Drilldown ID for level 2
                     },
                     ['February', 1],
                     ['March', 2],
                     ['April', 1],
                     ['May', 4],
                     ['June', 8],
                     ['July', 12],
                     ['August', 10],
                     ['September', 2],
                     ['October', 7],
                     ['November', 5],
                     ['December', 4],
                 ]
             }, {

                 id: 'cats', //Drilldown Description of level 2
                 data: [
                     ['Week 1', 1],
                     ['Week 2', 2],
                     ['Week 3', 0],
                     ['Week 4', 4]
                 ]
             }]

         }
     });
 });


 /*---------------------------------------------------------------------------------------------End DrillDown------------------------------------------------------------------------------*/


 /*-----------------------------------------------------------------------------------Booking Chart in the Home Page-----------------------------------------------------------------------*/

 //Any number of Barcharts or Splines can be added. Refer the comments.

 $(function() {
     Highcharts.chart('container2', {
         legend: {
             enabled: false
         },
         title: {
             text: 'Bookings'
         },
         xAxis: {
             categories: ['January', 'February', 'March', 'April', 'May'] //x-axis points
         },
         labels: {
             items: [{
                 html: 'Bookings',
                 style: {
                     left: '50px',
                     top: '18px',
                     color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                 }
             }]
         },
         series: [{ //Bar-1
             type: 'column',
             name: 'Jane',
             data: [3, 2, 1, 3, 4]
         }, {
             type: 'column', //Bar-2
             name: 'John',
             data: [2, 3, 5, 7, 6]
         }, {
             type: 'column', //Bar-3
             name: 'Joe',
             data: [4, 3, 3, 9, 0]
         }, {
             type: 'spline', //Spline
             name: 'Average',
             data: [3, 2.67, 3, 6.33, 3.33],
             marker: {
                 lineWidth: 2,
                 lineColor: Highcharts.getOptions().colors[3],
                 fillColor: 'white'
             }
         }]
     });
 });

 /*----------------------------------------------------------------------------------------End of Revenue Chart---------------------------------------------------------------------------*/

 /*-----------------------------------------------------------------------------------------END OF HIGHCHARTS-----------------------------------------------------------------------------*/

 /*---------------------------------------------------------------------------------Javascript to change Tabs in Left Pane----------------------------------------------------------------*/

 //Will need to modify for adding Animations

 /*ChangeMenu() to be used to change tabs from left pane.
 str is a parameter which is the name of the tab clicked.
 The function hides all the tabs and displays only the clicked tab.*/

 function changeMenu(str) {

     if (str == 'dashboard') {
         document.getElementById("dashboard-home").style.display = "block";
         document.getElementById("patvan-menu").style.display = "none";
         document.getElementById("borewell-menu").style.display = "none";
         document.getElementById("farmers-menu").style.display = "none";
         document.getElementById("booking-menu").style.display = "none";
         document.getElementById("transaction-menu").style.display = "none";
         document.getElementById("pane-toggle").style.display = "none";
         document.getElementById("add-borewell-button").style.display = "none";
     }


     if (str == 'patvan') {
         document.getElementById("dashboard-home").style.display = "none";
         document.getElementById("patvan-menu").style.display = "block";
         document.getElementById("borewell-menu").style.display = "none";
         document.getElementById("farmers-menu").style.display = "none";
         document.getElementById("booking-menu").style.display = "none";
         document.getElementById("transaction-menu").style.display = "none";
         document.getElementById("pane-toggle").style.display = "block";
         document.getElementById("add-borewell-button").style.display = "none";
     }

     if (str == 'borewell') {
         document.getElementById("dashboard-home").style.display = "none";
         document.getElementById("patvan-menu").style.display = "none";
         document.getElementById("borewell-menu").style.display = "block";
         document.getElementById("farmers-menu").style.display = "none";
         document.getElementById("booking-menu").style.display = "none";
         document.getElementById("transaction-menu").style.display = "none";
         document.getElementById("pane-toggle").style.display = "block";
         document.getElementById("add-borewell-button").style.display = "block";
     }

     if (str == 'farmer') {
         document.getElementById("dashboard-home").style.display = "none";
         document.getElementById("patvan-menu").style.display = "none";
         document.getElementById("borewell-menu").style.display = "none";
         document.getElementById("farmers-menu").style.display = "block";
         document.getElementById("booking-menu").style.display = "none";
         document.getElementById("transaction-menu").style.display = "none";
         document.getElementById("add-borewell-button").style.display = "none";
         document.getElementById("pane-toggle").style.display = "block";
     }

     if (str == 'booking') {
         document.getElementById("dashboard-home").style.display = "none";
         document.getElementById("patvan-menu").style.display = "none";
         document.getElementById("borewell-menu").style.display = "none";
         document.getElementById("farmers-menu").style.display = "none";
         document.getElementById("booking-menu").style.display = "block";
         document.getElementById("transaction-menu").style.display = "none";
         document.getElementById("add-borewell-button").style.display = "none";
         document.getElementById("pane-toggle").style.display = "block";
     }

     if (str == 'transaction') {
         document.getElementById("dashboard-home").style.display = "none";
         document.getElementById("patvan-menu").style.display = "none";
         document.getElementById("borewell-menu").style.display = "none";
         document.getElementById("farmers-menu").style.display = "none";
         document.getElementById("booking-menu").style.display = "none";
         document.getElementById("transaction-menu").style.display = "block";
         document.getElementById("add-borewell-button").style.display = "none";
         document.getElementById("pane-toggle").style.display = "block";
     }

 }

 /*-------------------------------------------------------------------------------------End of changeMenu Function-------------------------------------------------------------------------*/


 /*---------------------------------------------------------------------------Javascript to change tabs at Transaction Menu----------------------------------------------------------------*/

 //Will need to modify for adding Animations

 /*ChangeTab() to be used to change tabs from All Transaction Menu.
 val is a parameter which is the name of the tab clicked.
 The function hides all the tabs and displays only the clicked tab.
 The selected tab is also highlighted.*/


 function changeTab(val) {
     var x = document.getElementsByClassName("transaction-tabs");
     if (val == 'allt') {
         x[0].className = x[0].className += " activet"; //appending 'activet' to the class to highlight the tab.
         x[1].className = x[1].className.replace(" activet", ""); //Removing the class 'activet' to make it passive
         x[2].className = x[2].className.replace(" activet", "");
         x[3].className = x[3].className.replace(" activet", "");
         document.getElementById("all-t").style.display = "block";
         document.getElementById("borewell-t").style.display = "none";
         document.getElementById("farmer-t").style.display = "none";
         document.getElementById("patvan-t").style.display = "none";
     }


     if (val == 'borewellt') {
         x[1].className = x[1].className += " activet";
         x[0].className = x[0].className.replace(" activet", "");
         x[2].className = x[2].className.replace(" activet", "");
         x[3].className = x[3].className.replace(" activet", "");
         document.getElementById("all-t").style.display = "none";
         document.getElementById("borewell-t").style.display = "block";
         document.getElementById("farmer-t").style.display = "none";
         document.getElementById("patvan-t").style.display = "none";
     }

     if (val == 'farmert') {
         x[2].className = x[2].className += " activet";
         x[1].className = x[1].className.replace(" activet", "");
         x[0].className = x[0].className.replace(" activet", "");
         x[3].className = x[3].className.replace(" activet", "");
         document.getElementById("all-t").style.display = "none";
         document.getElementById("borewell-t").style.display = "none";
         document.getElementById("farmer-t").style.display = "block";
         document.getElementById("patvan-t").style.display = "none";
     }

     if (val == 'patvant') {
         x[3].className = x[3].className += " activet";
         x[1].className = x[1].className.replace(" activet", "");
         x[2].className = x[2].className.replace(" activet", "");
         x[0].className = x[0].className.replace(" activet", "");
         document.getElementById("all-t").style.display = "none";
         document.getElementById("borewell-t").style.display = "none";
         document.getElementById("farmer-t").style.display = "none";
         document.getElementById("patvan-t").style.display = "block";
     }
 }

 /*----------------------------------------------------------------------------End of changeTab Function---------------------------------------------------------------------------------*/



 function closeModal(value) { //This function closes any opened modal. Accepts the div id as parameter.
     document.getElementById(value).style.display = 'none';
 }



 /*---------------------------------------------------------------------------START OF ALL TRANSACTIONS TAB------------------------------------------------------------------------------*/


 /*------------------------------------------------------------Changing the individual transaction tabs content on hover-----------------------------------------------------------------*/

 function changeover(h) {
     document.getElementsByClassName("t-tab1")[h - 1].style.display = 'none';
     document.getElementsByClassName("t-tab2")[h - 1].style.display = 'block';
 }

 function changeout(h) {
     document.getElementsByClassName("t-tab2")[h - 1].style.display = 'none';
     document.getElementsByClassName("t-tab1")[h - 1].style.display = 'block';
 }

 /*------------------------------------------------------------------------------End of Hover Funtions-----------------------------------------------------------------------------------*/


 /*--------------------------------------------------------------------------END OF ALL TRANSACTIONS TAB---------------------------------------------------------------------------------*/


 /*-------------------------------------------------------------------Function to operate dragup on Bookings table-----------------------------------------------------------------------*/

 function showHide() {
     if (show == 0) {
         document.getElementById("borewell-dragup").style.display = 'none';
         document.getElementById("show-hide-button").style.bottom = '2px';
         document.getElementById("link-tur").innerHTML = 'Show Table';
         document.getElementById("img-u-d").innerHTML = '<img src="img/admin/arrow-up.png" width="30">&nbsp;&nbsp;&nbsp;'; //Changing the arrow. (To be changed by animation).
         show = 1;
     } else if (show == 1) {
         document.getElementById("borewell-dragup").style.display = 'block';
         document.getElementById("show-hide-button").style.bottom = '502px';
         document.getElementById("link-tur").innerHTML = 'Hide Table';
         document.getElementById("img-u-d").innerHTML = '<img src="img/admin/arrow-down.png" width="30">&nbsp;&nbsp;&nbsp;';
         show = 0;
     }
 }

 /*----------------------------------------------------------------------------------End of dragup----------------------------------------------------------------------------------------*/

 /*----------------------------------------------------------------------Function to display or hide Left Pane----------------------------------------------------------------------------*/

 function showPane() {
     if (pane == 1) {
         var marginLeft = 'margin-left';
         document.getElementsByClassName("twenty")[0].style.display = 'none';
         document.getElementsByClassName("eighty")[0].style.width = '100%';
         document.getElementById("pane-toggle").style.marginLeft = '0px';
         document.getElementById("pane-toggle").innerHTML = '<center><img src="img/admin/arrow-right.png" width="30"></center>'; //Changing the arrow. (To be changed by animation).
         document.getElementById("container1").style.width = '100%';
         document.getElementById("container2").style.width = '100%';
         document.getElementById("borewell-dragup").style.width = '97.1%';
         document.getElementById("borewell-table").style.width = '100%';
         document.getElementById("show-hide-button").style.marginLeft = '560px';
         document.getElementById("add-borewell-button").style.marginLeft = '42%';
         document.getElementById("booking-menu").style.width = '100%';


         pane = 0;
     } else if (pane == 0) {
         var marginLeft = 'margin-left';
         document.getElementsByClassName("twenty")[0].style.display = 'block';
         document.getElementsByClassName("eighty")[0].style.width = '81%';
         document.getElementById("pane-toggle").style.marginLeft = '19%';
         document.getElementById("pane-toggle").innerHTML = '<center><img src="img/admin/arrow-left.png" width="30"></center>';
         document.getElementById("borewell-dragup").style.width = '1066px';
         document.getElementById("borewell-table").style.marginLeft = ''
         document.getElementById("show-hide-button").style.marginLeft = '470px';
         document.getElementById("add-borewell-button").style.marginLeft = '55%';
         document.getElementById("booking-menu").style.width = '80%';
         pane = 1;
     }
 }

 /*--------------------------------------------------------------------------------End of left pane Function--------------------------------------------------------------------------------*/

 /*----------------------------------------------------------------Function to 'add a new member' field in Add a farmer Modal---------------------------------------------------------------*/

 function newFarmer() {

     var table = '<table width="94%">';
     var tr = '<tr>';
     var td = '<td>';
     var etr = '</tr>';
     var etd = '</td>';
     var etable = '</table>';
     var center = '<center>';
     var ecenter = '</center>';
     var txtbx = '<input type="textbox" class="t2-form">'

     var newDiv = document.createElement('div'); //create a div element

     newDiv.innerHTML = //Modifying Inner HTML. Formatted for Easy Understanding.
         '<br/>' +

         table +
         tr +
         td + '*' + etd +
         td + 'Relation' + etd +
         td + '<input type = "textbox" class="t2-form" name="relation' + no1 + '">' + etd +
         etr +
         tr +
         td + '1)' + etd +
         td + 'Name:' + etd +
         td + '<input type = "textbox" class="t2-form" name="name' + no1 + '">' + etd +
         etr +
         tr +
         td + '2)' + etd +
         td + 'Age:' + etd +
         td + '<input type = "textbox" class="t2-form" name="age' + no1 + '">' + etd +
         etr +
         tr +
         td + '3)' + etd +
         td + 'Contact No.:' + etd +
         td + '<input type = "textbox" class="t2-form" name="contact' + no1 + '">' + etd +
         etr +
         tr +
         td + '4)' + etd +
         td + 'Education:' + etd +
         td + '<input type = "textbox" class="t2-form" name="education' + no1 + '">' + etd +
         etr +
         tr +
         td + '5)' + etd +
         td + 'Job:' + etd +
         td + '<input type = "textbox" class="t2-form" name="job' + no1 + '">' + etd +
         etr +
         tr +
         td + '6)' + etd +
         td + 'Disease:' + etd +
         td + '<input type = "textbox" class="t2-form" name="disease' + no1 + '">' + etd +
         etr +
         tr +
         td + '7)' + etd +
         td + 'Loan:' + etd +
         td + '<input type = "textbox" class="t2-form" name="loan' + no1 + '">' + etd +
         etr +
         tr +
         td + '8)' + etd +
         td + 'KCC Number:' + etd +
         td + '<input type = "textbox" class="t2-form" name="kcc' + no1 + '">' + etd +
         etr +
         tr +
         td + '9)' + etd +
         td + 'Vehicle:' + etd +
         td + '<input type = "textbox" class="t2-form" name="vehicle' + no1 + '">' + etd +
         etr +
         etable + '<hr>';

     document.getElementById("add-options").appendChild(newDiv); //append the created element to 'add-options' div element

     //alert(newDiv.innerHTML);
     no1++;
     document.getElementById("memNo").value = no1; //Value changed in the text-box to pass the total number of members added, to the server.                                                           
 }


 /*-------------------------------------------------------------------------------------End of newFarmer()----------------------------------------------------------------------------------*/

 /*--------------------------------------------------------------------Function to 'add a Farm' field in Add a Borewell Modal---------------------------------------------------------------*/

 function newField() {

     var table = '<table>';
     var tr = '<tr>';
     var td = '<td>';
     var etr = '</tr>';
     var etd = '</td>';
     var etable = '</table>';
     var center = '<center>';
     var ecenter = '</center>';
     var txtbx = '<input type="textbox" class="t-form">'

     var newDiv = document.createElement('div');

     newDiv.innerHTML =
         '<br/>' + 'Farm ' + (no2 + 1) + '<hr width="30%">' +

         table +

         tr +
         td + '1)' + etd +
         td + 'Farm Distance:' + etd +
         td + '<input type = "textbox" class="t2-form" name="fDist' + no2 + '">' + etd +
         etr +
         tr +
         td + '2)' + etd +
         td + 'Latitude:' + etd +
         td + '<input type = "textbox" class="t2-form" name="fLat' + no2 + '">' + etd +
         etr +
         tr +
         td + '3)' + etd +
         td + 'Longitude:' + etd +
         td + '<input type = "textbox" class="t2-form" name="fLon' + no2 + '">' + etd +
         etr +
         tr +
         td + '4)' + etd +
         td + 'Area:' + etd +
         td + '<input type = "textbox" class="t2-form" name="area' + no2 + '">' + etd +
         etr +
         tr +
         td + '5)' + etd +
         td + 'Owner:' + etd +
         td + '<select id="owner" name="ownNm' + no2 + '"><option>121</option></select>' + etd +
         etr +

         etable + '<br/>';

     document.getElementById("add-field").appendChild(newDiv);

     //alert(newDiv.innerHTML);
     no2++;

     document.getElementById("noField").value = no2; //Value changed in the text-box to pass the total number of fields added, to the server.
 }

 /*--------------------------------------------------------------------------------------End of newField()----------------------------------------------------------------------------------*/

 /*--------------------------------------------------------------------------------Enable Horizontal Scrolling------------------------------------------------------------------------------*/


 $(function() {
     $(".vertical-25").mousewheel(function(event, delta) {
         this.scrollLeft -= (delta * 150);
         event.preventDefault();
     });
 });

 /*----------------------------------------------------------------------------------------End Scrolling------------------------------------------------------------------------------------*/







 /*--------------------------------------------------------------------------------------End of Javascript----------------------------------------------------------------------------------*/