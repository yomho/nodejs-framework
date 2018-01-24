define(function (require) {
    return {
        init: function (args) {
            var pathname = window.location.pathname;
            if (pathname === '/') {
                pathname = "login";
            } else {
                pathname = pathname.replace(/^[/]|[/]$/gi, '');
            }
            var segments = pathname.split('/');
            require(['../../' + pathname + '/js/' + segments[segments.length - 1]], function (controller) {
                if (controller) {
                    if (controller.init) {
                        controller.init.apply(this, arguments);
                    }
                }

            }, function (err) {
                console.error(err);
            });
        }
    }
});
