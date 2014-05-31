 $( document ).ready(function() {
    console.log( "document loaded" );
    var xbmcIP = localStorage["xbmcIP"];
	var xbmcPort = localStorage["xbmcPort"];
    var xbmcUser = localStorage["xbmcUser"];
	var xbmcPass = localStorage["xbmcPass"];
    var error_ = false;
    var error_message = "";

	if (xbmcIP == undefined) {
		xbmcIP = defaultIP;
	};
	if (xbmcPort == undefined) {
		xbmcPort = defaultPort;
	};
    if (xbmcUser == undefined) {
		xbmcUser = defaultuser;
	};
	if (xbmcPass == undefined) {
		xbmcPass = defaultpass;
	};
     
	$('input#IP').val(xbmcIP);
	$('input#Port').val(xbmcPort);
    $('input#User').val(xbmcUser);
	$('input#Password').val(xbmcPass);

	$("button#save").click(function() {
        
        var RegE = /^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/ 
        
        if ( $('input#IP').val().match(RegE) == null) {
            error_ = true
            error_message = error_message + "Not a valid IP address!\n";
            console.log(error_message);
        } else {
            console.log("The IP is valid");
        };
        if (isNaN($('input#Port').val()) == true || $('input#Port').val() == "" ) {
            error_ = true
            error_message = error_message + "The port is invalid!\n";
            console.log(error_message);
        };
        if ( error_ == true ) {
            alert("Error!\n\n" + error_message );
            error_message = "";
            error_ = false;
            
        } else {
            console.log("All values are correct!");
            localStorage['xbmcIP'] = $('input#IP').val();
            localStorage['xbmcPort'] = $('input#Port').val();
            localStorage['xbmcUser'] = $('input#User').val();
            localStorage['xbmcPass'] = $('input#Password').val();
        };    
	});

	$("input#play").click(function() {
		var tablink;
		chrome.tabs.getSelected(null,function(tab) {
			var tablink = tab.url;
			EnviarXBMC(tab.url);
		});
		
	});
});

var defaultIP = "";
var defaultPort = "";
var defaultuser = "";
var defaultpass = "";

function EnviarXBMC(link) {
	console.log(link);
    if (localStorage['xbmcIP'] == "" || localStorage['xbmcPort'] == "" ) {
        console.log("SportsDevil extension asked to send a link but configuration is not finished. Aborting...");
        alert("Error!\n\nYou need to configure your device before sending a request.");
	} else {
        if ( localStorage['xbmcUser'] == "" || localStorage['xbmcPass'] == "" ) {
            var url = 'http://' + localStorage['xbmcIP'] + ':' + localStorage['xbmcPort'] + '/jsonrpc';
        } else {
            var url = 'http://' + localStorage['xbmcUser'] + ':' + localStorage['xbmcPass'] + '@' + localStorage['xbmcIP'] + ':' + localStorage['xbmcPort'] + '/jsonrpc';
        };
	   var data = 'request={"jsonrpc": "2.0","id": 0,"method": "Addons.ExecuteAddon","params": {"addonid": "script.sportsdevilextension","params": {"url": "' + link + '"}}}';
	   console.log(url);
	   console.log(data);
	   pedido = $.ajax({
                    url: url,
                    type: "get",
                    data: data,
                    crossDomain: true,
                    dataType: "json",
                });  
	   alert("The url has been sent!\n\nCheck your XBMC.\n\nIf nothing happens, you maybe don't have the SportsDevil Chrome Extension addon installed or SportsDevil couldn't resolve the video url.");
    };
};

