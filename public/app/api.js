define(function (require) {
    return {
        getFormApi: function () {
            return require('app/apis/form');
        },
        getCacheApi: function () {
            return require('app/apis/cache');
        },
        getAuthApi: function () {
            return require('app/apis/auth');
        },
        getNetApi: function () {
            return require('app/apis/net');
        }
    };
});