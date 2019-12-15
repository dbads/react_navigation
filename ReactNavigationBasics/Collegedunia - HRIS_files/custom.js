// fall back for Object.assign form IE

if ( !Object.assign || typeof Object.assign != 'function') {
    Object.assign = function assign() {
        if (arguments.length) {

            var obj = arguments[0];
            if (arguments.length > 1) {                      
                for (var i = 1; i < arguments.length; i++) {
                    var extraObj = arguments[i],
                        keys = Object.keys(extraObj);
                    for (var j = 0; j < keys.length; j += 1) {
                        obj[keys[j]] = extraObj[keys[j]];
                    }
                }
            }
            return obj;
        }
        else {
            console.log("arguments is required");
        }

        return false;
    }
}

$(function () {

    var $sidebar = $(".sidebar-wrapper");
    var $navLinks = $sidebar.find('.nav li a');

    if (location.pathname == "/" || location.pathname == "/dashboard/") {
        $navLinks.first().parent().addClass('active');
    }
    else {
        $navLinks.not(":first").filter(function(index, el) {
            return ($(el).attr('href') != "/" && location.pathname.indexOf($(el).attr('href')) >= 0);
        }).parent().addClass('active');
    }
});
