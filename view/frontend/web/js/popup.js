function getCookie (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function setCookie (name, value, expires) {
    var date = new Date(new Date().getTime() + expires * 1000);
    document.cookie = name + '=' + value + '; path=/; expires=' + date.toUTCString();
}

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_UK/sdk.js#xfbml=1&version=v2.5";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
    FB.Event.subscribe('edge.create', function(response) {
        window._fbq.push(['track', 'likePopup', {}]);
    });
};

var check_cookie = getCookie('popup-shown-fb');
if (!check_cookie) {
    setCookie('popup-shown-fb', 'true', 10800);
    setTimeout(function(){
        document.getElementById('fb-wrap').style.display = "block";
        if(window._fbq.length)
        {
            window._fbq.push(['track', 'showPopup', {}]);
        }
    },
    5000);
}
