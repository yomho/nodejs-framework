define(function (require) {
    return {
        ajax: function (opts, callback, fallback) {
            $.support.cors = true;
            var dftOpts = {
                type: 'get',
                cache: false,
                dataType: "json",
                async: true,
                success: function (resp) {
                    if (callback) {
                        callback({
                            success:resp && resp.success === true,
                            resp: resp,
                            _arguments: arguments
                        });
                    }
                },
                error: function () {
                    var result = {
                        success: false,
                        _arguments: arguments
                    };
                    if (fallback) {
                        fallback(result);
                    } else {
                        if (callback) {
                            callback(result);
                        }
                    }
                }
            };
            var ajaxOpts = $.extend(true, {}, dftOpts, opts);
            $.ajax(ajaxOpts);
        }
    };
});