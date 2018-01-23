exports.cookie = {
    set: function (res, key, value) {
        res.cookie(key, value);
    },
    get: function (req, key) {
        return req.cookies[key] || '';
    }
};
exports.signedCookie = {
    set: function (res, key, value) {
        res.cookie(key, value, { signed: true });
    },
    get: function (req, key) {
        return req.signedCookies[key] || '';
    }
};
exports.clearCookie = function (res, key) {
    res.clearCookie(key);
};