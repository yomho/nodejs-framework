﻿define(function (require) {
    var cacheApi = require('app/apis/cache');
    return {
        getTicket: function () {
            return JSON.parse(cacheApi.getItem('current-user'));
        },
            cacheApi.setItem('current-user', JSON.stringify(ticket));
        },
            cacheApi.removeItem('current-user');
            if (callback) {
                callback();
            }
        },
        isExistsTicket: function () {
            return !!this.getTicket();
        }
    };
});